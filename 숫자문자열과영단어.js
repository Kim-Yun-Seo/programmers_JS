'use strict';


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