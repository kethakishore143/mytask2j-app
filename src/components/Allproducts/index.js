import { Component } from "react";
import { Link} from "react-router-dom";
import Header from "../Header";

import "./index.css"

class Allproducts extends Component {
  state = { Apidata: [] };

  componentDidMount() {
    this.getAllproductDetails();
  }

  displayproducts = (eachproduct) => {
    const {
      id,
      category,
      description,
      image,
      price,
      rating,
      title,
    } = eachproduct;

    return (
      <Link to={`/products/${id}`}>
        <li className="list-items">
          <div className="product-container">
            <div>
              <img src={image} alt="title" className="images" />
            </div>
            <div>
              <p>Rs {price}.00</p>
              <p>{title}</p>
              <p>Category : {category}</p>
              <button type="button">Add to cart</button>
            </div>
          </div>
        </li>
      </Link>
    );
  };

  getAllproductDetails = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();

    if (response.ok ) {
      this.setState({ Apidata: data });
    }
  };

  render() {
    const { Apidata } = this.state;
    return (
      <div>
        <Header />
        <ul className="list-items-container">
          {Apidata.map((eachproduct) => this.displayproducts(eachproduct))}
        </ul>
      </div>
    );
  }
}

export default Allproducts;
