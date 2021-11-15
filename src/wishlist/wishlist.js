import { Component } from "react";
import './wishlist.css';
import Notificationservice,{NOTIF_WISHLIST_CHANGED} from "../services/notificationservice";
import Dataservice from "../services/data-service";
import Productcandance from "../productcandance/productcandance";

let ns = new Notificationservice();
class Wishlist extends Component{
    constructor(props){
        super(props);
        this.state={Wishlist:[]}
        this.cnwl=this.cnwl.bind(this);
        this.onwishlistchanged=this.onwishlistchanged.bind(this);

    }
    cnwl=()=>{
        const list=this.state.Wishlist.map((product)=>
        <Productcandance product={product} key={product._id} />
        );
        return(list);
    }


    onwishlistchanged(newwishlist){
        this.setState({Wishlist:newwishlist});
    }

    componentDidMount(){
    ns.adObserver(NOTIF_WISHLIST_CHANGED,this,this.onwishlistchanged);    
    }

    componentWillUnmount(){
        ns.removeobserver(this,NOTIF_WISHLIST_CHANGED);

    }

    render(){
        return(
            <div className="card">
                <div className="card-block">
                    <h4 className="card-title">Wish List</h4>
                    <ul className="list-group">
                        {this.cnwl()}
                    </ul>
                </div>
            </div>
        );
    }

}
export default Wishlist;