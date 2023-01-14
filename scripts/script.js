//	//	//	//	//	//	//	//	//	//	//	//	//	//	//	//
var wheel1index = [
  "5D",
  "ll",
  "KC",
  "cc",
  "6S",
  "cc",
  "JH",
  "cc",
  "7H",
  "9C",
  "TD",
  "AS",
  "2H",
  "4C",
  "5D",
];
var wheel2index = [
  "2S",
  "ll",
  "ll",
  "5C",
  "cc",
  "QH",
  "jj",
  "8H",
  "JS",
  "6D",
  "TC",
  "3H",
  "7S",
  "AD",
  "2S",
];
var wheel3index = [
  "9H",
  "ll",
  "8S",
  "ll",
  "KH",
  "cc",
  "4H",
  "6C",
  "JD",
  "AC",
  "2D",
  "QS",
  "7D",
  "3S",
  "9H",
];
var wheel4index = [
  "4S",
  "ll",
  "KS",
  "QD",
  "jj",
  "JC",
  "cc",
  "8D",
  "7C",
  "TH",
  "9S",
  "3D",
  "2C",
  "5H",
  "4S",
];
var wheel5index = [
  "KD",
  "ll",
  "TS",
  "cc",
  "9D",
  "ll",
  "QC",
  "cc",
  "4D",
  "8C",
  "6H",
  "5S",
  "AH",
  "3C",
  "KD",
];
var dealGridOfCards = [
  ["1", "2", "3", "4", "5"],
  ["6", "7", "8", "9", "10"],
  ["11", "12", "13", "14", "15"],
  ["16", "17", "18", "19", "20"],
  ["21", "22", "23", "24", "25"],
];
var currentHands = [
  ["1", "2", "3", "4", "5"],
  ["6", "7", "8", "9", "10"],
  ["11", "12", "13", "14", "15"],
  ["16", "17", "18", "19", "20"],
  ["21", "22", "23", "24", "25"],
  ["26", "27", "28", "29", "30"],
  ["31", "32", "33", "34", "35"],
  ["36", "37", "38", "39", "40"],
  ["41", "42", "44", "44", "45"],
  ["46", "47", "48", "49", "50"],
  ["51", "52", "53", "54", "55"],
  ["56", "57", "55", "59", "60"],
  ["61", "62", "63", "64", "65"],
];
var currentPokerResults = [
  "notInitializedHand1",
  "notInitializedHand2",
  "notInitializedHand3",
  "notInitializedHand4",
  "notInitializedHand5",
  "notInitializedHand6",
  "notInitializedHand7",
  "notInitializedHand8",
  "notInitializedHand9",
  "notInitializedHand10",
  "notInitializedHand11",
  "notInitializedHand12",
  "notInitializedHand13",
];
var wheel1spinning = false;
var wheel2spinning = false;
var wheel3spinning = false;
var wheel4spinning = false;
var wheel5spinning = false;

var toWhatPixelWheel1 = 0;
var toWhatPosWheel1 = 0;
var currentSetPixelWheel1 = 0;
var currentSetPosWheel1 = 0;
var spinRateWheel1 = Math.floor(Math.random() * 56);
var fastEnoughWheel1 = false;
var wheelIntervalWheel1 = setInterval(animateSpinWheel1, 1);
clearInterval("wheelIntervalWheel1");
var toWhatPixelWheel5 = 0;
var toWhatPosWheel5 = 0;
var currentSetPixelWheel5 = 0;
var currentSetPosWheel5 = 0;
var spinRateWheel5 = Math.floor(Math.random() * 56);
var fastEnoughWheel5 = false;
var wheelIntervalWheel5 = setInterval(animateSpinWheel5, 1);
clearInterval("wheelIntervalWheel5");
var toWhatPixelWheel2 = 0;
var toWhatPosWheel2 = 0;
var currentSetPixelWheel2 = 0;
var currentSetPosWheel2 = 0;
var spinRateWheel2 = Math.floor(Math.random() * 56);
var fastEnoughWheel2 = false;
var wheelIntervalWheel2 = setInterval(animateSpinWheel2, 1);
clearInterval("wheelIntervalWheel2");
var toWhatPixelWheel3 = 0;
var toWhatPosWheel3 = 0;
var currentSetPixelWheel3 = 0;
var currentSetPosWheel3 = 0;
var spinRateWheel3 = Math.floor(Math.random() * 56);
var fastEnoughWheel3 = false;
var wheelIntervalWheel3 = setInterval(animateSpinWheel3, 1);
clearInterval("wheelIntervalWheel3");
var toWhatPixelWheel4 = 0;
var toWhatPosWheel4 = 0;
var currentSetPixelWheel4 = 0;
var currentSetPosWheel4 = 0;
var spinRateWheel4 = Math.floor(Math.random() * 56);
var fastEnoughWheel4 = false;
var wheelIntervalWheel4 = setInterval(animateSpinWheel4, 1);
clearInterval("wheelIntervalWheel4");

var overideWheels = false;
if (overideWheels) {
  var overideWheel1Pos = 9;
  var overideWheel2Pos = 11;
  var overideWheel3Pos = 11;
  var overideWheel4Pos = 7;
  var overideWheel5Pos = 3;
} else {
  var overideWheel1Pos = -1;
  var overideWheel2Pos = -1;
  var overideWheel3Pos = -1;
  var overideWheel4Pos = -1;
  var overideWheel5Pos = -1;
}

