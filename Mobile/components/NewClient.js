import React from "react";
import { tableEvents } from "./events";
import PropTypes from "prop-types";

class NewClient extends React.Component {

  static propTypes = {
    openNewClient: PropTypes.bool,
  };

  

  nameRef = React.createRef();
  lastNameRef = React.createRef();
  patronymicRef = React.createRef();
  balanceRef = React.createRef();
  statusRef = React.createRef();

  submitForm = (e) => {
    e.preventDefault();
    tableEvents.emit("addNewClient", {
      name: this.nameRef.current.value,
      lastName: this.lastNameRef.current.value,
      patronymic: this.patronymicRef.current.value,
      balance: this.balanceRef.current.value,
      status: this.statusRef.current.checked ? "active" : "blocked",
      id: null,
    });
  };

  shouldComponentUpdate = (newProps, newState) => {
    return (
      newProps.openNewClient !== this.props.openNewClient);
  };


  render() {


    console.log("RENDER NEW CLIENT")

    return (
      <form className="new-client_form" onSubmit={this.submitForm}>
        <div className="form_field">
          <label>
            Имя
            <input type="text" id={"name"} ref={this.nameRef} required />
          </label>
        </div>
        <div className="form_field">
          <label>
            Фамилия
            <input
              type="text"
              id={"lastName"}
              ref={this.lastNameRef}
              required
            />
          </label>
        </div>
        <div className="form_field">
          <label>
            Отчетсво
            <input
              type="text"
              id={"patronymic"}
              ref={this.patronymicRef}
              required
            />
          </label>
        </div>
        <div className="form_field">
          <label>
            Баланс
            <input
              type="number"
              id={"balance"}
              ref={this.balanceRef}
              required
            />
          </label>
        </div>
        <div className="form_field">
          <label>
            Статус (Активный)
            <input type="checkbox" id={"status"} ref={this.statusRef} />
          </label>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            tableEvents.emit("toggleNewClient", "close");
          }}
        >
          Отменить
        </button>
        <button type="submit">Сохранить</button>
      </form>
    );
  }
}

export default NewClient;
