import { Component } from "react";

import Header from "../Header";


import "./index.css";

class Productdetails extends Component {
  state = { apiSpecificProductData: [] };

  componentDidMount() {
    this.getSpecificProduct();
  }

  displaySpecificProduct = (apiSpecificProductData) => {
    

    const {
      id,
      category,
      description,
      image,
      price,
      rating,
      title,
    } = apiSpecificProductData;

    return (
      <div>
        <div className="product-container">
          <div>
            <img src={image} alt="title" className="images" />
          </div>
          <div>
            <p>Rs {price}.00</p>
            <p>{title}</p>
            <p>Category : {category}</p>
            <p>{description}</p>
            <button type="button">Add to cart</button>
          </div>
        </div>
      </div>
    );
  };

  getSpecificProduct = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      
      this.setState({ apiSpecificProductData: data });
    }
   
  };

  render() {
    const { apiSpecificProductData } = this.state;

    return (
      <div>
        <Header />
        {this.displaySpecificProduct(apiSpecificProductData)}
      </div>
    );
  }
}

export default Productdetails;
