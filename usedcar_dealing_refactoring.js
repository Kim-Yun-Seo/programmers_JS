'use strict';


function solution(prices) {
  let maxNumber = 0;

  let max = Math.max(...prices)
  let min = Math.min(...prices)
  let maxIndex = prices.lastIndexOf(max); 
  let minIndex = prices.indexOf(min) 

  if (minIndex < maxIndex) {
    maxNumber = max - min;
  }
  console.log(' maxNumber = ', maxNumber);

  // prices.forEach((today, todayIndex) => {
  //   for (let i = todayIndex + 1; i < prices.length; i++) {
  //     const minus = prices[i] - today
  //     if (minus > maxNumber) {
  //       maxNumber = minus
  //     }
  //   }
  //   // prices.forEach((future, futureIndex) => {
  //   //   console.log('forEach', futureIndex, ' = ', future);
  //   //   if ((futureIndex > todayIndex) && (future - today) > maxNumber) {
  //   //     maxNumber = future - today
  //   //   }
  //   // });
  // });

  return maxNumber;
};

console.log('solution() = ', solution([3, 5, 1, 5, 1, 4, 10000]));
// console.log('solution = ', solution([5, 4, 3, 2, 1]))

function solution2(prices) {
  
  let minusResult = prices.map((priceNum, priceNumIndex) => {
    prices.forEach((num, numIndex) => {
      console.log('priceNum = ', priceNum);
      console.log(' num = ', num);
      let minus = 0;
      if (priceNumIndex < numIndex) {
        minus = num - priceNum
      } else {
        minus = 0;
      }

      console.log('minus = ', minus);
      console.log(' ----------- ' );
      
      return [];
    })
    
  })
  
  return ;
};

// console.log('solution2 = ', solution2([5, 4, 3, 2, 0]))