'use strict';
//키패드 누르기 = return 각자릿수를 누르기 위해 사용된 손방향을 나열한 문자열

//1. 키패드가 정의가 돼야 뭘 할 수 있을거 같음.
//1-1. 
//2. 오른손, 왼손을 썼다는걸 나타낼 수 있어야함.
//2-2. numbers 돌면서 그 숫자에 따라 L과 R이 문자열로 추가됨. (배열로 push해서 마지막에 문자열로 바꾸던가)
//2-2-1. numbers forEach, 1,4,7 = 'L' []에 push, 3,6,9면 'R' push, 나머지는 'm'
//3. 2580 어쩔까
//3-1. 왼손의 위치랑 오른손의 위치를 저장해놔야 할것 같음. ==
//3-1-1. 손가락이 (2580 빼고 )number를 받으면 위치가 변경돼야함.
//3-2. 2580이랑 각각손가락이 있는 각각 숫자와의 거리를 비교해서 가까운 손가락의 위치를 바꿀 거야. 2580중에 하나로.
//3-2-1. 147, 369 이 숫자들의 2580과의 거리를 Obj로 저장할거야.
function solution(numbers, hand) {
    const answerString = 'LRLLLRLLRRL';
    const answer = [];
    const keyPad = {
      1: { 2: 1, 5: 2, 8: 3, 0: 4},
      4: { 2: 2, 5: 1, 8: 2, 0: 3},
      7: { 2: 3, 5: 2, 8: 1, 0: 2}, 
      3: { 2: 1, 5: 2, 8: 3, 0: 4}, 
      6: { 2: 2, 5: 1, 8: 2, 0: 3}, 
      9: { 2: 3, 5: 2, 8: 1, 0: 2}, 
      2: { 2: 0, 5: 1, 8: 2, 0: 3}, 
      5: { 2: 1, 5: 0, 8: 1, 0: 2}, 
      8: { 2: 2, 5: 1, 8: 0, 0: 1}, 
      0: { 2: 3, 5: 2, 8: 1, 0: 0 }, 
      '#': { 2: 4, 5: 3, 8: 2, 0: 1 },
      '*': { 2: 4, 5: 3, 8: 2, 0: 1 }
    }
    let rightFinger = '#'
    let leftFinger = '*'
    

    numbers.forEach((number, index) => {
      if (number === 1 || number === 4 || number === 7) {
        answer.push('L')
        leftFinger = number
        // console.log('leftFinger = ', leftFinger);
      } else if (number === 3 || number === 6 || number === 9) {
        answer.push('R')
        rightFinger = number
        // console.log('rightFinger  = ', rightFinger);
      } else {
        
        //2580이 들어오면, --- 
        //왼손의 위치를 가져와서 --
        //keyPad에서 현재 왼손 숫자의 obj 안에 현재 number의 value를 찾아둘거야.
        //오른손의 위치를 가져와서
        //현재 오른손 숫자의 obj 안에 현재 number의 value를 찾아둘거야.
        // 왼손 value랑 오른손 value랑 비교할거야.
        // 더 작은 숫자에 해당하는 손의 위치가 현재 number로 바뀔거야.
        const leftDistance = keyPad[leftFinger][number]
        // console.log(number, leftFinger, 'distance = ', leftDistance);
        console.log('number = ', number);
        console.log('rightFinger = ', rightFinger);
        const rightDistance = keyPad[rightFinger][number]
        // console.log(number, rightFinger,' rightDistance = ',rightDistance);
        if (leftDistance < rightDistance) {
          answer.push('L')
          leftFinger = number;
        } else if (leftDistance > rightDistance) {
          answer.push('R')
          rightFinger = number;
        } else {
          answer.push(hand === 'right' ? 'R' : 'L')
          if (hand === 'right') {
            rightFinger = number
          } else {
            leftFinger = number
          };
        }
      }
    })
    // console.log('leftFinger = ', leftFinger);
    console.log('answer = ', answer);

    return answer.join('');
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"),'"LRLLLRLLRRL"')
console.log(solution(	[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"),'"LRLLRRLLLRR"');