// 문자열압축 = return은 가장 짧게 압축한 길이를 리턴
//1. 압축을 함.
//1-1. 압축을 하려면 몇글자로 쪼갤지를 정해야함.
//1-1-1. 모든 글자수로 쪼개고 그 글자수를 전부 비교?.
//1-1-2. 일단 1개씩 압축을 해야함
//1-1-2-1. s에서 알파벳이 똑같은게 붙어있는것을 하나씩 끊기. 
// 갯수를 센다. 
// 다른 문자가 나오면 세는걸 멈춰야함
//1-1-2-2. 반복되는 횟수를 앞에 표기 aabbaccc => 2a2b1a3c(1은생략할것)
//1-1-2-3. s를 한글자씩 element로 가지고 있는 배열로 만들어------
// 만들어진 배열로 왼성되면을 만들꺼다 
// 왼성되면이 완성되면 다시 join()해서 answer에 넣는다. ------
//1-1-2-4. filter? 
//2. 그 길이를 리턴함. 

// var 완성되면 = ['2','a','2','b','a','3','c'];
// answer = 완성되면.join();

// 2개 이상으로 쪼개는법
// 주어진 s를 slice로 쪼개서 한 배열에 담음
// 2개 부터 s.length / 2 개 까지.

//

//중간에서 반복되는건 어떻게 찾을까.
//(s에서 맨처음 반복되는걸 지운 값)exceptSlice에서 다시 반복되는걸 찾기


'use strict';


function solution(s) {
  var answer = "2a2ba3c";
  let count = 0;
  // aabbaccc => 2a2ba3c 로 나타내게..
  // 한글자 씩 찾는 방법과
  // 앞에서 n+1 로 찾는 방법을 두가지 써야한다.
  
  
  const stringToArray = s.split('');

  //['a', 'b', 'c']를 만들것이다.
  //b, c는 어떻게 찾을 수 있을까.

  // a가 들어와서 a를 만나면 count +=1 하고 다른 문자를 만나면 stop.  
  // stringToArray.forEach((element, index) => {
  //   const aaa = stringToArray[index + 1];
  //   console.log('e = ', element);
    
  // });
  // console.log(' = ', toArray.filter(element => 'a' === element).length);

  
  const sliceArray = [];
  for (let i = 2; i <= s.length / 2; i++) {
    const slice = s.slice(0, i)
    sliceArray.push(slice);
  }
  // const reverseSlice = sliceArray.reverse();
  // console.log('sliceArray = ', sliceArray);


  // 2개이상으로 쪼개기.
  //['a','aa', 'aab', 'aabb']
  //-> 여기까진 가능
  //['a', 'b', 'c', 'aa', 'aab', 'aabb']
  //-> 이것도 나중에 만들어야함.

  // sliceArray를 활용할 것임.
  // reverseSlice를 forEach를 사용해서 돌린다. ----
  // -> 아니면 sliceArray를 reverse하고 돌리기. ----
  // sliceArray의 slice가 s에 몇번 반복 되는지 확인 ---
  // (slice)의 repeatCount >= 2 (if문 사용) 면 ----
  // slice로 s 를 압축함.
  // -> s에서 맨처음나온 slice만 챙기고 나머진 안 넣기..?
  // -> 중복제거
  // == repeatCount+slice+(s에서 slice를 제거한 나머지부분) 을 문자로 저장 ----
  // 그 문자의 길이를 return ----

  
  //문제점: 뒤에서 반복되는 애를 찾을 수 없음.
  //exceptSlice는 전체를 만드는게 아니라 압축할 놈을 뺀 부분만 만들어야함.
  const reverseSlice = sliceArray.reverse();
  const sliceArray2 = [];
  console.log('reverseSlice = ', reverseSlice);

  reverseSlice.forEach((slice) => {
    const regExp = new RegExp(slice, "g");
    const exceptSlice = s.replace(regExp, '');
    for (let i = 2; i <= slice.length / 2; i++) {
        const slice2 = exceptSlice.slice(0, i)
        sliceArray2.push(slice2);
      }
  })
  console.log('sliceArray2 = ', sliceArray2);

  const totalArray = sliceArray.concat(sliceArray2) //합치기
  let result1 = [...new Set(totalArray)]; //겹치는거 빼기
  let result2 = []; //없는거 제거
  console.log('result1 = ', result1);
  result1.reverse().forEach((element, index) => {
    if (s.includes(element)) { 
      result2.push(element);
    }
  })
  console.log(' result2 = ', result2);

  const lengthPush = [];
  reverseSlice.forEach((slice, index) => {
    const regExp = new RegExp(slice, "g");
    const repeatCount = s.match(regExp).length; //s에서 slice가 몇번 반복되는지
    const exceptSlice = s.replace(regExp, ''); //s에서 slice를 제거한 문자열.
    let totalResult = s;
    
    // console.log('repeatCount = ', repeatCount);
    
    if (repeatCount !== 1) { 
      totalResult = `${repeatCount}${slice}${exceptSlice}`
    }
    // if (repeatCount >= 2) { 
    //   lengthPush.push(totalResult.length)
    // }
    if (!lengthPush.includes(totalResult.length)) { 
      lengthPush.push(totalResult.length);
      
  }
    console.log(slice, ':', ' = ', totalResult, ',', totalResult.length);
  })
  console.log('lengthPush = ', lengthPush);
  const result = Math.min(...lengthPush);
  return result;
  // return answer.length;
}
//s에서 

