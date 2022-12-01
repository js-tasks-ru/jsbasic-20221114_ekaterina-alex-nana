function truncate(str, maxlength) {
  if (str.length <= maxlength) {
    return str;
  };
 
  let chars = str.slice(0, maxlength - 1);
  let result = chars + "…";
  return result;
}
