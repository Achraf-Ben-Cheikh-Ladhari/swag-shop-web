import { Component } from "react";
import './product.css';
import Dataservice from "../services/data-service";
import Notificationservice ,{NOTIF_WISHLIST_CHANGED} from "../services/notificationservice";
let ds=new Dataservice();
let ns=new Notificationservice();
class Product extends Component{
    constructor(props){
        super(props);
        this.state={onWishList : ds.itemonwishlist()};


        this.onwishlistchanged=this.onwishlistchanged.bind(this);
        this.onButtonClicked=this.onButtonClicked.bind(this);
    }

    componentDidMount(){
        ns.adObserver(NOTIF_WISHLIST_CHANGED,this,this.onwishlistchanged);    
        }


componentWillUnmount(){
            ns.removeobserver(this,NOTIF_WISHLIST_CHANGED);
    
        }


        onwishlistchanged(nwl){
            this.setState({onWishList:ds.itemonwishlist(this.props.product)});
        }


    onButtonClicked=()=>{
        if(this.state.onWishList){
            ds.removewli(this.props.product);
            
        }else{
            ds.addwli(this.props.product);
        }
    }

    render(){

        var btncls;
        if(this.state.onWishList){
            btncls="btn btn-danger";
        }else{
            btncls="btn btn-primary";
        }


        return(
            <div className="card product">
                <img className="card-img-top" src={this.props.product.imgUrl} alt="Product"></img>
                    <div className="card-block">
                        <h4 className="card-title">{this.props.product.title}</h4>
                        <p className="card-text">Price : ${this.props.product.price}</p>
                        <a href="#" onClick={()=>this.onButtonClicked()}className={btncls}>{this.state.onWishList?"Remove from Wish List": "Add to Card"}</a>

                    </div>
            </div>
        );
    }

}
export default Product;