const single = ['a', 'b', 'c'];
const dual = ['aa', 'aab', 'aabb'];
const type = [...dual, ...single];
console.log('type  = ', type);

const kkk = "abcabcabcabcdededededede" 
console.log('kkk = ', kkk.length); // 24 

const yyy = 'aabbaccc'
console.log('kkk = ', yyy.length); // 하나씩 : a a b b a c c c

const kkk0 = "abcabcabcabcdededededede" 
console.log('kkk = ', kkk0.length); // 하나씩 : a b c a b c a b c a b c d e d e d e d e d e d e 24 겹치는거 빼서 혼자 있는 것만 

const kkk1 = "abcabcabcabc6de" //두글자 : ab ca bc ab ca bc de de de de de de ; 15
console.log('kkk = ', kkk1.length); // 16

const kkk2 = "4abcdededededede" //3글자: abc abc abc abc ded ede ded ede
console.log('kkk = ', kkk2.length); // 16

const kkk3 = "abcabc abcabc dedede dedede"// 2abcabc2dedede 14
console.log('kkk = ', kkk3.length); // 14

//개수에 따라 자르기.
//개수에 따라 자른놈으로 다 돌려서 
//연속되나 확인



// "abcabcabcabcdededededede"	24
// "2abcabc dedede dedede"	14


// 2a2b2a2b == aabbaabb 8 - 8
// 2aabb == aabbaabb 8 - 5 

// 4aabb == aabb aabb aabb aabb 6 - 4
// 2aabbaabb == aabbaabb aabbaabb 6 - 4
// ['a', 'b', 'c', 'd', 'e', 'bca', 'cabc', 'cab', 'ca', 'abcd', 'bcded', 'bcde', 'bcd', 'bc', 'cdede', 'cded', 'cde', 'cd', 'dedede', 'deded', 'dede', 'ded', 'de', 'ab', 'abc', 'abca', 'abcab', 'abcabc', 'abcabca', 'abcabcab', 'abcabcabc', 'abcabcabca', 'abcabcabcab', 'abcabcabcabc']
// abababab
// 2ab2ab
// 4ab
// 2a2ba3c
//주어진 s의 길이가 8글자로 끝나서,  'aabba' 얘의 최소 두번 압축했을 때 길이가 8을 넘어가서 10개가 돼서 찾을 필요가 없다.
//s.length / 2 가 최대 중복될 수 있는 글자수
//slice 써서 쪼개기. 
//splice는 원래 배열을 바꾸는 애라서 여기선 쓰면 안됨. 원래 배열을 계속 사용해야하는 문제라서.
// console.log('solution = ', solution("aabbaccc"),"7"); //2a2ba3c(1)
// console.log('solution = ', solution("ababcdcdababcdcd"),"9"); //2ababcdcd(8)
// console.log('solution = ', solution("abcabcdede"),"8"); //2abcdede(3)
console.log('solution = ', solution("abcabcabcabcdededededede"), "14"); //2abcabc2dedede(6)
// -> 'abcabc'를 하나, 'dedede'를 하나로봄.
// console.log('solution = ', solution("xababcdcdababcdcd"),"17");  x2ababcdcd

//반복 된다는건 '연속'
//재귀




//회고
//다각적으로 생각하고
//한곳으로 매몰되면 안되고
//'쪼갤지 정해야함' 이라고 적어놨으면 어떻게 쪼갤지 고민하고
// 주석 쓴거에 ~하면,(비교)가 있으면 if 가 필요함. 을 인지해야함.
// 한 줄에 행동 하나씩
// 코딩하고 1시간 지나면 환기 좀 시키고 다시 주석부터 읽어보면서 생각하기.