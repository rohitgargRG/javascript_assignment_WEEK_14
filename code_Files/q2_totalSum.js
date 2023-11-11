let price1 = 200;
let price2 = 300;
let price3 = 400;

function calculateTotalCartValue(price1,price2,price3){
    return price1+price2+price3;
}

let total_val = calculateTotalCartValue(price1,price2,price3);

console.log(`total Cart Value = `,total_val);
