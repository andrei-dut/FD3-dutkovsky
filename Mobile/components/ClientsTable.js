import React from "react";
import PropTypes from "prop-types";
import { tableEvents } from "./events";

import "./ClientsTable.css";
import Client from "./Client";
import NewClient from "./NewClient";

class ClientsTable extends React.Component {
  static propTypes = {
    clients: PropTypes.array,
  };

  state = {
    clients: this.props.clients,
    codeFilter: "all",
    newClient: false,
  };

  editClient = (client) => {
    this.setState(({ clients }) => ({
      clients: clients.map((elem) =>
        elem.id === client.id ? { ...elem, ...client } : elem
      ),
    }));
  };

  toggleNewClient = (_if) => {
    if(this.state.newClient && _if !== "close") return;
    this.setState({ newClient: _if === "close" ? false : true });
  };

  addNewClient = (client) => {
    let id = 0;
    this.setState(({ clients }) => {
      clients.forEach((element) => {
        id = element.id > id ? element.id : id;
      });
      ++id;
      return ({ clients: [...clients, { ...client, id }], newClient: false });
    });
  };

  removeClient = (id) => {
    this.setState(({ clients }) => ({ clients: clients.filter(elem => elem.id !== id)}));
  };

  componentDidMount = () => {
    tableEvents.addListener("editClient", this.editClient);
    tableEvents.addListener("toggleNewClient", this.toggleNewClient);
    tableEvents.addListener("addNewClient", this.addNewClient);
    tableEvents.addListener("removeClient", this.removeClient);
  };

  componentWillUnmount = () => {
    tableEvents.removeListener("editClient", this.editClient);
    tableEvents.removeListener("toggleNewClient", this.toggleNewClient);
    tableEvents.removeListener("addNewClient", this.addNewClient);
    tableEvents.removeListener("removeClient", this.removeClient);
  };

  handlerFilter = (key) => () => {
    this.setState({ codeFilter: key });
  };

  render() {

    console.log("RENDER", this.state.clients)
    return (
      <div className="WrapClientsTable">
        <div className="table-filter">
          <button onClick={this.handlerFilter("all")}>Все</button>
          <button onClick={this.handlerFilter("active")}>Активные</button>
          <button onClick={this.handlerFilter("blocked")}>
            Заблокированные
          </button>
        </div>
        <table>
          <thead>
            <tr>
              {[
                "Фамилия",
                "Имя",
                "Отчетсво",
                "Баланс",
                "Статус",
                "Редактировать",
                "Удалить",
              ].map((th) => (
                <th key={th}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.clients.map((client) => {
              switch (this.state.codeFilter) {
                case client.status:
                  return <Client key={client.id} client={client} />;
                default:
                  return this.state.codeFilter === "all" ? (
                    <Client key={client.id} client={client} />
                  ) : null;
              }
            })}
          </tbody>
        </table>
        <button className="table__new-client" onClick={this.toggleNewClient}>
          Добавить клиента
        </button>
        {this.state.newClient ? <NewClient openNewClient={this.state.newClient}/> : null}
      </div>
    );
  }
}

export default ClientsTable;
