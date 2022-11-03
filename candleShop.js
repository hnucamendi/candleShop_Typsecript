import prompt from "prompt-sync";
class Candle {
    name;
    price;
    burnTime;
    amount;
    totalPrice;
    totalBurnTime;
    costPerBurnTime;
    constructor(name, price, burnTime, amount) {
        this.name = name;
        this.price = price;
        this.burnTime = burnTime;
        this.amount = amount;
    }
    // Getters
    getName() {
        return this.name;
    }
    getBurnTime() {
        return this.burnTime;
    }
    getAmount() {
        return this.amount;
    }
    getTotalPrice() {
        return this.totalPrice;
    }
    getTotalCostPerBurn() {
        return this.costPerBurnTime;
    }
    // Setters
    setAmount(amount) {
        this.amount = amount;
    }
    // Logic
    priceTotal() {
        this.totalPrice = this.amount * this.price;
        return this.totalPrice;
    }
    burnTimeTotal() {
        this.totalBurnTime = this.amount * this.burnTime;
        return this.totalBurnTime;
    }
    costPerBurnTimeTotal() {
        this.costPerBurnTime = this.priceTotal() / this.burnTime;
        return this.costPerBurnTime;
    }
}
let grandTotal = 0.0;
let grandTotalBurnTime = 0;
let grandCostPerBurnTime = 0.0;
const candleOne = new Candle("Luscious Lavender", 2.5, 5, 0);
const candleTwo = new Candle("Fragrant Floral's", 3.75, 7, 0);
const candleThree = new Candle("Spicy N' Dicey", 5.99, 12, 0);
const candles = [candleOne, candleTwo, candleThree];
// TODO find a way take in inputs Scanner keyboard = new Scanner(System.in);
let scanner = prompt({ echo: "" });
const exec = scanner("Enter 0 to continue: ");
if (exec != 0)
    throw new Error("Must enter 0");
// TODO: take in input to start program
for (let i = 0; i < candles.length; i++) {
    console.log(
    //prettier-ignore
    `How many of the ${candles[i].getName()} candles would you like? Enter a number amount.`);
    //get next input
    candles[i].setAmount(scanner());
    grandTotal += candles[i].priceTotal();
    grandTotalBurnTime += candles[i].burnTimeTotal();
    grandCostPerBurnTime += candles[i].costPerBurnTimeTotal();
}
console.log("Receipt");
for (let i = 0; i < candles.length; i++) {
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log(`${candles[i].getName()}: 
  Amount: ${candles[i].getAmount()}
  Burn Time:  ${candles[i].getBurnTime()} hours
  Dollar per Burn Time: ${candles[i].getTotalCostPerBurn()}
  Price: $${candles[i].getTotalPrice()}`);
}
console.log(`Total Burn Time: ${grandTotalBurnTime} 
Total Dollar per Burn Time: ${grandCostPerBurnTime} 
Total Price: ${grandTotal}`);
