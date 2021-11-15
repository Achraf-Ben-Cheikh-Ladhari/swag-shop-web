import { Component } from "react";
import './productcandance.css';
import Dataservice from "../services/data-service";


let ds= new Dataservice();
class Productcandance extends Component{
    constructor(props){
        super(props);
        this.removeprod=this.removeprod.bind(this);
    }

    removeprod = () => {
        ds.removewli(this.props.product);
    }
    
    
    render(){
        return(
           <li className="list-group-item ">
               <a className="btn btn-outline-danger " onClick={()=>this.removeprod()}>X</a>
               <p className="hh">{this.props.product.title} | <b>${this.props.product.price}</b></p>
           </li> 
        );
    }

}
export default Productcandance;