function clickedButtonDeal() {
  document.getElementById("dealBTN").style.visibility = "hidden";
  document.getElementById("cashOutBTN").style.visibility = "visible";
  clickedButtonWheel1();
  clickedButtonWheel2();
  clickedButtonWheel3();
  clickedButtonWheel4();
  clickedButtonWheel5();
  document.getElementById("wheel1BTN").style.visibility = "visible";
  document.getElementById("wheel2BTN").style.visibility = "visible";
  document.getElementById("wheel3BTN").style.visibility = "visible";
  document.getElementById("wheel4BTN").style.visibility = "visible";
  document.getElementById("wheel5BTN").style.visibility = "visible";
}

function clickedButtonCashOut() {
  document.getElementById("cashOutBTN").style.visibility = "hidden";
  document.getElementById("wheel1BTN").style.visibility = "hidden";
  document.getElementById("wheel2BTN").style.visibility = "hidden";
  document.getElementById("wheel3BTN").style.visibility = "hidden";
  document.getElementById("wheel4BTN").style.visibility = "hidden";
  document.getElementById("wheel5BTN").style.visibility = "hidden";
  document.getElementById("dealBTN").style.visibility = "visible";
}

function readGridToRowColArray() {
  var card;

  for (var row = 0; row <= 4; row++) {
    for (var col = 0; col <= 4; col++) {
      if (col == 0) {
        tmpIndex = currentSetPosWheel1 - row;
        if (tmpIndex < 0) {
          tmpIndex = tmpIndex + 14;
        }
        card = wheel1index[tmpIndex];
      }
      if (col == 1) {
        tmpIndex = currentSetPosWheel2 - row;
        if (tmpIndex < 0) {
          tmpIndex = tmpIndex + 14;
        }
        card = wheel2index[tmpIndex];
      }
      if (col == 2) {
        tmpIndex = currentSetPosWheel3 - row;
        if (tmpIndex < 0) {
          tmpIndex = tmpIndex + 14;
        }
        card = wheel3index[tmpIndex];
      }
      if (col == 3) {
        tmpIndex = currentSetPosWheel4 - row;
        if (tmpIndex < 0) {
          tmpIndex = tmpIndex + 14;
        }
        card = wheel4index[tmpIndex];
      }
      if (col == 4) {
        tmpIndex = currentSetPosWheel5 - row;
        if (tmpIndex < 0) {
          tmpIndex = tmpIndex + 14;
        }
        card = wheel5index[tmpIndex];
      }
      dealGridOfCards[row][col] = card;
    }
  }
  console.log("-----------------");
  console.log("-----------------");
  console.log(
    dealGridOfCards[0][0] +
      ", " +
      dealGridOfCards[0][1] +
      ", " +
      dealGridOfCards[0][2] +
      ", " +
      dealGridOfCards[0][3] +
      ", " +
      dealGridOfCards[0][4]
  );
  console.log(
    dealGridOfCards[1][0] +
      ", " +
      dealGridOfCards[1][1] +
      ", " +
      dealGridOfCards[1][2] +
      ", " +
      dealGridOfCards[1][3] +
      ", " +
      dealGridOfCards[1][4]
  );
  console.log(
    dealGridOfCards[2][0] +
      ", " +
      dealGridOfCards[2][1] +
      ", " +
      dealGridOfCards[2][2] +
      ", " +
      dealGridOfCards[2][3] +
      ", " +
      dealGridOfCards[2][4]
  );
  console.log(
    dealGridOfCards[3][0] +
      ", " +
      dealGridOfCards[3][1] +
      ", " +
      dealGridOfCards[3][2] +
      ", " +
      dealGridOfCards[3][3] +
      ", " +
      dealGridOfCards[3][4]
  );
  console.log(
    dealGridOfCards[4][0] +
      ", " +
      dealGridOfCards[4][1] +
      ", " +
      dealGridOfCards[4][2] +
      ", " +
      dealGridOfCards[4][3] +
      ", " +
      dealGridOfCards[4][4]
  );
  console.log("-----------------");
  setHandArrays();
}

