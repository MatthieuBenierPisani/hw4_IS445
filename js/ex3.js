function findInArray() {
  const values = [3, 11, 7, 2, 9, 10];

  sum = values.reduce((a, b) => a + b, 0);
  min = Math.min.apply(null, values);
  max = Math.max.apply(null, values);
 
  console.log(`The sum of all the values is : ${sum}`);
  console.log(`The min value of all the values is : ${min}`);
  console.log(`The max values of all the values is : ${max}`);
}