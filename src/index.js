// 1. Add function code goes here
const add = (num1, num2) => num1 + num2;
module.exports.add = add;

console.log(add(5, 10)); // Output: 15
console.log(add(2.5, 3.5)); // Output: 6
console.log(add(-7, 12)); // Output: 5

// 2. Multiply function code goes here
const multiply = (num1, num2) => num1 * num2;
module.exports.multiply = multiply;

console.log(multiply(5, 10)); // Output: 50
console.log(multiply(2.5, 3.5)); // Output: 8.75
console.log(multiply(-7, 12)); // Output: -84

// 3. OddOrEven function code goes here
const oddOrEven = num => (num % 2 === 0) ? 'even' : 'odd';
module.exports.oddOrEven = oddOrEven;

console.log(oddOrEven(5)); // Output: odd
console.log(oddOrEven(10)); // Output: even
console.log(oddOrEven(-7)); // Output: odd

// 4. Write a function that returns an array that includes number 1 to 100
// Ex: [1,2,3,4, ..., 99, 100]
const arrayGenerator = () => {
  const arr = [];
  for (let i = 1; i <= 100; i++) {
    arr.push(i);
  }
  return arr;
};
module.exports.arrayGenerator = arrayGenerator;

console.log(arrayGenerator()); // Output: [1, 2, 3, ..., 99, 100]

// 5. Fix this function. We want to see 2 in the console instead of undefined
const hoisting = () => {
  let y = 2;
  console.log(y); // 2
};
module.exports.hoisting = hoisting; // Output: 2

// 6. Write a function that accepts unlimited amount of numbers as input
// and return the smallest value
const minValue = (...numbers) => Math.min(...numbers);
module.exports.minValue = minValue;

console.log(minValue(3, 7, 2, 5, 1)); // Output: 1

// 7. Write a function that accepts an array of numbers as input
// and return a new array with all numbers doubled
// Ex: [1,2,3] => [2,4,6]
const doubleArray = numbers => numbers.map(num => num * 2);
module.exports.doubleArray = doubleArray;

console.log(doubleArray([1, 2, 3])); // Output: [2, 4, 6]

// 8. We have an array of students object, each object will have a name property
// write a function that accepts a student array as first parameter, and a name as second parameter
// and return the student with that name
// Example of student array: const students = [{ name: 'a' }, { name: 'b' }];
const findStudentName = (students, name) => students.find(student => student.name === name);
module.exports.findStudentName = findStudentName;

const students = [{ name: 'a' }, { name: 'b' }];
console.log(findStudentName(students, "b")); // Output: { name: 'b' }
