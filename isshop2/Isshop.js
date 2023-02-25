var Isshop = React.createClass({
  displayName: "Isshop",

  propTypes: {
    head: React.PropTypes.string.isRequired,
    headList: React.PropTypes.string.isRequired,
    inStockText: React.PropTypes.string.isRequired,
    priceText: React.PropTypes.string.isRequired,
    listProducts: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        currency: React.PropTypes.string.isRequired,
        urlImg: React.PropTypes.string.isRequired,
        inStock: React.PropTypes.string,
      })
    ),
  },

  getInitialState: function () {
    return {
      selectedProduct: null,
      listProducts: this.props.listProducts,
    };
  },

  selectProduct: function (id) {
    this.setState({ selectedProduct: id });
  },

  deleteProduct: function (id) {
    if(id === this.state.selectedProduct) {
      this.setState({selectedProduct: null});
    }
    this.setState((state) => ({
      listProducts: state.listProducts.filter((elem) => elem.id !== id),
    }));
  },

  render: function () {
    let product = this.state.listProducts.map((item) =>
      React.createElement(Product, {
        key: item.id,
        id: item.id,
        src: item.urlImg,
        name: item.name,
        inStockText: inStockText + " " + item.inStock,
        price: priceText + " " + item.price + " " + item.currency,
        active: this.state.selectedProduct === item.id,
        selectProduct: this.selectProduct,
        deleteProduct: this.deleteProduct,
      })
    );

    return React.DOM.div(
      { className: "Isshop" },
      React.DOM.h1({ className: "Isshop__head" }, this.props.head),
      React.DOM.h3({ className: "Isshop__head-list" }, this.props.headList),
      React.DOM.div({ className: "Isshop_list-products" }, product)
    );
  },
});
