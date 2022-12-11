function namify(users) {
  let nameArr = [];
  for (let item of users) {
    nameArr.push(item.name);
  }
  
  return nameArr;
}
