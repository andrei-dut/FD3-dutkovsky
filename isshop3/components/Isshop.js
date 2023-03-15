import React from "react";
import PropTypes from "prop-types";

import "./Isshop.css";
import Product from "./Product";
import ProductCard from "./ProductCard";

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
        urlImg: PropTypes.string.isRequired,
        inStock: PropTypes.number,
      })
    ),
  };

  state = {
    selectedProduct: null,
    codeMode: 0,
    productsArr: this.props.productsArr,
  };

  selectProduct = (id) => {
    this.setState({ selectedProduct: id, codeMode: 1 });
  };

  openEditProduct = (e, id) => {
    e.stopPropagation();
    this.setState({ selectedProduct: id, codeMode: 2 });
  };

  changeCodeMode = (codeMode) => {
    console.log(codeMode)
    this.setState(({ selectedProduct }) => ({
      codeMode,
      selectedProduct: codeMode === 4 ? null : selectedProduct,
    }));
  };

  deleteProduct = (id) => {
    this.setState((state) => ({
      productsArr: state.productsArr.filter((elem) => elem.id !== id),
      selectedProduct: null,
      codeMode: 0,
    }));
  };

  addProduct = (data) => {
    let newProduct = data;
    this.setState(({productsArr}) => {
      let id = 0;
      productsArr.forEach(element => {
        id = element.id > id ? element.id : id;
      });
      newProduct.id = ++id; 
      return (
      {productsArr: [...productsArr, data], codeMode: 0}
      )
    })
  };

  editProduct = (data) => {
    this.setState(({productsArr,selectedProduct}) => (
      {productsArr: productsArr.map(elem => elem.id === selectedProduct ? data : elem), codeMode: 0}
      ))
  };

  getProductForcard = (mode) => {
    if (mode === 1 || mode === 2 || mode === 3) {
      return this.state.productsArr.find(
        (elem) => elem.id === this.state.selectedProduct
      );
    }
    if (mode === 4) return {
      name: "",
      urlImg: "",
      price: "",
      inStock: "",
    };

  };

  render() {
    let products = this.state.productsArr.map((item) => (
      <Product
        key={item.id}
        id={item.id}
        src={item.urlImg}
        name={item.name}
        inStockText={this.props.inStockText + " " + item.inStock}
        price={this.props.priceText + " " + item.price + " " + "BYN"}
        active={this.state.selectedProduct === item.id}
        selectProduct={this.selectProduct}
        deleteProduct={this.deleteProduct}
        openEditProduct={this.openEditProduct}
        codeMode={this.state.codeMode}
        changeCodeMode={this.changeCodeMode}
      />
    ));

    return (
      <div className="Isshop">
        <h1 className="Isshop__head"></h1>
        <h3 className="Isshop__head-list"></h3>
        <div className="Isshop_list-products">{products}</div>
        <button
          disabled={this.state.codeMode === 3}
          onClick={() => this.changeCodeMode(4)}
        >
          New product
        </button>
        {this.state.codeMode ? (
          <ProductCard
            product={this.getProductForcard(this.state.codeMode)}
            codeMode={this.state.codeMode}
            changeCodeMode={this.changeCodeMode}
            addProduct={this.addProduct}
            editProduct={this.editProduct}
            key={this.state.selectedProduct}
          />
        ) : null}
      </div>
    );
  }
}

export default Isshop;
