import React from 'react';
import PropTypes from 'prop-types';

import './Isshop.css';
import Product from './Product';

class Isshop extends React.Component {

  static propTypes = {
    head: PropTypes.string.isRequired,
    headList: PropTypes.string.isRequired,
    inStockText: PropTypes.string.isRequired,
    priceText: PropTypes.string.isRequired,
    productsArr: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
        urlImg: PropTypes.string.isRequired,
        inStock: PropTypes.string,
      })
    ),
  };

  
  state = {
    selectedProduct: null,
    productsArr: this.props.productsArr,
  };


  selectProduct = (id) =>  {
    this.setState({ selectedProduct: id });
  };

  deleteProduct = (id) => {
    if(id === this.state.selectedProduct) {
      this.setState({selectedProduct: null});
    }
    this.setState((state) => ({
      productsArr: state.productsArr.filter((elem) => elem.id !== id),
    }));
  };


  render() {

    let products = this.state.productsArr.map((item) =>
    <Product 
      key={item.id}
      id={item.id}
      src={item.urlImg}
      name={item.name}
      inStockText={this.props.inStockText + " " + item.inStock}
      price={this.props.priceText + " " + item.price + " " + item.currency}
      active={this.state.selectedProduct === item.id}
      selectProduct={this.selectProduct}
      deleteProduct={this.deleteProduct}
  />
  );

    return (
    <div className="Isshop">
      <h1 className="Isshop__head"></h1>
      <h3 className="Isshop__head-list"></h3>
      <div className="Isshop_list-products">
        {products}
      </div>
    </div>
    )
  }

}

export default Isshop;