function setHandArrays() {
  var tmpHand;
  for (var cardIndex = 0; cardIndex <= 4; cardIndex++) {
    if (cardIndex == 0) {
      currentHands[0][cardIndex] = dealGridOfCards[3][cardIndex];
      currentHands[1][cardIndex] = dealGridOfCards[2][cardIndex];
      currentHands[2][cardIndex] = dealGridOfCards[1][cardIndex];
      currentHands[3][cardIndex] = dealGridOfCards[0][cardIndex];
      currentHands[4][cardIndex] = dealGridOfCards[0][cardIndex];
      currentHands[5][cardIndex] = dealGridOfCards[1][cardIndex];
      currentHands[6][cardIndex] = dealGridOfCards[2][cardIndex];
      currentHands[7][cardIndex] = dealGridOfCards[3][cardIndex];
      currentHands[8][cardIndex] = dealGridOfCards[4][cardIndex];
      currentHands[9][cardIndex] = dealGridOfCards[4][cardIndex];
      currentHands[10][cardIndex] = dealGridOfCards[3][cardIndex];
      currentHands[11][cardIndex] = dealGridOfCards[2][cardIndex];
      currentHands[12][cardIndex] = dealGridOfCards[1][cardIndex];
    }
    if (cardIndex == 1) {
      currentHands[0][cardIndex] = dealGridOfCards[2][cardIndex];
      currentHands[1][cardIndex] = dealGridOfCards[1][cardIndex];
      currentHands[2][cardIndex] = dealGridOfCards[0][cardIndex];
      currentHands[3][cardIndex] = dealGridOfCards[1][cardIndex];
      currentHands[4][cardIndex] = dealGridOfCards[0][cardIndex];
      currentHands[5][cardIndex] = dealGridOfCards[1][cardIndex];
      currentHands[6][cardIndex] = dealGridOfCards[2][cardIndex];
      currentHands[7][cardIndex] = dealGridOfCards[3][cardIndex];
      currentHands[8][cardIndex] = dealGridOfCards[4][cardIndex];
      currentHands[9][cardIndex] = dealGridOfCards[3][cardIndex];
      currentHands[10][cardIndex] = dealGridOfCards[4][cardIndex];
      currentHands[11][cardIndex] = dealGridOfCards[3][cardIndex];
      currentHands[12][cardIndex] = dealGridOfCards[2][cardIndex];
    }
    if (cardIndex == 2) {
      currentHands[0][cardIndex] = dealGridOfCards[1][cardIndex];
      currentHands[1][cardIndex] = dealGridOfCards[0][cardIndex];
      currentHands[2][cardIndex] = dealGridOfCards[1][cardIndex];
      currentHands[3][cardIndex] = dealGridOfCards[2][cardIndex];
      currentHands[4][cardIndex] = dealGridOfCards[0][cardIndex];
      currentHands[5][cardIndex] = dealGridOfCards[1][cardIndex];
      currentHands[6][cardIndex] = dealGridOfCards[2][cardIndex];
      currentHands[7][cardIndex] = dealGridOfCards[3][cardIndex];
      currentHands[8][cardIndex] = dealGridOfCards[4][cardIndex];
      currentHands[9][cardIndex] = dealGridOfCards[2][cardIndex];
      currentHands[10][cardIndex] = dealGridOfCards[3][cardIndex];
      currentHands[11][cardIndex] = dealGridOfCards[4][cardIndex];
      currentHands[12][cardIndex] = dealGridOfCards[3][cardIndex];
    }
    if (cardIndex == 3) {
      currentHands[0][cardIndex] = dealGridOfCards[0][cardIndex];
      currentHands[1][cardIndex] = dealGridOfCards[1][cardIndex];
      currentHands[2][cardIndex] = dealGridOfCards[2][cardIndex];
      currentHands[3][cardIndex] = dealGridOfCards[3][cardIndex];
      currentHands[4][cardIndex] = dealGridOfCards[0][cardIndex];
      currentHands[5][cardIndex] = dealGridOfCards[1][cardIndex];
      currentHands[6][cardIndex] = dealGridOfCards[2][cardIndex];
      currentHands[7][cardIndex] = dealGridOfCards[3][cardIndex];
      currentHands[8][cardIndex] = dealGridOfCards[4][cardIndex];
      currentHands[9][cardIndex] = dealGridOfCards[1][cardIndex];
      currentHands[10][cardIndex] = dealGridOfCards[2][cardIndex];
      currentHands[11][cardIndex] = dealGridOfCards[3][cardIndex];
      currentHands[12][cardIndex] = dealGridOfCards[4][cardIndex];
    }
    if (cardIndex == 4) {
      currentHands[0][cardIndex] = dealGridOfCards[1][cardIndex];
      currentHands[1][cardIndex] = dealGridOfCards[2][cardIndex];
      currentHands[2][cardIndex] = dealGridOfCards[3][cardIndex];
      currentHands[3][cardIndex] = dealGridOfCards[4][cardIndex];
      currentHands[4][cardIndex] = dealGridOfCards[0][cardIndex];
      currentHands[5][cardIndex] = dealGridOfCards[1][cardIndex];
      currentHands[6][cardIndex] = dealGridOfCards[2][cardIndex];
      currentHands[7][cardIndex] = dealGridOfCards[3][cardIndex];
      currentHands[8][cardIndex] = dealGridOfCards[4][cardIndex];
      currentHands[9][cardIndex] = dealGridOfCards[0][cardIndex];
      currentHands[10][cardIndex] = dealGridOfCards[1][cardIndex];
      currentHands[11][cardIndex] = dealGridOfCards[2][cardIndex];
      currentHands[12][cardIndex] = dealGridOfCards[3][cardIndex];
    }
  }
  for (var row = 0; row <= 12; row++) {
    tmpHand = "Hand #" + (row + 1) + ": ";
    for (var col = 0; col <= 4; col++) {
      tmpHand = tmpHand + currentHands[row][col] + ", ";
    }
    var tmpLog = "";
    if (row == 3 || row == 9) {
      tmpLog = " ";
    }
    console.log(tmpLog + tmpHand);
  }
  judgeHands();
}

