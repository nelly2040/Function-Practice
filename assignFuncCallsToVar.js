function calculateTotal(unitPrice, quantity){
    //let totalCost= unitPrice * quantity;
    //return totalCost;
    return unitPrice * quantity;
}

let unitPrice= 500;
let quantity= 250;
let totalCost= calculateTotal(unitPrice, quantity);
console.log(totalCost);
