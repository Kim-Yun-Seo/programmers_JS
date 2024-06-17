function aaa(n) {
  const a = 3;
  const share = Math.floor(n / a) ;
  const string = n.toString(3);
  let k = string;

  if (string % 10 === 0) {
    let t = (share - 1) * 10;
    const q = Number((share - 1).toString(3));

    console.log('받은 10진수 = ', n, ', 3진수 = ', string, ', 몫 = ', share, ' , 몫을 -1 * 10 = ', t, ' q = ', q);

    if (q % 10 === 0) {
      t = (q) * 10;
    }
    k = t + 4;
  } else { 
    
  }
  return k
};


console.log('1 = ', aaa(1), 1);
console.log('2 = ', aaa(2), 2);
console.log('3 = ', aaa(3), 4);
console.log('4 = ', aaa(4), 11);
console.log('5 = ', aaa(5), 12);
console.log('6 = ', aaa(6), 14);
console.log('7 = ', aaa(7), 21);
console.log('8 = ', aaa(8), 22);
console.log('9 = ', aaa(9), 24);
console.log('10 = ', aaa(10), 41);
console.log('11 = ', aaa(11), 42);
console.log('12 = ', aaa(12), 44);
console.log('13 = ', aaa(13), 111);
console.log('14 = ', aaa(14), 112);
console.log('15 = ', aaa(15), 114);