function judgeHands() {
  if (
    wheel1spinning == false &&
    wheel2spinning == false &&
    wheel3spinning == false &&
    wheel4spinning == false &&
    wheel5spinning == false
  ) {
    for (var handCount = 0; handCount <= 12; handCount++) {
      currentPokerResults[handCount] = checkPokerResults(
        currentHands[handCount],
        handCount
      );
      var divIDtoUpdate = "poker" + (handCount + 1);
      document.getElementById(divIDtoUpdate).innerHTML =
        "Poker: " + currentPokerResults[handCount];
    }
  }
}

function checkPokerResults(hand, whatHand) {
  var value = [0, 0, 0, 0, 0];
  var type = ["", "", "", "", ""];
  var bestResult = ":-( nothin'";
  var fiveOfAkind = false; //
  var royalFlush = false;
  var straightFlush = false;
  var fourOfAkind = false; //
  var fullHouse = false; //
  var flush = false; //
  var straight = false;
  var threeOfAkind = false; //
  var twoPair = false; //
  var twoOfAkind = false; //
  var noneOfAkind = false; //
  var highCardValue = 0;
  var lowCardValue = 15;
  var howManyAreTheSameValueAsMe = [0, 0, 0, 0, 1];
  var howManyAreTheSameTypeAsMe = [0, 0, 0, 0, 1];
  var howManyAces = 0;
  var howManyJokers = 0;
  for (var whatCard = 0; whatCard <= 4; whatCard++) {
    value[whatCard] = hand[whatCard].substring(0, 1);
    if (value[whatCard] === "l") {
      value[whatCard] = -2;
    }
    if (value[whatCard] === "c") {
      value[whatCard] = -1;
    }
    if (value[whatCard] === "j") {
      value[whatCard] = 0;
    }
    if (value[whatCard] === "A") {
      value[whatCard] = 1;
    }
    if (value[whatCard] === "T") {
      value[whatCard] = 10;
    }
    if (value[whatCard] === "J") {
      value[whatCard] = 11;
    }
    if (value[whatCard] === "Q") {
      value[whatCard] = 12;
    }
    if (value[whatCard] === "K") {
      value[whatCard] = 13;
    }
    value[whatCard] = Number(value[whatCard]);
    type[whatCard] = hand[whatCard].substring(1, 2);
  }
  for (var compareCard1 = 0; compareCard1 <= 3; compareCard1++) {
    for (
      var compareCard2 = compareCard1 + 1;
      compareCard2 <= 4;
      compareCard2++
    ) {
      if (value[compareCard1] > value[compareCard2]) {
        var tmpVal = value[compareCard1];
        var tmpTyp = type[compareCard1];
        value[compareCard1] = value[compareCard2];
        type[compareCard1] = type[compareCard2];
        value[compareCard2] = tmpVal;
        type[compareCard2] = tmpTyp;
      }
    }
  }
  for (var cardIndex = 0; cardIndex <= 4; cardIndex++) {
    if (value[cardIndex] > 1 && value[cardIndex] < lowCardValue) {
      lowCardValue = value[cardIndex];
    }
    if (value[cardIndex] > highCardValue) {
      highCardValue = value[cardIndex];
    }
    if (value[cardIndex] < 0) {
      highCardValue = 15;
      lowCardValue = 0;
    }
    if (value[cardIndex] == 0) {
      howManyJokers++;
    }
    if (value[cardIndex] == 1) {
      howManyAces++;
    }
  }
  for (var compareCard1 = 0; compareCard1 <= 3; compareCard1++) {
    howManyAreTheSameValueAsMe[compareCard1]++;
    howManyAreTheSameTypeAsMe[compareCard1]++;
    for (
      var compareCard2 = compareCard1 + 1;
      compareCard2 <= 4;
      compareCard2++
    ) {
      if (value[compareCard1] == value[compareCard2]) {
        howManyAreTheSameValueAsMe[compareCard1]++;
        howManyAreTheSameValueAsMe[compareCard2]++;
      }
      if (value[compareCard1] == 0 || value[compareCard2] == 0) {
        howManyAreTheSameValueAsMe[compareCard1]++;
        howManyAreTheSameValueAsMe[compareCard2]++;
      }
      if (type[compareCard1] == type[compareCard2]) {
        howManyAreTheSameTypeAsMe[compareCard1]++;
        howManyAreTheSameTypeAsMe[compareCard2]++;
      }
      if (value[compareCard1] == 0 || value[compareCard2] == 0) {
        howManyAreTheSameTypeAsMe[compareCard1]++;
        howManyAreTheSameTypeAsMe[compareCard2]++;
      }
    }
  }
  if (whatHand == 3 || whatHand == 9) {
    console.log(
      " [" +
        howManyJokers +
        "][" +
        howManyAces +
        "] " +
        howManyAreTheSameValueAsMe +
        "<>" +
        howManyAreTheSameTypeAsMe +
        " " +
        lowCardValue +
        "<" +
        (highCardValue - lowCardValue) +
        ">" +
        highCardValue +
        " " +
        type +
        " | " +
        value
    );
  } else {
    console.log(
      "[" +
        howManyJokers +
        "][" +
        howManyAces +
        "] " +
        howManyAreTheSameValueAsMe +
        "<>" +
        howManyAreTheSameTypeAsMe +
        " " +
        lowCardValue +
        "<" +
        (highCardValue - lowCardValue) +
        ">" +
        highCardValue +
        " " +
        type +
        " | " +
        value
    );
  }
  var pairOwhat = ["?", "?", "?", "?"];
  var pairOfWhat = "?";
  var andWhat = "?";
  var threeOwhat = ["?", "?", "?"];
  var threeOfWhat = "?";
  var fourOfWhat = "?";
  var fiveOfWhat = "?";
  var straightHighCard = "?";
  var straightLowCard = "?";
  var flushType = "?";

  if (howManyAreTheSameValueAsMe[3] == 5) {
    fiveOfWhat = value[3];
  }
  if (howManyAreTheSameTypeAsMe[3] == 5) {
    flushType = type[3];
  }

  fiveOfAkind = true;
  fourOfAkind = true;
  fullHouse = true;
  flush = true;
  straight = true;
  threeOfAkind = true;
  twoPair = true;
  twoOfAkind = true;

  noneOfAkind = true;
  for (index = 0; index <= 4; index++) {
    // CHECK noneOfAkind
    if (howManyAreTheSameTypeAsMe[index] != 1) {
      noneOfAkind = false;
    }
    if (howManyAreTheSameValueAsMe[index] != 1) {
      noneOfAkind = false;
    }
    // CHECK twoOfAkind
    if (howManyAreTheSameValueAsMe[index] == 2) {
      if (pairOwhat[0] == "?") {
        pairOwhat[0] = value[index];
        pairOfWhat = value[index];
      } else if (pairOwhat[1] == "?") {
        pairOwhat[1] = value[index];
        pairOfWhat = value[index];
      } else if (pairOwhat[2] == "?") {
        pairOwhat[2] = value[index];
        pairOfWhat = value[index];
      } else if (pairOwhat[3] == "?") {
        pairOwhat[3] = value[index];
        pairOfWhat = value[index];
      }
    }
    // CHECK threeOfAkind
    if (howManyAreTheSameValueAsMe[index] == 3) {
      if (threeOwhat[0] == "?") {
        threeOwhat[0] = value[index];
        threeOfWhat = value[index];
      } else if (threeOwhat[1] == "?") {
        threeOwhat[1] = value[index];
        threeOfWhat = value[index];
      } else if (threeOwhat[2] == "?") {
        threeOwhat[2] = value[index];
        threeOfWhat = value[index];
      }
    }
    // CHECK fourOfAkind
    if (howManyAreTheSameValueAsMe[index] == 4) {
      fourOfWhat = value[index];
    }
    // CHECK flush
    if (howManyAreTheSameTypeAsMe[index] <= 4) {
      flush = false;
    }
    // CHECK fiveOfAkind
    if (howManyAreTheSameValueAsMe[index] <= 4) {
      fiveOfAkind = false;
    }
  }
  if (
    pairOwhat[0] == 1 ||
    pairOwhat[1] == 1 ||
    pairOwhat[2] == 1 ||
    pairOwhat[3] == 1
  ) {
    pairOfWhat = 14;
  }
  if (threeOwhat[0] == 1 || threeOwhat[1] == 1 || threeOwhat[2] == 1) {
    threeOfWhat = 14;
  }
  if (fourOfWhat == "?") {
    fourOfAkind = false;
  }
  if (threeOfWhat == "?") {
    threeOfAkind = false;
  }
  if (pairOfWhat == "?") {
    twoOfAkind = false;
  }
  // CHECK twoPair
  if (twoOfAkind) {
    var tmpValue = value.slice(0);
    var howManyOfMe = [0, 0, 0, 0, 0];
    andWhat = "?";
    for (index = 0; index <= 4; index++) {
      if (tmpValue[index] == 0 || tmpValue[index] == pairOfWhat) {
        tmpValue[index] = 15;
      }
      if (tmpValue[index] == 1) {
        tmpValue[index] = 14;
      }
      if (tmpValue[index] < 15) {
        for (next = index + 1; next <= 4; next++) {
          if (tmpValue[index] == tmpValue[next]) {
            howManyOfMe[index]++;
          }
        }
        if (howManyOfMe[index] > 0) {
          andWhat = tmpValue[index];
        }
      }
    }
    if (andWhat == "?") {
      twoPair = false;
    }
  } else {
    twoPair = false;
  }
  // CHECK fullHouse
  if (threeOfAkind) {
    var tmpValue = value.slice(0);
    var howManyOfMe = [0, 0, 0, 0, 0];
    andWhat = "?";
    for (index = 0; index <= 4; index++) {
      if (tmpValue[index] == 0 || tmpValue[index] == threeOfWhat) {
        tmpValue[index] = 15;
      }
      if (tmpValue[index] == 1) {
        tmpValue[index] = 14;
      }
      if (tmpValue[index] < 15) {
        for (next = index + 1; next <= 4; next++) {
          if (tmpValue[index] == tmpValue[next]) {
            howManyOfMe[index]++;
          }
        }
        if (howManyOfMe[index] > 0) {
          andWhat = tmpValue[index];
        }
      }
    }
    if (andWhat == "?") {
      fullHouse = false;
    }
  } else {
    fullHouse = false;
  }
  // CHECK straight
  if (!twoOfAkind && !threeOfAkind && !fourOfAkind && !fiveOfAkind) {
    if (highCardValue - lowCardValue <= 4) {
      alert(
        howManyJokers +
          "\n" +
          howManyAces +
          "\n" +
          lowCardValue +
          "\n" +
          highCardValue +
          "\n" +
          twoOfAkind +
          "\n" +
          threeOfAkind +
          "\n" +
          fourOfAkind +
          "\n" +
          fiveOfAkind
      );
    } else {
      straight = false;
    }
  } else {
    straight = false;
  }
  // Update bestResult
  if (noneOfAkind) {
    bestResult = "None of a Kind";
  }
  if (twoOfAkind) {
    bestResult = "Pair of " + valueToText(pairOfWhat) + "s";
  }
  if (twoPair) {
    bestResult =
      "Two Pair, " +
      valueToText(pairOfWhat) +
      "s and " +
      valueToText(andWhat) +
      "s";
  }
  if (threeOfAkind) {
    bestResult = "Three " + valueToText(threeOfWhat) + "s";
  }
  if (straight) {
    bestResult =
      "Straight, " +
      valueToText(lowCardValue) +
      " through " +
      valueToText(highCardValue);
  }
  if (flush) {
    bestResult = typeToText(flushType) + " Flush";
  }
  if (fullHouse) {
    bestResult =
      "Full House, " +
      valueToText(threeOfWhat) +
      "s over " +
      valueToText(andWhat) +
      "s";
  }
  if (fourOfAkind) {
    bestResult = "Four " + valueToText(fourOfWhat) + "s !";
  }
  if (straightFlush) {
    bestResult =
      "Straight Flush, " +
      straightLowCard +
      " through " +
      straightHighCard +
      " of " +
      flushType;
  }
  if (royalFlush) {
    bestResult =
      "Royal Flush! " +
      straightLowCard +
      " through " +
      straightHighCard +
      " of " +
      flushType;
  }
  if (fiveOfAkind) {
    bestResult = "Five " + valueToText(fiveOfWhat) + "s !!!";
  }

  return bestResult;
}

