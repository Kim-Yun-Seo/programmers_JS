'use strict';
//숫자문자열과영단어 = return은 숫자
//1. 숫자와 영어가 있는 데이터가 있어야함.
//1-1. obj나 배열사용
//2. question을 돌면서 바꿔야함.
//2-2. replace, regExp 등등
//3. return에 맞게 타입변환해줘야함.

function solution(question) {
  const numberEnglish  = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let changeNumber = question;

  numberEnglish.forEach((number, index) => {
    let regExp = new RegExp(number, 'g');
    changeNumber = changeNumber.replace(regExp, index);
    
  });
  return Number(changeNumber);
}

console.log('solution = ', solution("one4seveneight"));
console.log('solution = ', solution("23four5six7"));
console.log('solution = ', solution("one2131231239oneoneoneoneone"));
console.log('solution = ', solution("oneoneoneoneoneoneoneoneoneoneoneoneoneoneoneone "));
console.log('solution = ', solution("123"));
console.log('solution = ', solution("oneoneoneone"));