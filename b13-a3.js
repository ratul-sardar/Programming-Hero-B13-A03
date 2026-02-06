// https://docs.google.com/document/d/1-2-Lhf5La5w4PSMMCF3UW0MULlAQa2AT6HyUTyU4CEc/preview?pru=AAABnFdgI-g*Rqwhqj-4zFEI6tXi9Rx1eA&tab=t.0#

// function newPrice(currentPrice, discount) {
//   let isPriceNumber = typeof currentPrice == "number" ? true : false;
//   let isDiscountNumber = typeof discount == "number" ? true : false;

//   if (isPriceNumber && isDiscountNumber && discount >= 0 && discount <= 100) {
//     let totalDiscount = (currentPrice * discount) / 100;
//     let discountPrice = currentPrice - totalDiscount;

//     return discountPrice;
//   } else {
//     return "Invalid";
//   }
// }

// function validOtp(otp) {
//   if (typeof otp == "string") {
//     if (otp.length === 8 && otp.startsWith("ph-")) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     return "Invalid";
//   }
// }

function finalScore(omr) {}

console.log(finalScore({ right: 67, wrong: 23, skip: 10 }));
