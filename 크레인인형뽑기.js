//크레인인형뽑기 =  return은 사라진 인형 개수 넘버
//*** 1.네오, 2.단무지, 3.콘, 4.어피치, 5.프로도
// ->  근데 숫자로 구별하면 돼서 이건 딱히 의미 없는듯?
// 리턴할 답: 바구니에 연속으로 담겨서 사라진 인형의 개수를 리턴할거임.
// 1. 바구니에 담겨있는 인형이 뭐가 있는지를 알아야함. -> 마지막에 붙어 있는걸 세면 됨. (근데 얘는 순서가 중요한듯?)
// 1-1. ( 콘,네오,네오,콘 ) 이렇게 있으면 네오가 없어지면 콘도 없어져야함.
// 1-2. 기계의 맨 위에 있는 인형이 바구니의 젤 아래에 깔림.
// 2. 크레인으로 끌어당기는 인형이 뭔지를 알아야 바구니에 무슨 인형이 있는지 알 수 있음.
// 2-1. 현재 기계속에 어떤 인형들이 어떤 순서와 배열로 있는지가 저장되어 있어야함.
// 2-2. 크레인으로 끌어당길 때마다 기계안에 있는 인형의 상태가 바뀜.
// 2-3. 크레인이 어떻게 그 자리에 무슨 인형이 있는지 알고 가져올 수 있을까?
// ** 크레인이 1번째 줄에 내려갈때 1열부터 5열까지를 돌면서 0이 아닌 수가 나올 때까지 내려가고, 0이 아닌수를 만나면 그 숫자를 바구니에 저장해
// ** 처음에 moves의 1을 받으면 board 각 다섯개 배열의 인덱스0번을 돌면서 0이 아닌 숫자가 나올 때 멈춤.
// 3. 맨처음 기계에 있는 인형들을 알아야함. 순서까지
// -> 처음 움직일때 모든 board의 배열을 돌아야 할까?
// -> board를 뒤집은 전체 기계 배열 만들까


function solution(board, moves) {
  
  console.log('board = ', board);
  console.log(' moves = ', moves);

  let totalArray = [
    [],
    [],
    [],
    [],
    [],
  ];
  
  // for (let i = 0; i < board.length; i++) {
  //   board.forEach((dollArray, index) => {
  //     // index 0 = [0,0,0,0,0]
  //     // index 1 = [0,0,1,0,3],
  //     totalArray[index].push(dollArray[i]); 
  //   });
  // }

  // const aaa = [[],[],[],[],[]]
  // board.forEach((row, rowI) => {
  //   // inde x 0 = [0,0,0,0,0]
  //   // index 1 = [0,0,1,0,3],
  //   board.forEach((column, columnI) => {
  //     aaa[rowI].push(board[columnI][rowI]); 
  //   });
  // });
  // console.log('aaa = ', aaa);

  board.forEach((dollArray, index) => {
    // index 0 = [0,0,0,0,0]
    // index 1 = [0,0,1,0,3],
    for (let i = 0; i < dollArray.length; i++) {
      totalArray[index].push(board[i][index]); 
    }
  });
  
  console.log('totalArray = ', totalArray);

  const answer = 0;
  return answer;
}

const aa = [
  [3,4]
  [5,2,2],
  [1,4,5,1],
  [3,4],
  [1,2,1,3]
]
const bb = [4, 3, 1, 1, 3, 2, 3, 4]

console.log(' solution() = ', solution([
  [0,0,0,0,0],
  [0,0,1,0,3],
  [0,2,5,0,1],
  [4,2,4,4,2],
  [3,5,1,3,1]], [1,5,3,5,1,2,1,4]), '4');

  //회고
  // 주석을 적을때는 형용사가 아닌 코딩언어로 된 행위를 적기
  // 원하는 모양이 뭔지 틀을 다 적어놓고 코딩 시작하기
  // return값 적어놓고 시작하기