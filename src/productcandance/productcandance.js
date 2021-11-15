import { Component } from "react";
import './productcandance.css';

class Productcandance extends Component{
    render(){
        return(
           <li className="list-group-item ">
               <a className="btn btn-outline-danger ">X</a>
               <p className="hh">{this.props.product.title} | <b>${this.props.product.price}</b></p>
           </li> 
        );
    }

}
export default Productcandance;