'use strict';

function solution(s) { 
  const answer = [];
  const half = 2;

  for (let sliceLength = 1; sliceLength <= Math.ceil(s.length / half); sliceLength++) {
    const temp = [];
    let sSplit = [];

    for (let sliceIndex = 0; sliceIndex < s.length ; sliceIndex += sliceLength) {
      temp.push(s.substring(sliceIndex, sliceIndex + sliceLength));
    }
    sSplit = [...temp];
    sSplit.forEach((alpha, index) => {
      for (let repeatCount = 1; repeatCount < s.length ; repeatCount++) {
        const cutStart = (index + repeatCount) * sliceLength; 
        const cutEnd = ((index + repeatCount) * sliceLength) + sliceLength;
        const comparisonTarget = s.slice(cutStart, cutEnd);
        
        if (alpha === comparisonTarget) {
          // emtpy;
        } else if (sSplit[index - 1] === alpha) {
          break;
        } else { 
          if (repeatCount > 1) {
            temp.splice(index - (sSplit.length - temp.length), repeatCount - 1, repeatCount);
          }
          break;
        }
      }
    });
    answer.push(temp.join('').length);
  }
  return Math.min(...answer);
}

console.log('solution = ', solution("aabbaccc"),"7");//2a2ba3c4a(1)
console.log('solution = ', solution("aabbacccaaaa"),"9");//2a2ba3c4a(1)
console.log('solution = ', solution("ababcdcdababcdcd"),"9"); //2ababcdcd(8)
console.log('solution = ', solution("abcabcdede"),"8"); //2abcdede(3)
console.log('solution = ', solution("abcabcabcabcdededededede"), "14"); //2abcabc2dedede(6)
console.log('solution = ', solution("xababcdcdababcdcd"), "17"); 
// console.log('solution = ', solution("xaababcdcdababcdcd"), "17"); 


//회고
//경우가 바뀌면 return이나 뭐 바뀌어야 하는 것들을 다 바꾸고 시작함.
//콘솔 알 수 있는 자리에 잘 찍어서 확인하기
//뭐가 문제인지 조리있고 정확하게 말 할 수 있어야함
//계속 콘솔 찍어서 확인하기
//string은 한글자만 가져올 수 있는 점 유의하기
//새로 바꿔서 만들때 비교대상 지우지 말고 주석 해놓고 확인되면 지우기
