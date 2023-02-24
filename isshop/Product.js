var Product = React.createClass({
  displayName: "Product",

  propTypes: {
    src: React.PropTypes.string.isRequired,
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    inStockText: React.PropTypes.string.isRequired,
    price: React.PropTypes.string.isRequired,
    active: React.PropTypes.bool,
    selectProduct: React.PropTypes.func,
    deleteProduct: React.PropTypes.func,
  },


  confirmDelete: function (e) {
    e.stopPropagation();
    if (window.confirm("Удалить товар?")) {
      this.props.deleteProduct(this.props.id)
    }
  },




  render: function () {
    return React.DOM.div(
      { className: "Isshop_wrap-product" },
      React.DOM.div(
        { className: "Isshop_product" + (this.props.active ? " active" : ""), onClick: () => this.props.selectProduct(this.props.id)},
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
          ),
          React.DOM.button(
            { className: "product__delete", onClick: this.confirmDelete},
            "Удалить"
          )
        )
      )
    );
  },
});
