function solution(w, h) {
  const a = h / w
  const xArray = [];
  const total = h * w;
  let pass = 0;

  for (let i = 0; i <= h; i++) {
    const x = i / a;

    xArray.push(x);
  }
  xArray.forEach((x, y) => {
    const after = Math.floor(xArray[y + 1]);
    const now = Math.floor(x);
    let addNum = 0;
    
    if (y === 12) {
      console.log('12는 돌지 않는다. ',);
    } else {
      if (now !== after) {
        if (Number.isInteger(xArray[y + 1])) {
          addNum = 1;
        } else {
          addNum = 2;
        }
      } else {
        addNum = 1;
      }
    }
    pass += addNum;
  });
  
  return total - pass;
}

console.log('solution = ', solution(8,12),'= 80');