'use strict';

function solution(prices) {
  let maxNumber = 0;
  const max = Math.max(...prices)
  const min = Math.min(...prices)
  const maxIndex = prices.lastIndexOf(max); 
  const minIndex = prices.indexOf(min) 

  if (minIndex < maxIndex) {
    maxNumber = max - min;
    console.log('여기 탔음 = ');
  } else {
    prices.forEach((today, todayIndex) => {
      for (let i = todayIndex + 1; i < prices.length; i++) {
        const minus = prices[i] - today
        if (minus > maxNumber) {
          maxNumber = minus
        }
      }
    });
  }
  console.log(' maxNumber = ', maxNumber);

  return maxNumber;
};

function solution2(prices) {
  let maxNumber = 0;

  prices.forEach((today, todayIndex) => {
    for (let i = todayIndex + 1; i < prices.length; i++) {
      const minus = prices[i] - today
      if (minus > maxNumber) {
        maxNumber = minus
      }
    }
  });
  return maxNumber;
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

