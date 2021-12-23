function tugas10() {
  var result = 0;

  for (let i = 1; i < 11; i++) {
    console.log((result += i));
    // result++
  }
  return result;
}

tugas10();

function tugas_10() {
  var result = 0;

  for (let i = 1; i < 55; i++) {
    console.log((i += result));
    result++;
  }
  return result;
}

tugas_10();
