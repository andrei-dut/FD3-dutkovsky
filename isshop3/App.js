import React from 'react';
import ReactDOM from 'react-dom';

import Isshop from './components/Isshop';

let head = "ISSHOP2";
let headList = "List of products";
let inStockText = "In stock:";
let priceText = "Price:";
let productsArr=require('./products.json');

ReactDOM.render(
  <Isshop 
    head={head}
    headList={headList}
    inStockText={inStockText}
    priceText={priceText}
    productsArr={productsArr}
  />
  , document.getElementById('container') 
);

