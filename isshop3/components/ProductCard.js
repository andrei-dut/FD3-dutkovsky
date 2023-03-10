import React from "react";
import PropTypes from "prop-types";

import "./ProductCard.css";

class ProductCard extends React.Component {
  static propTypes = {
    // src: PropTypes.string.isRequired,
    codeMode: PropTypes.number.isRequired,
    // name: PropTypes.string.isRequired,
    // inStockText: PropTypes.string.isRequired,
    // price: PropTypes.string.isRequired,
    // active: PropTypes.bool,
    // selectProduct: PropTypes.func,
    // deleteProduct: PropTypes.func,
    changeCodeMode: PropTypes.func,
    addProduct: PropTypes.func,
    editProduct: PropTypes.func,
    product: PropTypes.object,
  };

  state = {
    name: this.props.product.name,
    url: this.props.product.urlImg,
    price: this.props.product.price,
    inStock: this.props.product.inStock,
    error_name: false,
    error_price: false,
    error_url: false,
    error_inStock: false,
  };

  handlerFieldFrom = (e) => {
    let value = e.target.value;
    let id = e.target.id;
    this.setState(
      { [id]: value, [`error_${id}`]: this.checkValidate(id, value) },
      () => this.props.changeCodeMode(3)
    );
  };

  submitForm = (e) => {
    e.preventDefault();
    let formData = {
      id: this.props.product.id,
      name: this.state.name,
      urlImg: this.state.url,
      price: this.state.price,
      inStock: this.state.inStock,
    };
    console.log(formData)
    if(this.props.codeMode === 4) {
      this.props.addProduct(formData);
    }
    else {
      this.props.editProduct(formData)
    }
  };

  checkValidate = (key, value) => {
    if (key === "name") {
      console.log(key, value);
      return !(typeof value === "string" && value);
    } else if (key === "price") {
      return value <= 0;
    } else if (key === "url") {
      return !/(https?:\/\/[^\s]+)/g.test(value);
    } else if (key === "inStock") {
      return !Number.isInteger(+value) || value < 0;
    } else {
      !!this.state.codeValid && this.setState({ codeValid: 0 });
    }
  };

  render() {
    // console.log(this.props.product);
    // console.log(this.props.codeMode);
    return (
      <div className="Isshop_wrap-product-card">
        {this.props.codeMode === 1 ? (
          <div className="product_info">
            <h3 className="info__head">{this.props.product.name}</h3>
            <img
              className="info__img"
              src={this.props.product.urlImg}
              alt={this.props.product.name}
            />
            <p className="info__name">{this.props.product.name}</p>
            <p className="info__price">Цена: {this.props.product.price}</p>
          </div>
        ) : (
          <div className="product_edit">
            <h3 className="edit__head">Edit exiting Product</h3>
            <p className="edit__id">ID: {this.props.product.id}</p>
            <form className="edit_form" onSubmit={this.submitForm}>
              <div className="form_field">
                <label>
                  Name
                  <input
                    type="text"
                    value={this.state.name}
                    id={"name"}
                    onChange={this.handlerFieldFrom}
                    required
                  />
                </label>
                {this.state.error_name ? (
                  <p>Please, fill the field. Value must be a string</p>
                ) : null}
              </div>
              <div className="form_field">
                <label>
                  Price
                  <input
                    type="number"
                    value={this.state.price}
                    id={"price"}
                    onChange={this.handlerFieldFrom}
                  />
                </label>
                {this.state.error_price ? (
                  <p>
                    Please, fill the field. Value must be a rational number
                    greater than 0
                  </p>
                ) : null}
              </div>
              <div className="form_field">
                <label>
                  URL
                  <input
                    type="url"
                    value={this.state.url}
                    id={"url"}
                    onChange={this.handlerFieldFrom}
                  />
                </label>
                {this.state.error_url ? (
                  <p>Please, fill the field. Value must be a URL</p>
                ) : null}
              </div>
              <div className="form_field">
                <label>
                  Количество (Кг)
                  <input
                    type="number"
                    value={this.state.inStock}
                    id={"inStock"}
                    onChange={this.handlerFieldFrom}
                  />
                </label>
                {this.state.error_inStock ? (
                  <p>
                    Please, fill the field. Value must be a positive integer
                  </p>
                ) : null}
              </div>
              <button onClick={(e) => {
                e.preventDefault();
                this.props.changeCodeMode(0)
                }}>cancel</button>
              <button type="submit">{this.props.codeMode === 4 ? "Add" : "save"}</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default ProductCard;
