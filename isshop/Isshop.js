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

  render: function () {
    let product = this.props.listProducts.map((item) =>
      React.createElement(Product, {
        key: item.id,
        src: item.urlImg,
        name: item.name,
        inStockText: inStockText + " " + item.inStock,
        price: priceText + " " + item.price + " " + item.currency,
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
