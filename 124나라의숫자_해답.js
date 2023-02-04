function solution(n) {
    var answer = '';
    const arr=['4','1','2'];
    while(n > 0){
        answer=arr[n % 3]+answer;
        n=Math.floor((n - 1)/3);
    }
    
    return answer;
}

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