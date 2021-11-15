import React,{Component} from'react';
import logo from './logo.svg';
import './App.css';


import httpserv from '../services/http-service';


import Wishlist from '../wishlist/wishlist';
import Product from '../product/product';
const http = new httpserv();





class App extends Component{
  constructor(props){
    super(props);
    this.localData= this.localData.bind(this);
    this.localData();
    this.state={products:[]};
    this.productlist=this.productlist.bind(this);
  }

    localData=()=>{
      var self=this;
      http.getProducts().then(data =>{
        self.setState({products:data})
      },err=>{

      });
    }
  
    productlist=()=>{
      const list=this.state.products.map((prod)=>
        <div className="col-4" key={prod._id}><Product product={prod} />
        </div>
       );
      return (list);
    }

  render(){
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"></img>
        <h2>Welcome to React</h2>
      </div>
      <div className="container-fluid App-main">
        <div className="row">
          <div className="col-8">
          <div className="row">
          {this.productlist()}
          </div>
          </div>
          <div className="col-4">
          <Wishlist />
          </div>
      </div>
      <div className="row">
        <div className="col-4">
        <Wishlist />
        </div>
      </div>
      </div>
    </div>
  );
  }
}

export default App;
