
let billAmount = 0.0;
let tip = 0.0;
let tipRate = 0.0;
let total = 0.0;

const convertToNumber = (num) => {
    return parseFloat(num);
}

const calculateTip = (billAmount, tipRate) => {
    return (billAmount * tipRate / 100).toFixed(2);
}

const calculateTotal = (billAmount, tip) =>
  (convertToNumber(billAmount) + convertToNumber(tip)).toFixed(2);

billAmount = prompt("What is the bill amount? $");
billAmount = convertToNumber(billAmount)
tipRate = prompt("What is the tip rate? Enter 10 for 10% ");
tipRate = convertToNumber(tipRate)

tip = calculateTip(billAmount, tipRate);
total = calculateTotal(billAmount, tip);

console.log(typeof total);
alert(`Tip: $${tip}\nTotal: $${total}`)