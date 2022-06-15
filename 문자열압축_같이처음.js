'use strict';

function solution(s) { 
  // const answer = '2abbaccc';
  const answer = [];
  // const temp = s.split('');
  // const temp = ['ab', 'de', 'ca', 'bc', 'ab', 'ca', 'bc', 'de', 'de', 'de', 'de', 'de', 'de'];
  //abd eca bca bca bcd ede ded ede de 25
  
  // sSplit.forEach((alpha, i) => {
  //   sliceTwo.push(s.substring(i, i + 2));
  // });

  for (let sliceLength = 1; sliceLength <= Math.ceil(s.length / 2); sliceLength++) {
    // console.log(sliceLength, '(s.length / sliceLength) + sliceLength = ', (s.length / sliceLength) + 1);
    const temp = [];
    
    for (let sliceIndex = 0; sliceIndex < s.length ; sliceIndex += sliceLength) {
      temp.push(s.substring(sliceIndex, sliceIndex + sliceLength));
      // console.log('sss = ', sliceLength, sliceIndex,'=', sliceIndex + sliceLength);
      
    }
    // console.log('temp = ', temp);
    const sSplit = [...temp];
  //ab de ca bc ab ca bc de de de de de de
  // const sSplit = s.split(''); 

    sSplit.forEach((alpha, index) => {
      // console.log(' =================== ', alpha);
      for (let repeatCount = 1; repeatCount < 8; repeatCount++) {
        // console.log('al = ', index, '=', repeatCount);
        // console.log('s = ', s);
        // console.log('s.clie = ', s.slice(index * 2, (index * 2) + 2));
        // const sliceLength = 2; 
        const compareNextIndex = 1;
        const cutStart = (index + repeatCount) * sliceLength; //7 //16 18 20
        const cutEnd = ((index + repeatCount) * sliceLength) + sliceLength; //18
      
        const comparisonTarget = s.slice(cutStart, cutEnd);
        // console.log(alpha,'-------',cutStart, cutEnd, 'comparisonTarget = ', comparisonTarget);
        // if (alpha === s[index + i]) {
        if (alpha === comparisonTarget) {
          //
        } else if (sSplit[index - 1] === alpha) {
          // 
        } else { // 뒤에랑 안 겹침. 반복안됨. 
          //
          if (repeatCount > 1) { // 반복 되어진거니?
            temp.splice(index, repeatCount - 1, repeatCount);
          }
          break;
        }
      }
    })
    console.log('temp = ', temp, '=',temp.join('').length);
    answer.push(temp.join('').length);
  }
  
  
  // console.log('temp = ', temp);
  // 
  

  // const sliceArray = [];
  // const push = [];

  // for (let i = 1; i <= s.length / 2; i++) {
  //   const slice = s.slice(0, i)
  //   sliceArray.push(slice);
  // }
  // sliceArray.reverse().forEach((element) => {
  //   const regExp = new RegExp(element, "g");
  //   const repeatCount = s.match(regExp).length;
  //   const exceptElement = s.replace(regExp, '');
  //   let compress = s;

  //   if (repeatCount !== 1) {
  //     compress = `${repeatCount}${element}${exceptElement}`
  //   }
  //   push.push(compress.length);
  //   // console.log(element, '--', exceptElement, compress);
  // });
  // answer.push(Math.min(...push));

  

  // 2개씩, 3개씩 ... s.length / 2 개씩 나눈 배열 만들기.
  // 만든 배열을 forEach로 돌아서
  // 다음 인덱스와 연속 되면
  // 

  //[ab ca bc ab ca bc de de de de de de]
  // const result = '2abcabc2dedede'
  // const sliceTwo = [];
  // // sSplit.forEach((alpha, i) => {
  // //   sliceTwo.push(s.substring(i, i + 2));
  // // });
  // for (let i = 0; i < s.length; i+=2) {
  //   sliceTwo.push(s.substring(i, i+2));
  // }
  // console.log('sliceTwo = ', sliceTwo);
  // //일단 두개씩 쪼개서 배열에 담아

  // const set = [...new Set(sliceTwo)]; 
  // // console.log('set = ', set);
  // //겹치는걸 빼

  // const ss = [...sliceTwo];

  // sliceTwo.forEach((element, index) => { 
  //   // console.log('ss = ', ss);
  //   // for (let k = 0; k < sliceTwo.length; k++) { 
  //   //   if (element === sliceTwo[k] && element === sliceTwo[k + 1]) { 
  //   //     console.log(element, index,'=== ', k);
  //   //     // ss.splice(k, k - 2, index);
  //   //     break;
  //   //   }
  //   // }
    
  //   // sliceTwo.forEach((element2, index2) => { 
  //   //   if (element === element2 && element === sliceTwo[index2 + 1]) { 
  //   //     console.log(element, index, '=== ', index2);
  //   //     ss.splice(index, index2 - 1, index2);
  //   //   }
  //   // })
  // })
  // console.log('ss = ', ss);
  // answer.push(result.length);

  return Math.min(...answer);
  // return temp.length;
}

console.log('solution = ', solution("aabbaccc"),"7");//2a2ba3c(1)
console.log('solution = ', solution("ababcdcdababcdcd"),"9"); //2ababcdcd(8)
console.log('solution = ', solution("abcabcdede"),"8"); //2abcdede(3)
console.log('solution = ', solution("abcabcabcabcdededededede"), "14"); //2abcabc2dedede(6)
console.log('solution = ', solution("xababcdcdababcdcd"),"17"); 

//회고
//경우가 바뀌면 return이나 뭐 바뀌어야 하는 것들을 다 바꾸고 시작함.
//콘솔 알 수 있는 자리에 잘 찍어서 확인하기
//뭐가 문제인지 조리있고 정확하게 말 할 수 있어야함
//계속 콘솔 찍어서 확인하기
//string은 한글자만 가져올 수 있는 점 유의하기
