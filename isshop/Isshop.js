var Isshop = React.createClass({
  displayName: "Isshop",

  propTypes: {
    head: React.PropTypes.string.isRequired,
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
      React.DOM.div(
        { className: "Isshop_wrap-product" },
        React.DOM.div(
          { className: "Isshop_product", key: item.id },
          React.DOM.img({ className: "product__img", src: item.urlImg, alt: item.name }),
          React.DOM.div(
            { className: "product_desc" },
            React.DOM.p({ className: "product__name" }, item.name),
            React.DOM.p({ className: "product__in-stock" }, inStockText + " " + item.inStock),
            React.DOM.p({ className: "product__price" },priceText + " " + item.price + " " + item.currency)
          )
        )
      )
    );

    return React.DOM.div(
      { className: "Isshop" },
      React.DOM.h1({ className: "Isshop__head" }, this.props.head),
      React.DOM.div({ className: "Isshop_list-products" }, product)
    );
  },
});
