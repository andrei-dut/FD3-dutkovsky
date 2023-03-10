import React from "react";
import PropTypes from "prop-types";

import "./Product.css";

class Product extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    inStockText: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    active: PropTypes.bool,
    selectProduct: PropTypes.func,
    deleteProduct: PropTypes.func,
    openEditProduct: PropTypes.func,
    codeMode: PropTypes.number.isRequired,
  };

  confirmDelete = (e) => {
    e.stopPropagation();
    if (window.confirm("Удалить товар?")) {
      this.props.deleteProduct(this.props.id);
    }
  };

  render() {
    let disabledBtn = this.props.codeMode === 3 || this.props.codeMode === 4;
    return (
      <div className="Isshop_wrap-product">
        <div
          className={"Isshop_product" + (this.props.active ? " active" : "")}
          onClick={() => disabledBtn ? null : this.props.selectProduct(this.props.id)}
        >
          <img
            className="product__img"
            src={this.props.src}
            alt={this.props.name}
          />
          <div className="product_desc">
            <p className="product__name">{this.props.name}</p>
            <p className="product__in-stock">{this.props.inStockText} kg</p>
            <p className="product__price">{this.props.price}</p>
            <div className="product_btns">
              <button
                className="product__delete"
                onClick={this.confirmDelete}
                disabled={disabledBtn}
              >
                Delete
              </button>
              <button
                className="product__edit"
                onClick={(e) => this.props.openEditProduct(e, this.props.id)}
                disabled={disabledBtn}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
