function find(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
}

console.log([1, 2, 3, 4, 5, 6], 4);
