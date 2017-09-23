// array of nums to sum
let nums = [0, 5, 10, 15, 20];

// sum with for loop
function sumFor(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(sumFor(nums));

// sum with while
function sumWhile(array) {
  let sum = 0;
  let i = 0;
  while (i < array.length) {
    sum += array[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(nums));

// sum with recursion
function sumRecursion(array) {
  if (array.length === 0) {
    return 0;
  }
  return array.pop() + sumRecursion(array);
}

console.log(sumRecursion(nums));
nums = [0, 5, 10, 15, 20];

// sum with underscore
function sumTheSimpleWay(array) {
  return _.reduce(array, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(nums));
