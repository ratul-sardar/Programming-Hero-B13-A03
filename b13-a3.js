//https:docs.google.com/document/d/1-2-Lhf5La5w4PSMMCF3UW0MULlAQa2AT6HyUTyU4CEc/preview?pru=AAABnFdgI-g*Rqwhqj-4zFEI6tXi9Rx1eA&tab=t.0#

//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {
  let isPriceNumber = typeof currentPrice == "number" ? true : false;
  let isDiscountNumber = typeof discount == "number" ? true : false;

  if (isPriceNumber && isDiscountNumber && discount >= 0 && discount <= 100) {
    let totalDiscount = (currentPrice * discount) / 100;
    let discountPrice = (currentPrice - totalDiscount).toFixed(3);

    return discountPrice;
  } else {
    return "Invalid";
  }
}

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
  if (typeof otp == "string") {
    if (otp.length === 8 && otp.startsWith("ph-")) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Invalid";
  }
}

//Problem-03: BCS Final Score Calculator
function finalScore(omr) {
  const omrArray = Object.keys(omr);
  const rightAnswers = omr[omrArray[0]];
  const wrongAnswers = omr[omrArray[1]];
  const wrongAnswersValue = wrongAnswers * 0.5;

  let totalMark = 0;
  let examMark;

  for (let number of omrArray) {
    totalMark += omr[number];
  }

  if (totalMark === 100 && typeof omr == "object") {
    examMark = Math.round(rightAnswers - wrongAnswersValue);

    return examMark;
  } else {
    return "Invalid";
  }
}

//Problem-04: Upcoming Gono Vote
function gonoVote(array) {
  let haCount = 0;
  let naCount = 0;

  if (Array.isArray(array)) {
    for (let vote of array) {
      if (vote === "ha") {
        haCount++;
      } else if (vote === "na") {
        naCount++;
      }
    }

    if (haCount > naCount) {
      return true;
    } else if (haCount === naCount) {
      return "equal";
    } else {
      return false;
    }
  } else {
    return "Invalid";
  }
}

//Problem-05: Text Analyzer for an AI Company
function analyzeText(str) {
  if (typeof str === "string" && str != "") {
    let wordsArray = str.split(" ");
    let token = wordsArray.join("").length;
    let longwords = "";

    for (let word of wordsArray) {
      if (word.length > longwords.length) {
        longwords = word;
      }
    }

    return {
      longwords,
      token,
    };
  } else {
    return "Invalid";
  }
}
