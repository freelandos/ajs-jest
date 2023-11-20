export default function calculateTotal(purchases, applyDiscount) {
  // let result = 0;
  // for (let i = 0; i < purchases.length; i++) {
  //   result += purchases[i].count * purchases[i].price;
  // }
  // return result;

  // return purchases.reduce((total, item) => total + item.count * item.price, 0);

  const sum = purchases.reduce((total, item) => total + item.count * item.price, 0);

  if (applyDiscount) {
    return sum * 0.5;
  }
  return sum;
}

// module.exports = {
//   calculateTotal,
// };