function valueToText(whatValueToConvert) {
  if (whatValueToConvert == 14) {
    return "Ace";
  }
  if (whatValueToConvert == 13) {
    return "King";
  }
  if (whatValueToConvert == 12) {
    return "Queen";
  }
  if (whatValueToConvert == 11) {
    return "Jack";
  }
  if (whatValueToConvert == 10) {
    return "Ten";
  }
  if (whatValueToConvert == 9) {
    return "Nine";
  }
  if (whatValueToConvert == 8) {
    return "Eight";
  }
  if (whatValueToConvert == 7) {
    return "Seven";
  }
  if (whatValueToConvert == 6) {
    return "Six";
  }
  if (whatValueToConvert == 5) {
    return "Five";
  }
  if (whatValueToConvert == 4) {
    return "Four";
  }
  if (whatValueToConvert == 3) {
    return "Three";
  }
  if (whatValueToConvert == 2) {
    return "Deuce";
  }
  if (whatValueToConvert == 1) {
    return "Ace";
  }
  if (whatValueToConvert == 0) {
    return "Joker";
  }
  if (whatValueToConvert == -1) {
    return "Cherry";
  }
  if (whatValueToConvert == -2) {
    return "Lemon";
  }
}
function typeToText(whatTypeToConvert) {
  if (whatTypeToConvert == "c") {
    return "Cherry";
  }
  if (whatTypeToConvert == "C") {
    return "Club";
  }
  if (whatTypeToConvert == "D") {
    return "Diamond";
  }
  if (whatTypeToConvert == "H") {
    return "Heart";
  }
  if (whatTypeToConvert == "l") {
    return "Lemon";
  }
  if (whatTypeToConvert == "S") {
    return "Spade";
  }
}

