import { Component } from "react";
import './product.css';
import Dataservice from "../services/data-service";
let ds=new Dataservice();

class Product extends Component{
    constructor(props){
        super(props)
        this.onButtonClicked=this.onButtonClicked.bind(this);
    }
    onButtonClicked=()=>{
        ds.addwli(this.props.product);
    }

    render(){
        return(
            <div className="card product">
                <img className="card-img-top" src={this.props.product.imgUrl} alt="Product"></img>
                    <div className="card-block">
                        <h4 className="card-title">{this.props.product.title}</h4>
                        <p className="card-text">Price : ${this.props.product.price}</p>
                        <a href="#" onClick={()=>this.onButtonClicked()}className="btn btn-primary">Add To WishList</a>

                    </div>
            </div>
        );
    }

}
export default Product;