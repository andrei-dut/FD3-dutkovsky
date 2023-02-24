var Product = React.createClass({
  displayName: "Product",

  propTypes: {
    src: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    inStockText: React.PropTypes.string.isRequired,
    price: React.PropTypes.string.isRequired,
  },

  render: function () {
    return React.DOM.div(
      { className: "Isshop_wrap-product" },
      React.DOM.div(
        { className: "Isshop_product"},
        React.DOM.img({
          className: "product__img",
          src: this.props.src,
          alt: this.props.name,
        }),
        React.DOM.div(
          { className: "product_desc" },
          React.DOM.p({ className: "product__name" }, this.props.name),
          React.DOM.p(
            { className: "product__in-stock" },
            this.props.inStockText
          ),
          React.DOM.p(
            { className: "product__price" },
            this.props.price
          )
        )
      )
    );
  },
});
