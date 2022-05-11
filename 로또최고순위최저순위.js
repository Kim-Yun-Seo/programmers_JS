function solution(example) {
  const lottos = example.lottos;
  const win_nums = example.win_nums;
  let bestScore = 0;
  let lowScore = 0;
  let correctNumber = 0;
  let disCorrectNumber = 0;

  //lottos의 숫자랑, win_nums의 숫자랑 전체를 다 비교를 해서 몇개가 같은지부터.
  lottos.forEach((lotto, lottoIndex) => {
    //만약에 lottos의 0이 정답이라고 가정하고 정답과 맞는 개수를 찾아서 correctNumber 에 카운트 한다. 
    //포함하면서 0이 아닌 숫자 +1, 0이면 +1, 아니면 가만히 둠.
    if (win_nums.includes(lotto) && lotto !== 0) {
      correctNumber ++;
    } else if (lotto === 0) {
      correctNumber ++;
    }
    //low는 현재 correctNumber가 2가 되어야 함.

    if (!win_nums.includes(lotto) || lotto === 0) {
      disCorrectNumber ++;
    } 
    if (correctNumber === 6) {
      bestScore = 1;
    } else if (correctNumber === 5) {
      bestScore = 2;
    } else if (correctNumber === 4) {
      bestScore = 3;
    } else if (correctNumber === 3) {
      bestScore = 4;
    } else if (correctNumber === 2) {
      bestScore = 5;
    } else {
      bestScore = 6;
    }
    if (disCorrectNumber === 0) {
      lowScore = 1;
    } else if (disCorrectNumber === 1) {
      lowScore = 2;
    } else if (disCorrectNumber === 2) {
      lowScore = 3;
    } else if (disCorrectNumber === 3) {
      lowScore = 4;
    } else if (disCorrectNumber === 4) {
      lowScore = 5;
    } else {
      lowScore = 6;
    }
  })
  const answer = [bestScore, lowScore];
  return answer;
}
test1 = {
  lottos: [44, 1, 0, 0, 31, 25],
  win_nums: [31, 10, 45, 1, 6, 19],
}
test2 = {
  lottos: [0, 0, 0, 0, 0, 0],
  win_nums: [38, 19, 20, 40, 15, 25],
}
console.log(' => ', solution(test1));
console.log(' => ', solution(test2));