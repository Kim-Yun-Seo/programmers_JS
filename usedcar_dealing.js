function solution(prices) {
  
  
  let result = prices.map((price, index) => {
    console.log('price = ', price);
    //현재의 price를 제외하고 현재 Price의 인덱스보다 인덱스가 높은 애들만 exceptList 넣을것임.
    const exceptList = prices.filter((value, index2) => value != price && index < index2 )
    console.log('exceptList = ', exceptList);
    //semiResultLista는 exceptlist를 돌면서 exceptlist안에 있는 n번째 숫자에서 prices의 price를 돌면서 뺀 값을들 모아놓은 배열.
    const semiResultList = exceptList.map((num, numberIndex) => {
      return num - price;
    });
    const maxNumber = Math.max(...semiResultList);
    console.log('semiResultList = ', semiResultList);
    console.log('maxNumber = ', maxNumber);
    console.log(' ------------ ' );
    return maxNumber;
  });
  let finalMaxNumber = Math.max(...result)
  console.log('finalMaxNumber = ', finalMaxNumber);
  if (finalMaxNumber < 0) {
    finalMaxNumber = 0
  }
  return finalMaxNumber;
  
};

// console.log('solution() = ', solution([ 3, 5, 1, 5, 1, 4]));
console.log('solution = ', solution([5, 4, 3, 2, 1]))