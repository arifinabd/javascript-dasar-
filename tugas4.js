var anto = 165;
var deon = 171;
var mike = 178;

function tinggi1() {
  if (deon > 170) {
    if (deon > 177) {
      console.log("deon yang paling tinggi");
    } else {
      console.log("deon tertinggi ke dua");
    }
  } else {
    if (deon < 177) {
      console.log("deon terkecil");
    } else {
      console.log("deon terkecil kedua");
    }
  }
}

function tinggi2() {
  if (anto > 170) {
    if (anto > 177) {
      console.log("anto yang paling tinggi");
    } else {
      console.log("anto tertinggi ke dua");
    }
  } else {
    if (anto < 177) {
      console.log("anto terkecil");
    } else {
      console.log("anto terkecil kedua");
    }
  }
}

function tinggi3() {
  if (mike > 170) {
    if (mike > 177) {
      console.log("mike yang paling tinggi");
    } else {
      console.log("mike tertinggi ke dua");
    }
  } else {
    if (mike < 177) {
      console.log("mike terkecil");
    } else {
      console.log("mike terkecil kedua");
    }
  }
}
tinggi3();
tinggi1();
tinggi2();

var rumah1 = 1000;
var rumah2 = 3000;
var rumah3 = 2000;

const luas1 = () => {
  switch (rumah1) {
    case 3000:
      console.log("tanah", rumah1, "paling luas");
      break;
    case 2000:
      console.log("tanah", rumah1, "terkecil kedua");
      break;
    default:
      console.log("tanah", rumah1, "paling kecil");
  }
};

const luas2 = () => {
  switch (rumah2) {
    case 3000:
      console.log("tanah", rumah2, "paling luas");
      break;
    case 2000:
      console.log("tanah", rumah2, "terkecil kedua");
      break;
    default:
      console.log("tanah", rumah2, "paling kecil");
  }
};

const luas3 = () => {
  switch (rumah3) {
    case 3000:
      console.log("tanah", rumah3, "paling luas");
      break;
    case 2000:
      console.log("tanah", rumah3, "terkecil kedua");
      break;
    default:
      console.log("tanah", rumah3, "paling kecil");
  }
};

luas1();
luas2();
luas3();
