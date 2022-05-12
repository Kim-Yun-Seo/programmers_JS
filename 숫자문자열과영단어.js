'use strict';
const numberEnglish = [
  {number: 0, English: 'zero'},
  {number: 1, English: 'one'},
  {number: 2, English: 'two'},
  {number: 3, English: 'three'},
  {number: 4, English: 'four'},
  {number: 5, English: 'five'},
  {number: 6, English: 'six'},
  {number: 7, English: 'seven'},
  {number: 8, English: 'eight'},
  {number: 9, English: 'nine'}
]

function solution(question) {
  let changeNumber = question;
  numberEnglish.forEach((numberObject, numberIndex) => {
    if (question.includes(numberObject.English) && numberIndex === 0) {
      changeNumber = question.replace(`${numberObject.English}`,`${numberObject.number}`)
    } else if (question.includes(numberObject.English) ) {
        for (let i = 0; i < 10; i++) {
          if (question.includes(numberObject.English)) {
            changeNumber = changeNumber.replace(`${numberObject.English}`,`${numberObject.number}`)
          }
        }
      } 
    })
  let result = Number(changeNumber)
  return result;
}


console.log('solution = ', solution("one4seveneight"));
console.log('solution = ', solution("23four5six7"));
console.log('solution = ', solution("2three45sixsix"));
console.log('solution = ', solution("123"));
console.log('solution = ', solution("oneoneoneone"));