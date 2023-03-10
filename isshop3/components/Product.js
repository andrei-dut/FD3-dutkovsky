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
    return (
      <div className="Isshop_wrap-product">
        <div
          className={"Isshop_product" + (this.props.active ? " active" : "")}
          onClick={() => this.props.codeMode === 3 ? null : this.props.selectProduct(this.props.id)}
        >
          <img
            className="product__img"
            src={this.props.src}
            alt={this.props.name}
          />
          <div className="product_desc">
            <p className="product__name">{this.props.name}</p>
            <p className="product__in-stock">{this.props.inStockText} кг</p>
            <p className="product__price">{this.props.price}</p>
            <div className="product_btns">
              <button
                className="product__delete"
                onClick={this.confirmDelete}
                disabled={this.props.codeMode === 3}
              >
                Удалить
              </button>
              <button
                className="product__edit"
                onClick={(e) => this.props.openEditProduct(e, this.props.id)}
                disabled={this.props.codeMode === 3}
              >
                Редактировать
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