function clickedButtonWheel1() {
  fastEnoughWheel1 = false;
  spinRateWheel1 = Math.floor(Math.random() * 56);
  wheelIntervalWheel1 = setInterval(animateSpinWheel1, 10);
  document.getElementById("wheel1BTN").style.visibility = "hidden";
}
function setWheelPixelWheel1(toWhatPixelWheel1) {
  toWhatPixelWheel1 = toWhatPixelWheel1 % 812;
  document.getElementById("wheel1DIV").style.backgroundPosition =
    "0px " + toWhatPixelWheel1 + "px";
  currentSetPixelWheel1 = toWhatPixelWheel1;
}
function setWheelPosWheel1(toWhatPosWheel1) {
  document.getElementById("wheel1DIV").style.backgroundPosition =
    "0px " + toWhatPosWheel1 * 58 + "px";
  currentSetPosWheel1 = toWhatPosWheel1;
}
function animateSpinWheel1() {
  wheel1spinning = true;
  if (fastEnoughWheel1) {
    spinRateWheel1--;
  } else {
    spinRateWheel1++;
  }
  toWhatPixelWheel1 = currentSetPixelWheel1 + spinRateWheel1;
  setWheelPixelWheel1(toWhatPixelWheel1);
  if (spinRateWheel1 >= 58) {
    fastEnoughWheel1 = true;
  }
  if (spinRateWheel1 <= 0) {
    //	if (currentSetPixelWheel1 % 58 <= 14){ spinRateWheel1 = -1; } else { spinRateWheel1 = 1; }
    spinRateWheel1 = 1;
    toWhatPixelWheel1 = currentSetPixelWheel1 + spinRateWheel1;
    setWheelPixelWheel1(toWhatPixelWheel1);
    clearInterval(wheelIntervalWheel1);
    wheelIntervalWheel1 = setInterval(animateSpinWheel1, 1);
    if (currentSetPixelWheel1 % 58 == 0) {
      clearInterval(wheelIntervalWheel1);
      if (overideWheel1Pos < 0) {
        setWheelPosWheel1(currentSetPixelWheel1 / 58);
      } else {
        setWheelPosWheel1(overideWheel1Pos);
      }
      wheel1spinning = false;
      readGridToRowColArray();
    }
  }
}

