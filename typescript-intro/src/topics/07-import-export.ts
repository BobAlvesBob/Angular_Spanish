import {type Product} from './06-function-destructuring';
import {taxCalculation} from './06-function-destructuring';

const shoppingCart : Array<Product> = [
    {
        description: 'Nokia',
        price: 100

    },
    {
        description: 'iPad',
        price: 150
    }
];

//const tax1: number = 0.15;
const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15

})

console.log('Total:', total);
console.log('Tax: ', tax);