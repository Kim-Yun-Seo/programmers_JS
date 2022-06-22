function gcd(w, h) {    // 처음 W와 H를 받습니다.

    // W와 H의 나머지를 구합니다.
    const mod = w % h;

    // 만약 나머지가 0일 경우 H를 반환합니다.
    if (mod === 0) {
        return h;
    }

    // 만약 0이 아닐경우 W에 H를 넣고 H에 나머지인 mod를 넣어 해당 함수를 다시 호출해 줍니다.
    return gcd(h, mod);
}
function solution1(w, h) {
    // 최대 공약수를 구해줍니다.
    const gcdVal = gcd(w, h);

    // 공식에 맞춰 사용
    return (w + h - gcdVal);
}

function solution(w, h) {
  const a = h / w;
  const xArray = [];
  let blockCount = 0;

  for (let i = 0; i <= h; i++) { 
    const round = Math.round((i / a) * 10000) / 10000;
    xArray.push(round);
  }
  console.log('zArray = ', xArray);
  xArray.forEach((x, y) => {
    if (y !== xArray.length - 1) {
      const after = xArray[y + 1];
      const now = Math.floor(x);
      const distance = after - now;
      const passBlock = Math.ceil(distance);

      blockCount += passBlock;
    }
  });
  

  return blockCount;
}

// console.log('solution = ', solution(9, 4), '= 80');
// console.log('solution = ', solution(12, 8), '= 80');
// console.log('solution = ', solution(9, 1), '= 0');
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

for (let i = 0; i < 100; i++) { 
  const h = getRandomInt(1, 100)
  const our = solution(i, h);
  const answer = solution1(i, h);
  
  if (our !== answer) { 
    console.log(i, h, ' = ', our, '= ', answer);
  }
}
// 28 41 ' = ' 1079 '= ' 1080
//24 56 ' = ' 73 '= ' 72
//15 11 ' = ' 26 '= ' 25
//13 30 ' = ' 43 '= ' 42
// console.log('solution = ', solution(15, 11), '= 25');
// console.log('solution = ', solution(28, 41), '= 1080');
// console.log('solution = ', solution(12, 8),'= 80');
// console.log('solution = ', solution(6, 9), '= 42');
// console.log('solution = ', solution(2, 12), '= 12');
// console.log('solution = ', solution(2, 12),, '= 80');
// console.log('solution = ', solution(8, 12),'= 80');