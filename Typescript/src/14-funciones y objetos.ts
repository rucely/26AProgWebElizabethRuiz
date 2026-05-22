const login = (data: {email: string, password: number}) =>{
  console.log(data.email, data.password);
}

login({
  email: 'eli@cita.com',
  password: 123456
}
)

type Sizes = 'S' | 'M' | 'L' | 'XL';

const products: any[] = [];
const addProduct = (data: {
  title: string,
  createAt: Date,
  stock: number,
  size?: Sizes
}) => {
  products.push(data);
}

addProduct({
  title: 'producto 1',
  createAt: new Date(1989, 1,2),
  stock:12
});
console.log(products);
