import React from "react";
import PropTypes from "prop-types";

import { tableEvents } from "./events";

class Client extends React.Component {
  static propTypes = {
    client: PropTypes.object,
  };

  state = {
    edit: false,
  };

  lastNameRef = React.createRef();
  balanceRef = React.createRef();

  shouldComponentUpdate = (newProps, newState) => {
    return (
      newProps.client.id !== this.props.client.id ||
      newState.edit !== this.state.edit ||
      newProps.client.lastName !== this.props.client.lastName ||
      +newProps.client.balance !== +this.props.client.balance
    );
  };

  handerEdit = () => {
    if (this.state.edit) {
      tableEvents.emit("editClient", {
        id: this.props.client.id,
        lastName: this.lastNameRef.current.value,
        balance: this.balanceRef.current.value,
      });
    }
    this.setState(({ edit }) => ({ edit: !edit }));
  };

  render() {
    console.log(`RENDER CLIENT ${this.props.client.name}`);
    return (
      <tr>
        <td>
          {this.state.edit ? (
            <input
              ref={this.lastNameRef}
              defaultValue={this.props.client.lastName}
            />
          ) : (
            this.props.client.lastName
          )}
        </td>
        <td>{this.props.client.name}</td>
        <td>{this.props.client.patronymic}</td>
        <td>
          {this.state.edit ? (
            <input
              ref={this.balanceRef}
              defaultValue={this.props.client.balance}
            />
          ) : (
            this.props.client.balance
          )}
        </td>
        <td className={`status ${this.props.client.status}`}>
          {this.props.client.status}
        </td>
        <td>
          <button onClick={this.handerEdit}>
            {this.state.edit ? "Сохранить" : "Редактировать"}
          </button>
        </td>
        <td>
          <button
            onClick={() =>
              tableEvents.emit("removeClient", this.props.client.id)
            }
          >
            Удалить
          </button>
        </td>
      </tr>
    );
  }
}

export default Client;
