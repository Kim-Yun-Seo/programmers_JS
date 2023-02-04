const arr = [1, 1, 3, 3, 0, 1, 1];
const arr2 = [4, 4, 4, 3, 3];

function solution(arr) {
  let answer = [];
  let newArr = [];
  console.log(' = ', arr);
  
  arr.forEach((num, inx) => {
    // console.log('num = ', num);
    if (newArr[newArr.length - 1] !== num) {
      //앞에 숫자가 이번 숫자랑 같으면 빼기
      console.log('new = ', newArr);
      newArr.push(num);
      console.log('push = ', newArr[newArr.length - 1]);
      // console.log('dd = ', newArr.length);
    } else { 
      
    }
    // console.log('newArr = ', newArr);
  });

    
  return newArr;
}
console.log('[1,3,0,1] = ', solution(arr));
// console.log('[4,3] = ', solution(arr2));
