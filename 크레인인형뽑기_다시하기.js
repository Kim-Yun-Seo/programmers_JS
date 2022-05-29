'use strict'


function solution (board, moves) {
  let totalArray = [];
  let bucket = [];
  let resultBucket = [];

  board.reverse().forEach((_, index) => {
    totalArray.push([]);
    for (let i = 0; i < board.length; i++) {
      const notZeroNum = board[i][index];
      if (notZeroNum !== 0) {
        totalArray[index].push(notZeroNum)
      }
    }
  });
  
  moves.forEach((line, index) => {
    let pop = totalArray[line - 1].pop()
    if (!isNaN(pop)) {
      bucket.push(pop)
    }
  })
  bucket.forEach((num, index) => {
    if (resultBucket[resultBucket.length - 1] === num) {
      resultBucket.pop();
    } else {
      resultBucket.push(num);
    }
  })

  return bucket.length - resultBucket.length;
}


console.log('solution = ', solution([
  [0,0,0,0,0],
  [0,0,1,0,3],
  [0,2,5,0,1],
  [4,2,4,4,2],
  [3,5,1,3,1]], [1,5,3,5,1,2,1,4] ), '4');