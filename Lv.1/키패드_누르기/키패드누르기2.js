'use strict';

function solution(numbers, hand) {
    const answer = []; // LRLLLRLLRRL 
    const keyPad = {
      1: [0, 0], 2: [1, 0], 3: [2, 0],
      4: [0, -1], 5: [1, -1], 6: [2, -1],
      7: [0, -2], 8: [1, -2], 9: [2, -2],
      '*': [0, -3], 0: [1, -3], '#': [2, -3],
    };
    const thumb = {
      left: {
        name: 'L',
        location: '#'
      },
      right: {
        name: 'R',
        location: '*'
      },
    };

    numbers.forEach((number) => {
      const target = keyPad[number];
      
      if (target[0] === 0) {
        thumb.left.location = number;
        answer.push(thumb.left.name);
      } else if (target[0] === 2) {
        thumb.right.location = number;
        answer.push(thumb.right.name);
      } else {
        let direction = hand;
        const isShorter = Object.keys(thumb).map((direction, index) => {
          const xDistance = Math.abs(keyPad[thumb[direction].location][0] - keyPad[number][0]);
          const yDistance = Math.abs(keyPad[thumb[direction].location][1] - keyPad[number][1]);

          return xDistance + yDistance;
        }).reduce((left, right) => Math.abs(left) - right, 0);

        if (isShorter < 0 ) {
          direction = 'left';
        } else if (isShorter > 0 ) {
          direction = 'right';
        }
        
        thumb[direction].location = number;
        answer.push(thumb[direction].name);
      }
    });

    return answer.join('');
};
  

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"),'"LRLLLRLLRRL"');
console.log(solution(	[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"),'"LRLLRRLLLRR"');