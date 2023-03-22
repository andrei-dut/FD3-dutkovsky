import React from 'react';
import ReactDOM from 'react-dom';

import ClientsTable from './components/ClientsTable';


let clients=require('./clients.json');


ReactDOM.render(
  <ClientsTable 
    clients={clients}
  />
  , document.getElementById('container') 
);

