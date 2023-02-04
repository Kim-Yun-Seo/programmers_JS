function solution(n) {
  //규칙찾기
  
  const number = ['1', '2', '4'];

  // for (let i = 1; i <= number.length; i++) { 
  //   for (let j = 1; j <= number.length; j++) { 
  //     console.log(i * j + 3,' = ', number[i-1] + number[j-1]);
  //   }
  // }
  // 11 = 1;
  const a = Math.floor(n / number.length);
  const b = n % number.length;
  const array = [];
  // for (let i = 1; i < 10; i++) { 
  for (let k = 0; k < 3 ; k++) { 
    // console.log('i = ', i, 'k =', k);
    // console.log('array1 = ', array);
    console.log(k, 'array[array.length - 1] = ', [...array], array[array.length - 1]);
    for (let j = 0; j < 3; j++) { 
        array.push(number[k] + number[j]);
        // if (array[array.length - 1] !== '4') { 
        //   for (let i = 0; i < 3; i++) { 
        //   array.push(number[k] + number[j] + number[i]);
        //   }
        // }
        
    }
  }
  for (let k = 0; k < 3 ; k++) { 
    for (let j = 0; j < 3; j++) { 
      for (let t = 0; t < 3; t++) { 
        array.push(number[k] + number[j] + number[t]);
      }
    }
  }

  for (let k = 0; k < 3 ; k++) { 
    for (let j = 0; j < 3; j++) { 
      for (let t = 0; t < 3; t++) { 
        for (let o = 0; o < 3; o++) { 
          array.push(number[k] + number[j] + number[t]+ number[o]);
        }
      }
    }
  }
  const k = ['1', '2', '4', ...array];
  console.log('array = ', k );
  // console.log('a = ', a);
  // console.log('b =  ', b);
  
  
  var answer = k[n - 1];
  return answer;
}
// function aaa(4) { 
//   const kkk = '';
//   for (let o = 0; o < 3; o++) { 
//     array.push(number[k] + number[j] + number[t]+ number[o]);
//   }
//   return kkk
// }


// console.log('1 = ', solution(1), '= 1');
// console.log('2 = ', solution(2), '= 2');
// console.log('3 = ', solution(3), '= 4');
console.log('1 = ', solution(1), 1);
console.log('2 = ', solution(2), 2);
console.log('3 = ', solution(3), 4);
console.log('4 = ', solution(4), 11);
console.log('5 = ', solution(5), 12);
console.log('6 = ', solution(6), 14);
console.log('7 = ', solution(7), 21);
console.log('8 = ', solution(8), 22);
console.log('9 = ', solution(9), 24);
console.log('10 = ', solution(10), 41);
console.log('11 = ', solution(11), 42);
console.log('12 = ', solution(12), 44);
console.log('13 = ', solution(13), 111);
console.log('14 = ', solution(14), 112);
console.log('15 = ', solution(15), 114);

