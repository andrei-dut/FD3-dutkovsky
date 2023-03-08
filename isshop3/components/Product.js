import React from 'react';
import PropTypes from 'prop-types';

import './Product.css';

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
  };

  confirmDelete = (e) => {
    e.stopPropagation();
    if (window.confirm("Удалить товар?")) {
      this.props.deleteProduct(this.props.id)
    }
  };

  render() {

    return (
    <div className="Isshop_wrap-product">
      <div 
        className={"Isshop_product" + (this.props.active ? " active" : "")}
        onClick={() => this.props.selectProduct(this.props.id)}
        >
        <img className="product__img" src={this.props.src} alt={this.props.name}/>
        <div className="product_desc">
          <p className="product__name">{this.props.name}</p>
          <p className="product__in-stock">{this.props.inStockText}</p>
          <p className="product__price">{this.props.price}</p>
          <button className="product__delete" onClick={this.confirmDelete}>Удалить</button>
        </div>
      </div>

    </div>
    )
  }

}

export default Product;
