'use strict';

const seoul = ["Jane", "Kim"]

function solution(seoul) {
  
  let count = 0;
  // var answer = "김서방은 1에 있다";
  seoul.forEach((element, index) => {
    // console.log(element);
    if (element === "Kim") { 
      count = index;
      console.log('count = ', count);
    }
    
  });
  const answer = `김서방은 ${count}에 있다.`
  return answer;
}

solution(seoul);