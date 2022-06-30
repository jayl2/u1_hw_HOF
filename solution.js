// You must RETURN your result in each function!

function printNums(nums) {
  let newArr = []
  nums.forEach((num) => {
    newArr.push(num)
  })
  return newArr
  /**
   *  Using .forEach, add each number in the nums array to a new array.
   * @param nums => [1,2,3,4]
   */
}

function returnSums(nums) {
  const newArr = []
  nums.forEach((ele, index) => {
    newArr.push(ele + index)
  })
  return newArr
  /**cons
   * Using forEach, push the sum of n plus the index
   * to a new array and return the new array
   * @param nums => [1,2,3,4,5]
   */
}

function returnTotal(objs) {
  let sum = 0
  objs.forEach((i) => {
    sum += i.n
  })
  return sum
  /**
   * Using forEach return a number that is the total sum of all numbers in the array of objects.
   * The key for each object will be n
   * @param objs => [{n:1}]
   */
}

function printMoney(decimals) {
  return decimals.map((num) => {
    price = `$${num.toFixed(2)}`
    return price
  })

  /**
   * @param decimals => [2.30, 2.40, 32.99]
   * Using .map, return an array of decimals formatted as dollars.
   * EX: {
   * input: [12.34, 9.99],
   * output: ['$12.34', '$9.99']
   * }
   * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places. .toFixed may be useful :)
   */
}

function returnAllTrueValues(values) {
  const trueVal = values.filter((val) => {
    if (val.happy === true) {
      return val
    }
  })
  return trueVal
  /**v
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */
}

function addTwo(nums) {
  const addTwo = nums
    .map((num) => {
      return num + 2
    })
    .reduce((acc, val) => {
      return acc + val
    })

  return addTwo
  /**
   * @param nums => [1,2,3,4]
   * Using .reduce, return the total sum of all numbers.
   * Each number should have 2 added to it.
   */
  //   3
  //   4 => 7
}

function joinStrings(strings) {
  const newStr = strings.reduce((acc, val) => {
    return acc + val
  })
  return newStr

  /**
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */
}

//Bonus
function sortObjectsByValue(objs) {
  let aa = objs.sort(function (a, b) {
    return a.value - b.value
  })
  return aa
  /**
   * @param objs => [{value: 1}, {value:2}, {value:23}]
   * Using .sort, sort the array of objects by the value key in ascending order
   * .sort documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   */
}

module.exports = {
  printNums,
  returnSums,
  returnTotal,
  printMoney,
  returnAllTrueValues,
  sortObjectsByValue,
  addTwo,
  joinStrings
}
