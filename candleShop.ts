import prompt from "prompt-sync";

interface Candles {
  name: string;
  price: number;
  burnTime: number;
  amount: number;
}

class Candle implements Candles {
  name: string;
  price: number;
  burnTime: number;
  amount: number;
  totalPrice: number;
  totalBurnTime: number;
  costPerBurnTime: number;
  constructor(name: string, price: number, burnTime: number, amount: number) {
    this.name = name;
    this.price = price;
    this.burnTime = burnTime;
    this.amount = amount;
  }

  // Getters
  getName(): string {
    return this.name;
  }

  getBurnTime(): number {
    return this.burnTime;
  }

  getAmount(): number {
    return this.amount;
  }

  getTotalPrice(): number {
    return this.totalPrice;
  }

  getTotalCostPerBurn(): number {
    return this.costPerBurnTime;
  }

  // Setters

  setAmount(amount: number) {
    this.amount = amount;
  }

  // Logic
  priceTotal(): number {
    this.totalPrice = this.amount * this.price;
    return this.totalPrice;
  }

  burnTimeTotal(): number {
    this.totalBurnTime = this.amount * this.burnTime;
    return this.totalBurnTime;
  }

  costPerBurnTimeTotal(): number {
    this.costPerBurnTime = this.priceTotal() / this.burnTime;
    return this.costPerBurnTime;
  }
}

let grandTotal: number = 0.0;
let grandTotalBurnTime: number = 0;
let grandCostPerBurnTime: number = 0.0;

const candleOne: Candle = new Candle("Luscious Lavender", 2.5, 5, 0);
const candleTwo: Candle = new Candle("Fragrant Floral's", 3.75, 7, 0);
const candleThree: Candle = new Candle("Spicy N' Dicey", 5.99, 12, 0);

const candles: Array<Candle> = [candleOne, candleTwo, candleThree];

// TODO find a way take in inputs Scanner keyboard = new Scanner(System.in);

let scanner = prompt({ echo: "" });

const exec: number = scanner("Enter 0 to continue: ");
if (exec != 0) throw new Error("Must enter 0");
// TODO: take in input to start program

for (let i = 0; i < candles.length; i++) {
  console.log(
    //prettier-ignore
    `How many of the ${candles[i].getName()} candles would you like? Enter a number amount.`
  );

  //get next input
  candles[i].setAmount(scanner());

  grandTotal += candles[i].priceTotal();
  grandTotalBurnTime += candles[i].burnTimeTotal();
  grandCostPerBurnTime += candles[i].costPerBurnTimeTotal();
}

console.log("Receipt");
for (let i = 0; i < candles.length; i++) {
  console.log(
    "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
  );

  console.log(`${candles[i].getName()}: 
  Amount: ${candles[i].getAmount()}
  Burn Time:  ${candles[i].getBurnTime()} hours
  Dollar per Burn Time: ${candles[i].getTotalCostPerBurn()}
  Price: $${candles[i].getTotalPrice()}`);
}

console.log(`Total Burn Time: ${grandTotalBurnTime} 
Total Dollar per Burn Time: ${grandCostPerBurnTime} 
Total Price: ${grandTotal}`);
