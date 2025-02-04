function applyDiscount(prices, discount) {
    const discountedPrices = prices.map(price => discount(price));
    console.log(discountedPrices);
}
function discount(price) {
    const discountRate = 0.2;  // Applied a 20 percent discount
    return price - (price * discountRate);
  }
  const prices = [100, 200, 300, 400];
  applyDiscount(prices, discount);