import { Candle } from "./candleShop";

describe("Candle", () => {
  const candle: Candle = new Candle("candleName", 9.0, 12, 20);
  const getNameSpy = jest.spyOn(candle, "getName");
  const getBurnTimeSpy = jest.spyOn(candle, "getBurnTime");
  const getAmountSpy = jest.spyOn(candle, "getAmount");
  const getTotalPriceSpy = jest.spyOn(candle, "getTotalPrice");
  const getTotalCostPerBurnSpy = jest.spyOn(candle, "getTotalCostPerBurn");
  const setAmountSpy = jest.spyOn(candle, "setAmount");
  const priceTotalSpy = jest.spyOn(candle, "priceTotal");
  const burnTimeTotalSpy = jest.spyOn(candle, "burnTimeTotal");
  const costPerBurnTimeTotalSpy = jest.spyOn(candle, "costPerBurnTimeTotal");

  const trueRule = jest.fn(() => true);

  describe(".getName", () => {
    test("defines function", () => {
      expect(typeof candle.getName).toBe("function");
    });

    test("Registers rule when called", () => {
      expect(candle.getName()).toBeUndefined();
      expect(getNameSpy).toHaveBeenCalledWith();

      getNameSpy.mockClear();
    });
  });
});