function clickedButtonWheel2() {
  fastEnoughWheel2 = false;
  spinRateWheel2 = Math.floor(Math.random() * 56);
  wheelIntervalWheel2 = setInterval(animateSpinWheel2, 10);
  document.getElementById("wheel2BTN").style.visibility = "hidden";
}
function setWheelPixelWheel2(toWhatPixelWheel2) {
  toWhatPixelWheel2 = toWhatPixelWheel2 % 812;
  document.getElementById("wheel2DIV").style.backgroundPosition =
    "0px " + toWhatPixelWheel2 + "px";
  currentSetPixelWheel2 = toWhatPixelWheel2;
}
function setWheelPosWheel2(toWhatPosWheel2) {
  document.getElementById("wheel2DIV").style.backgroundPosition =
    "0px " + toWhatPosWheel2 * 58 + "px";
  currentSetPosWheel2 = toWhatPosWheel2;
}
function animateSpinWheel2() {
  wheel2spinning = true;
  if (fastEnoughWheel2) {
    spinRateWheel2--;
  } else {
    spinRateWheel2++;
  }
  toWhatPixelWheel2 = currentSetPixelWheel2 + spinRateWheel2;
  setWheelPixelWheel2(toWhatPixelWheel2);
  if (spinRateWheel2 >= 58) {
    fastEnoughWheel2 = true;
  }
  if (spinRateWheel2 <= 0) {
    //	if (currentSetPixelWheel2 % 58 <= 30){ spinRateWheel2 = -1; } else { spinRateWheel2 = 1; }
    spinRateWheel2 = 1;
    toWhatPixelWheel2 = currentSetPixelWheel2 + spinRateWheel2;
    setWheelPixelWheel2(toWhatPixelWheel2);
    clearInterval(wheelIntervalWheel2);
    wheelIntervalWheel2 = setInterval(animateSpinWheel2, 1);
    if (currentSetPixelWheel2 % 58 == 0) {
      clearInterval(wheelIntervalWheel2);
      if (overideWheel2Pos < 0) {
        setWheelPosWheel2(currentSetPixelWheel2 / 58);
      } else {
        setWheelPosWheel2(overideWheel2Pos);
      }
      wheel2spinning = false;
      readGridToRowColArray();
    }
  }
}

function clickedButtonWheel3() {
  fastEnoughWheel3 = false;
  spinRateWheel3 = Math.floor(Math.random() * 56);
  wheelIntervalWheel3 = setInterval(animateSpinWheel3, 10);
  document.getElementById("wheel3BTN").style.visibility = "hidden";
}
function setWheelPixelWheel3(toWhatPixelWheel3) {
  toWhatPixelWheel3 = toWhatPixelWheel3 % 812;
  document.getElementById("wheel3DIV").style.backgroundPosition =
    "0px " + toWhatPixelWheel3 + "px";
  currentSetPixelWheel3 = toWhatPixelWheel3;
}
function setWheelPosWheel3(toWhatPosWheel3) {
  document.getElementById("wheel3DIV").style.backgroundPosition =
    "0px " + toWhatPosWheel3 * 58 + "px";
  currentSetPosWheel3 = toWhatPosWheel3;
}
function animateSpinWheel3() {
  wheel3spinning = true;
  if (fastEnoughWheel3) {
    spinRateWheel3--;
  } else {
    spinRateWheel3++;
  }
  toWhatPixelWheel3 = currentSetPixelWheel3 + spinRateWheel3;
  setWheelPixelWheel3(toWhatPixelWheel3);
  if (spinRateWheel3 >= 58) {
    fastEnoughWheel3 = true;
  }
  if (spinRateWheel3 <= 0) {
    //	if (currentSetPixelWheel3 % 58 <= 30){ spinRateWheel3 = -1; } else { spinRateWheel3 = 1; }
    spinRateWheel3 = 1;
    toWhatPixelWheel3 = currentSetPixelWheel3 + spinRateWheel3;
    setWheelPixelWheel3(toWhatPixelWheel3);
    clearInterval(wheelIntervalWheel3);
    wheelIntervalWheel3 = setInterval(animateSpinWheel3, 1);
    if (currentSetPixelWheel3 % 58 == 0) {
      clearInterval(wheelIntervalWheel3);
      if (overideWheel3Pos < 0) {
        setWheelPosWheel3(currentSetPixelWheel3 / 58);
      } else {
        setWheelPosWheel3(overideWheel3Pos);
      }
      wheel3spinning = false;
      readGridToRowColArray();
    }
  }
}

