import {addProduct, calcStock, products} from './product.servic';

addProduct({
  title: 'Prod1',
  createdAt: new Date(1989, 1, 2),
  stock: 5
});

console.log(products);
const total = calcStock();
console.log(total);
