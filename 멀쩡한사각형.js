function solution(w, h) {
  //가로 / 세로 === 3/2, 2/3
  //무조건 잘리는 개수는 4개. (가로*세로) - [(가로/분자) * 4]
  const a = h / w
  console.log('a = ', a);
  const xArray = [];
  const total = h * w;
  let pass = 0;
  // y = ax
  for (let i = 0; i <= h; i++) { 
    // console.log('i = ', i);
    const x = i / a;
    xArray.push(x);
    console.log(i, 'x = ', x);
    // x 다음에 x 
  }
  console.log('xA = ', xArray);
  xArray.forEach((x, y) => { 
    
    console.log( y, '~~', y + 1, '사이---------------------');
    
    let addNum = 0;
    
    // console.log('xy = ', y, '일때 x는', x);
    console.log(y, '일 때 x값 = ', x,);
    console.log(y+1,' 일 때 x값 = ', xArray[y + 1]);
    if (y === xArray.length - 1) {
      console.log('마지막은 돌지 않는다. ', );
    } else { 
      const floorAfter = Math.floor(xArray[y + 1]);
      const after = xArray[y + 1];
      const now = Math.floor(x);
      const minus = after - now; // 사이의 정수가 몇개니
      console.log('사이의 정수 개수 = ', minus, '개', after, '-', now);
      console.log(' 지나간 칸의 개수 = ', Math.ceil(minus));
      // console.log(' 다음 x점에서 지금 x 값 빼기 = ', xArray[y + 1] - x);
      // console.log(' 다음 x값이 정수인지? = ', Number.isInteger(xArray[y + 1]));

      addNum = Math.ceil(minus)
      
      // if (now !== after) {
      // // console.log('====== 정수가 있어서 2개 ');
      //   if (Number.isInteger(xArray[y + 1]) && xArray[y + 1] - x < 0) {// 다음에 오는 인덱스의 숫자가 정수라면 +1 
      //     // console.log('정수니 = ', xArray[y + 1]);
      //     addNum = 1;
      //     console.log('b = ', );
      //   } else { //아니면 +2
      //     addNum = minus + 1; //점을 칸으로 만드는 +1
      //     console.log('a = ', );
      //   }
      // } else { 
      //   addNum = 1;
      //   console.log(x,xArray[y + 1],'사이에 정수가 없음. = ', );
      // }
    }
    
    console.log('addNum = ', addNum);
    pass += addNum;
    console.log('pass = ', pass);
  })
  // console.log(' ====== ', pass);
  return total - pass;
}

// console.log('solution = ', solution(9, 4), '= 80');
console.log('solution = ', solution(12, 8), '= 80');
// console.log('solution = ', solution(8, 12),'= 80');