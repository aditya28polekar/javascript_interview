const products = [ 
{ name: "T-Shirt", price: 25 }, 
{ name: "Headphones", price: 125 }, 
{ name: "Keyboard", price: 75 }, 
{ name: "Monitor", price: 200 },
];
//all product with price >= 100

let new_arr = products.filter(function fn(n){
    return n.price >= 100
}).map(function fn(n){
    return n.name;
})
console.log(new_arr)
//[ 'Headphones', 'Monitor' ]





