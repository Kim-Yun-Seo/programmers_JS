'use strict';

function solution(prices) {
  let maxNumber = 0;
  const max = Math.max(...prices)
  const min = Math.min(...prices)
  const maxIndex = prices.lastIndexOf(max); 
  const minIndex = prices.indexOf(min) 
  let x = 100000;

  if (minIndex < maxIndex) {
    maxNumber = max - min;
  } else {
    prices.forEach((today, todayIndex) => {
      if (today < x) {
        x = today;
        for (let i = todayIndex + 1; i < prices.length; i++) {
          const minus = prices[i] - today
          if (minus > maxNumber) {
            maxNumber = minus
          }
        }
      }
    });
  }
  return maxNumber;
};

function solution2(prices) {
  
  let result = prices.map((price, index) => {
    const exceptList = prices.filter((value, index2) => value != price && index < index2 )
    const semiResultList = exceptList.map((num, numberIndex) => {
      return num - price;
    });
    const maxNumber = Math.max(...semiResultList);
    return maxNumber;
  });
  let finalMaxNumber = Math.max(...result)
  
  if (finalMaxNumber < 0) {
    finalMaxNumber = 0
  }
  return finalMaxNumber;
};

const getRandomInt = (min, max) =>  Math.floor(Math.random() * (max - min) + min); 
const test = (count) => {
  const condition = 10000;
  const maxLimit = 100000;

  for (let k = 0; k < count; k++) {
    console.log('------------ = ');
    const testPrices = [];
    for (let i = 0; i < condition; i++) {
      testPrices.push(getRandomInt(0, maxLimit));
    }
    const answerStartTime = performance.now()
    const aaa = solution(testPrices);
    const answerEndTime = performance.now()
    const totalAnswerTime = answerEndTime - answerStartTime
    console.log(' totalAnswerTime = ', totalAnswerTime);

    const studentStartTime = performance.now()
    const bbb = solution2(testPrices);
    const studentEndTime = performance.now()
    const totalStudentTime = studentEndTime - studentStartTime

    console.log(' totalStudentTime = ', totalStudentTime);
    if (aaa === bbb) {
      console.log('예상 답은' ,aaa, '그리고 당신의 답은', bbb, '정답  = ');
    } else {
      console.log('예상 답은' ,aaa, '그리고 당신의 답은', bbb, '오답  = ');
    }
  }
}
test(10)

