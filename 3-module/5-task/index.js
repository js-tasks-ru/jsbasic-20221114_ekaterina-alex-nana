function getMinMax(str) {
  let arr = str.split(' ');
  
  let secondArr = [];
  
  for (let number of arr) {
    if (!isNaN(number)) {
      secondArr.push(parseFloat(number));
    }
  } 

  secondArr.sort(function (a, b) {
    return a - b;
  });
    
  let result = {
    min: secondArr[0],
    max: secondArr[secondArr.length - 1],
  }

  return result;
}