function clickedButtonWheel4() {
  fastEnoughWheel4 = false;
  spinRateWheel4 = Math.floor(Math.random() * 56);
  wheelIntervalWheel4 = setInterval(animateSpinWheel4, 10);
  document.getElementById("wheel4BTN").style.visibility = "hidden";
}
function setWheelPixelWheel4(toWhatPixelWheel4) {
  toWhatPixelWheel4 = toWhatPixelWheel4 % 812;
  document.getElementById("wheel4DIV").style.backgroundPosition =
    "0px " + toWhatPixelWheel4 + "px";
  currentSetPixelWheel4 = toWhatPixelWheel4;
}
function setWheelPosWheel4(toWhatPosWheel4) {
  toWhatPosWheel4 = toWhatPosWheel4 % 14;
  document.getElementById("wheel4DIV").style.backgroundPosition =
    "0px " + toWhatPosWheel4 * 58 + "px";
  currentSetPosWheel4 = toWhatPosWheel4;
}
function animateSpinWheel4() {
  wheel4spinning = true;
  if (fastEnoughWheel4) {
    spinRateWheel4--;
  } else {
    spinRateWheel4++;
  }
  toWhatPixelWheel4 = currentSetPixelWheel4 + spinRateWheel4;
  setWheelPixelWheel4(toWhatPixelWheel4);
  if (spinRateWheel4 >= 58) {
    fastEnoughWheel4 = true;
  }
  if (spinRateWheel4 <= 0) {
    //	if (currentSetPixelWheel4 % 58 <= 30){ spinRateWheel4 = -1; } else { spinRateWheel4 = 1; }
    spinRateWheel4 = 1;
    toWhatPixelWheel4 = currentSetPixelWheel4 + spinRateWheel4;
    setWheelPixelWheel4(toWhatPixelWheel4);
    clearInterval(wheelIntervalWheel4);
    wheelIntervalWheel4 = setInterval(animateSpinWheel4, 1);
    if (currentSetPixelWheel4 % 58 == 0) {
      clearInterval(wheelIntervalWheel4);
      if (overideWheel4Pos < 0) {
        setWheelPosWheel4(currentSetPixelWheel4 / 58);
      } else {
        setWheelPosWheel4(overideWheel4Pos);
      }
      wheel4spinning = false;
      readGridToRowColArray();
    }
  }
}

function clickedButtonWheel5() {
  fastEnoughWheel5 = false;
  spinRateWheel5 = Math.floor(Math.random() * 56);
  wheelIntervalWheel5 = setInterval(animateSpinWheel5, 10);
  document.getElementById("wheel5BTN").style.visibility = "hidden";
}
function setWheelPixelWheel5(toWhatPixelWheel5) {
  toWhatPixelWheel5 = toWhatPixelWheel5 % 812;
  document.getElementById("wheel5DIV").style.backgroundPosition =
    "0px " + toWhatPixelWheel5 + "px";
  currentSetPixelWheel5 = toWhatPixelWheel5;
}
function setWheelPosWheel5(toWhatPosWheel5) {
  toWhatPosWheel5 = toWhatPosWheel5 % 14;
  document.getElementById("wheel5DIV").style.backgroundPosition =
    "0px " + toWhatPosWheel5 * 58 + "px";
  currentSetPosWheel5 = toWhatPosWheel5;
}
function animateSpinWheel5() {
  wheel5spinning = true;
  if (fastEnoughWheel5) {
    spinRateWheel5--;
  } else {
    spinRateWheel5++;
  }
  toWhatPixelWheel5 = currentSetPixelWheel5 + spinRateWheel5;
  setWheelPixelWheel5(toWhatPixelWheel5);
  if (spinRateWheel5 >= 58) {
    fastEnoughWheel5 = true;
  }
  if (spinRateWheel5 <= 0) {
    //	if (currentSetPixelWheel5 % 58 <= 30){ spinRateWheel5 = -1; } else { spinRateWheel5 = 1; }
    spinRateWheel5 = 1;
    toWhatPixelWheel5 = currentSetPixelWheel5 + spinRateWheel5;
    setWheelPixelWheel5(toWhatPixelWheel5);
    clearInterval(wheelIntervalWheel5);
    wheelIntervalWheel5 = setInterval(animateSpinWheel5, 1);
    if (currentSetPixelWheel5 % 58 == 0) {
      clearInterval(wheelIntervalWheel5);
      if (overideWheel5Pos < 0) {
        setWheelPosWheel5(currentSetPixelWheel5 / 58);
      } else {
        setWheelPosWheel5(overideWheel5Pos);
      }
      wheel5spinning = false;
      readGridToRowColArray();
    }
  }
}

function waitMiliseconds(howLongToWait) {
  var startDate = new Date();
  var startTime = startDate.getTime();
  var currentDate = new Date();
  var currentTime = currentDate.getTime();
  while (currentTime - startTime <= howLongToWait) {
    var currentDate = new Date();
    var currentTime = currentDate.getTime();
  }
}
