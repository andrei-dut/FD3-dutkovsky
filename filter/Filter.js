var Filter = React.createClass({
  displayName: "Filter",

  propTypes: {
    stringList: React.PropTypes.arrayOf(React.PropTypes.string.isRequired),
  },

  getInitialState: function () {
    return {
      inputValue: "",
      checkboxValue: false,
      stringList: this.props.stringList,
    };
  },

  handlerTools: function (e) {
    var target = e.target;

    if (target.id === "text") {
      this.setState((state, props) => {
        let filterList = props.stringList.filter((elem) =>
        elem.includes(target.value)
        );
        return {
        inputValue: target.value,
        stringList: state.checkboxValue ? filterList.sort() : filterList,
        }
      });
    } else if (target.id === "checkbox") {
      this.setState((state, props) => {
        let stringList = target.checked ? [...state.stringList].sort() : props.stringList.filter((elem) =>
        elem.includes(state.inputValue)
      )
        return {
          checkboxValue: target.checked,
          stringList,
        };
      });
    } else {
      this.setState({
        inputValue: "",
        checkboxValue: false,
        stringList: this.props.stringList,
      });
    }
    
  },

  render: function () {
    var stringList = this.state.stringList.map((elem, i) =>
      React.DOM.div({ className: "list__string", key: i + elem }, elem)
    );

    return React.DOM.div(
      { className: "Filter" },
      React.DOM.div(
        { className: "Filter-tools" },
        React.DOM.input({
          id: "checkbox",
          type: "checkbox",
          checked: this.state.checkboxValue,
          onChange: this.handlerTools,
        }),
        React.DOM.input({
          id: "text",
          className: "tools__text",
          type: "text",
          onChange: this.handlerTools,
          value: this.state.inputValue,
        }),
        React.DOM.button({ onClick: this.handlerTools }, "Сброс")
      ),
      React.DOM.div({ className: "Filter-list" }, stringList)
    );
  },
});
