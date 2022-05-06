'use strict';
function solution(prices) {
  let result = prices.map((price, index) => {
    const exceptList = prices.filter((_, index2) => index < index2 )
    let maxNumber2 = 0;

    exceptList.forEach((num) => {
      if ((num - price) > maxNumber2) {
        maxNumber2 = num - price
      }
    });

    return maxNumber2;
  });
  let max = Math.max(...result);

  return (max < 0) ? 0 : max;
};

// console.log('solution() = ', solution([ 3, 5, 1, 5, 1, 4]));
console.log('solution = ', solution([5, 4, 3, 2, 1]))