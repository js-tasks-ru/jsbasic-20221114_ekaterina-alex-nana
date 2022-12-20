function showSalary(users, age) {
  const nameSalary = [];
  
  for (let user of users) {
   if (user.age <= age) {
    nameSalary.push(`${user.name}, ${user.balance}`);
   }
  }
  return nameSalary.join('\n');
}
