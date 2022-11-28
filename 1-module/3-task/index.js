function ucFirst(str) {
  const firstChar = str.slice(0,1).toUpperCase();
  const restChars = str.slice(1, str.length);
  
  const result = firstChar + restChars;
  
  return result
}
