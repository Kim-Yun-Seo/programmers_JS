function solution(record) {
  // 액션 , 아이디, 닉, 순서
  // 아이디를 기준으로 obj를 만들어
  // 액션의 순서에 따라 노출
  // 노출의 방법은 action의 타입에 따라 ---- 
  // 아이디의 마지막 닉을 기억해  == 아이다마나 닉을 기억하는 저장소 필요 -----
  // record를 순서에 따라 포문을 돌면서 닉네임? 과 
  // 엑션에 따른 서술어를 붙여 표시 할수 있는가? ------
  // answer에 푸시 한다. 
  

  // record를 받으면 aciton에 따라 노출 할지 말지가 결정됨
  // action obj를 만들어야함. -----
  // action을 사용하기 위해 id가 기준인 obj가 있어야함. --- 
  // user => 
  // record를 돌면서 aciton의 isDisplay가 true이면 바뀌게 만들어야함. - > ----
  // 마지막껄 기억해야함. ---- 
  // record를 돌면서 최종적으로 id obj랑 aciton obj를 사용해서 answer에 string으로 push할것임. 

  var answer = [
    // "Prodo님이 들어왔습니다.", 
    // "Ryan님이 들어왔습니다.", 
    // "Prodo님이 나갔습니다.", 
    // "Prodo님이 들어왔습니다."
  ];
  
  const actionObj = {
    Enter: { print:'들어왔습니다.', isDisplay: true },
    Leave: { print:'나갔습니다.', isDisplay: true },
    Change: { print:'변경', isDisplay: false },
  };
  const userObj = {
    // uid1234 : 'Prodo',
    // uid4567: 'Ryan',
  };  

  record.forEach((situation) => {
    const split = situation.split(' ');
    const id = split[1];
    const nick = split[2];
    
    if (nick) {
      userObj[id] = nick;
    } 
  });
  record.forEach((situation) => {
    const split = situation.split(' ');
    const action = split[0];
    const id = split[1];
    const print = `${userObj[id]}님이 ${actionObj[action].print}`;
    
    if (actionObj[action].isDisplay) {
      answer.push(print);
    }
  });
  console.log('userObj = ', userObj);

  return answer;
};

const record = [
  "Enter uid1234 Muzi", 
  "Enter uid4567 Prodo", 
  "Leave uid1234", 
  "Enter uid1234 Prodo", 
  "Change uid4567 Ryan" 
];
const record1 = [
  "Enter uid1234 Muzi", 
  "Enter uid4567 Prodo", 
  "Leave uid1234", 
  "Enter uid1234 Prodo", 
  "Change uid4567 Ryan",
  "Leave uid4567", 
];

console.log('solution = ', solution(record), 
`[
  "Prodo님이 들어왔습니다.", 
  "Ryan님이 들어왔습니다.", 
  "Prodo님이 나갔습니다.", 
  "Prodo님이 들어왔습니다."
]`);
console.log('solution = ', solution(record1), 
`[
  "Prodo님이 들어왔습니다.", 
  "Ryan님이 들어왔습니다.", 
  "Prodo님이 나갔습니다.", 
  "Prodo님이 들어왔습니다."
]`);

//회고
//입력값이랑 출력값이랑 비교해서 뭐가 다른지, 다른 이유가 뭔지를 캐치하는게 중요함
//위에서 캐치한 것이 코딩의 핵심이 될 수 있음.
//내가 만들고자 하는 데이터가 있다면 그 틀을 다 잡아놓고 만들기.
//가지고 있는 데이터를 최대한으로 활용하기
//오타 줄이기
//확신이 없으면 아는 것이 아님.
//주석 적는 시간 줄이기
//주석은 한문장에 하나의 액션만 담기게하기