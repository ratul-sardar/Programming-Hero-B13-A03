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
