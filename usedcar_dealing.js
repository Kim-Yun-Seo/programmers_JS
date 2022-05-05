function solution(prices) {
  
  let result = prices.map((price, index) => {
    const exceptList = prices.filter((value) => value != price)
    const semiResultList = exceptList.map((num, numberIndex) => {
      return num - price;
    });
    const maxNumber = Math.max(...semiResultList);

    return maxNumber;
  });
  const finalMaxNumber = Math.max(...result)

  return finalMaxNumber;
};

// console.log('solution() = ', solution([ 3, 5, 1, 5, 0, 4]));
console.log('solution = ', solution([3, 2, 4, 8, 7]))