function camelize(str) {
  let arr = str.split('-');
  
  for(i = 1; i < arr.length; i++) {
    const char = arr[i].slice(0,1).toUpperCase();
    const restChars = arr[i].slice(1,arr[i].length);
    arr[i] = char + restChars;
  }
  
  let strFromArr = arr.join(""); 
  
  return strFromArr
}
