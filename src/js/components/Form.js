import React, { Component } from "react";
import ReactDOM from "react-dom";
import MyWidget from './widget';
import * as zoid from 'zoid/dist/zoid.frameworks.js';

const getCurrentProduct = () => {
  

}

let MyWidget1 = MyWidget.driver('react',{
   React: React,
   ReactDOM: ReactDOM
})

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // console.log(document.getElementsByName("product_id")[0])
     
  }
  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    let product = document.getElementsByName("product_id")[0];
    let img = document.getElementsByClassName("productView-img-container")[0];
    let img_url = img.getElementsByTagName('img')[0].src
    // if (product) {
      let product_id = product.value;
    // let product_url = img_url.getAttribute("data-zoom-image");

      // productView-image is-ready
     // let value = img_url.getAttribute("data-image");

      // let someimage = document.getElementById('productView-img-container');
      // let myimg = someimage.getElementsByTagName('img')[0];
      // let mysrc = myimg.src;
      // }
    return (
            <MyWidget1 image_url={img_url} domain={product_id} getCurrentProduct = {getCurrentProduct} />

    );
  }
}

export default Form;
const wrapper = document.getElementById("99minds-container-2");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;