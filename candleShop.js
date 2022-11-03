var Candle = /** @class */ (function () {
    function Candle(name, price, burnTime, amount) {
        this.name = name;
        this.price = price;
        this.burnTime = burnTime;
        this.amount = amount;
    }
    // Getters
    Candle.prototype.getName = function () {
        return this.name;
    };
    Candle.prototype.getBurnTime = function () {
        return this.burnTime;
    };
    Candle.prototype.getAmount = function () {
        return this.amount;
    };
    Candle.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    Candle.prototype.getTotalCostPerBurn = function () {
        return this.costPerBurnTime;
    };
    // Setters
    Candle.prototype.setAmount = function (amount) {
        this.amount = amount;
    };
    // Logic
    Candle.prototype.priceTotal = function () {
        this.totalPrice = this.amount * this.price;
        return this.totalPrice;
    };
    Candle.prototype.burnTimeTotal = function () {
        this.totalBurnTime = this.amount * this.burnTime;
        return this.totalBurnTime;
    };
    Candle.prototype.costPerBurnTimeTotal = function () {
        this.costPerBurnTime = this.priceTotal() / this.burnTime;
        return this.costPerBurnTime;
    };
    return Candle;
}());
var grandTotal = 0.0;
var grandTotalBurnTime = 0;
var grandCostPerBurnTime = 0.0;
var candleOne = new Candle("Luscious Lavender", 2.5, 5, 0);
var candleTwo = new Candle("Fragrant Floral's", 3.75, 7, 0);
var candleThree = new Candle("Spicy N' Dicey", 5.99, 12, 0);
var candles = [candleOne, candleTwo, candleThree];
// TODO find a way take in inputs Scanner keyboard = new Scanner(System.in);
console.log("Enter 0 to continue: ");
// TODO: take in input to start program
for (var i = 0; i < candles.length; i++) {
    console.log(
    //prettier-ignore
    "How many of the ".concat(candles[i].getName(), " candles would you like? Enter a number amount."));
    candles[i].setAmount(Math.floor(Math.random() * 30));
    //get next input
    // candles[i].priceTotal();
    grandTotal += candles[i].priceTotal();
    grandTotalBurnTime += candles[i].burnTimeTotal();
    grandCostPerBurnTime += candles[i].costPerBurnTimeTotal();
}
console.log("Receipt");
for (var i = 0; i < candles.length; i++) {
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log("".concat(candles[i].getName(), ": \n  Amount: ").concat(candles[i].getAmount(), "\n  Burn Time:  ").concat(candles[i].getBurnTime(), " hours\n  Dollar per Burn Time: ").concat(candles[i].getTotalCostPerBurn(), "\n  Price: $").concat(candles[i].getTotalPrice()));
}
console.log("Total Burn Time: ".concat(grandTotalBurnTime, " \nTotal Dollar per Burn Time: ").concat(grandCostPerBurnTime, " \nTotal Price: ").concat(grandTotal));
