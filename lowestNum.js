function lowestNum(arr) {
  let lowestValue = arr[0];
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] < lowestValue) {
      lowestValue = arr[i];
    }
  }
  return lowestValue;
}

lowestNum([1, 2, 3, 4, 5]);
