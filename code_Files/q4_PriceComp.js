const products = [
    {name:"laptop",price:120000},
    {name:"Mobile",price:70000},
    {name:"laptop bag",price:20000},
    {name:"Watch",price:20000},
    {name: "Mobile Charger",price:1500},
];

let max = 0;
let min = products[0].price;
let nameMax,nameMin;

for(let i=0;i<products.length;i++){
    if(max < products[i].price){
        max = products[i].price;
        nameMax = products[i].name;
    } 
    if(min > products[i].price){
        min = products[i].price;
        nameMin = products[i].name;
    } 
}

console.log(`The Product with maximum amount is ${nameMax} which is priced at Rs. ${max} `);
console.log(`The Product with minimum amount is ${nameMin} which is priced at Rs. ${min} `);