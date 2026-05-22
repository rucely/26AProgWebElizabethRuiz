type Sizes = 'S' | 'M' | 'L' | 'XL';
type Product= {
  title: string,
  createAt: Date,
  stock: number,
  size?: Sizes
};

const products: Product[] = [];

const addProduct = (data:Product) => {
  products.push(data);
}

addProduct({
  title: 'producto 1',
  createAt: new Date(1989, 1,2),
  stock:12
});
console.log(products);
products.push({
  title: 'hola profe',
  createAt: new Date (2004, 8,3),
  stock: 8
}
)
