//let myNumber: number = undefined;
//let myString: string = null;

let myNull: null = null;
let myUndefined: undefined = undefined;

let myNumber: number | null = null;
myNumber= 12;

let myString: string | undefined = undefined;
myString = 'as';

function hi (name: string | null){
  let hello = 'hola ';
  if(name){
    hello += name;
  }else{
    hello += 'nobody';
  }
  console.log(hello);
}

hi('profe');
hi(null);
hi2('elicita');
hi2(null);

function hi2 (name: string | null){
  let hello = 'hola ';
  hello += name?.toLowerCase() || 'naIdieN';
  console.log(hello);
}
