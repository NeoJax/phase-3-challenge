// Requirements
const database = require('./database');
const Table = require('cli-table2');

const command = process.argv[2];
const string = process.argv[3];


function productList(section) {
  const proTable = new Table({
    chars: {'top': '-' , 'top-mid': '+' , 'top-left': '|' , 'top-right': '|'
         , 'bottom': '-' , 'bottom-mid': '+' , 'bottom-left': '|' , 'bottom-right': '|'
         , 'left': '|' , 'left-mid': '|' , 'mid': '-' , 'mid-mid': '+'
         , 'right': '|' , 'right-mid': '|' , 'middle': '│'},
    head: ['Product Name', 'Section'],
    style: {
      head: [],
      border: [],
    },
  });
  const products = database.grabProducts(section);
  products.then((data) => {
    data.forEach((item) => {
      proTable.push([item.productname, item.section]);
    });
    console.log(proTable.toString());
  });
}

function shopperOrders(id) {
  const ordTable = new Table({
    chars: {'top': '-' , 'top-mid': '+' , 'top-left': '|' , 'top-right': '|'
         , 'bottom': '-' , 'bottom-mid': '+' , 'bottom-left': '|' , 'bottom-right': '|'
         , 'left': '|' , 'left-mid': '|' , 'mid': '-' , 'mid-mid': '+'
         , 'right': '|' , 'right-mid': '|' , 'middle': '│'},
    head: ['Order ID', 'Total Cost'],
    style: {
      head: [],
      border: [],
    },
  });
  const orders = database.grabOrders(id);
  orders.then((data) => {
    data.forEach((item) => {
      ordTable.push([item.orid, item.totalcost]);
    });
    console.log(ordTable.toString());
  });
}

function realShoppers() {
  const shopTable = new Table({
    chars: {'top': '-' , 'top-mid': '+' , 'top-left': '|' , 'top-right': '|'
         , 'bottom': '-' , 'bottom-mid': '+' , 'bottom-left': '|' , 'bottom-right': '|'
         , 'left': '|' , 'left-mid': '|' , 'mid': '-' , 'mid-mid': '+'
         , 'right': '|' , 'right-mid': '|' , 'middle': '│'},
    head: ['Shopper Name', 'Number of Orders'],
    style: {
      head: [],
      border: [],
    },
  });
  const shoppers = database.grabShoppers();
  shoppers.then((data) => {
    data.forEach((item) => {
      shopTable.push([item.shopper, item.orders]);
    });
    console.log(shopTable.toString());
  });
}

// Switch Command Check
switch (command) {
  case 'product-list':
    productList(string);
    break;
  case 'shopper-orders':
    shopperOrders(string);
    break;
  case 'real-shoppers':
    realShoppers();
    break;
  default:
    console.log('Not a right command');
}
