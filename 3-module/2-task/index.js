function filterRange(arr, a, b) {
  let filteredArray = [];
  for (let item of arr) {
    if (item >= a && item <= b) {
      filteredArray.push(item);
    }
  }

  return filteredArray;
}
