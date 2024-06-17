// 신고결과받기 = return은 각 멤버가 신고한 사람 중에 계정이 정지당한 사람의 수를 배열로 리턴해줌.
// [2,1,1,0]

// 1. 인덱스 0번이 신고한 사람중 계정 정지가 된 사람의 정보를 가져와서 result의 0번에 넣어줌.
// 1-1. 무지가 누굴 신고했는지에 대한 데이터가 있어야함.
// 1-2. 각 사람, 즉 모든 사람이 누구를 신고했고(누구한테 신고당했고), 총 몇번 신고 당했는지, 계정이 정지가 됐는지를 정보로 만들어야함.
// 1-2-0. 오브젝트로 만들것임.
// 2. 어떻게 만들까?
// 2-1. 
//리펙토링은 1. 퍼포먼스 2. 가독성
// 퍼포먼스 1. 반복문 줄이기 2.if문 줄이기 
// 가독성 1. 변수 덜 쓰기 2. 이름잘짓기
function solution (test) {
  const id_list = test.id_list;
  const report = test.report;
  const k = test.k;

  let result = [] // [2,1,1,0]각 자릿수는 멤버를 의미하고, 그 안에 들어가는 값은 멤버가 신고한 정지당한 사람의 수
  let memberData = {
    // muzi: {},
    // frodo: {}
  }
  
  id_list.forEach((memberName) => {
    memberData[memberName] = {
      reporting: [], //report의 0번째를 split으로 쪼개서 [0]이 muzi면 그 [1]을 reporting 배열에 넣을것.
      reported: [], //apeach
      //isBan: false, //reported.length가 k보다 크면
      banCount: 0 //reporting에 0번째의 obj에 찾아가서 isBan이 true면 banCount에 1을 더한다. - forEach, for 문
    }
  })
  //report: ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 
  report.forEach((reportSet) => {
    const reportSplit = reportSet.split(' ');
    const ing = reportSplit[0]; //신고한 사람
    const ed = reportSplit[1]; //신고 당한 사람
    const edData = memberData[ed];

    
    if (!edData.reported.includes(ing)) {
      edData.reported.push(ing);
    }
    if (!memberData[ing].reporting.includes(ed)) {
      memberData[ing].reporting.push(ed);
    }
    // edData.isBan = edData.reported.length >= k;
    
  });
  //banCount는 이 for문에서 못만들어. 그래서 모든 사람들의 데이터가 다 만들어진 후에 만들 수 있음.
  //memberData[muzi].reporting. 돌아서 그 frodo의 obj로 가서 isBan이 true면 memberData[muzi].bancount++
  id_list.forEach((member) => {
    memberData[member].reporting.forEach((nowReportedMemeber) => {
      console.log(member,'nowReportedMemeber = ', nowReportedMemeber);
      if (memberData[nowReportedMemeber].reported.length >= k) {
        memberData[member].banCount++
      }
    })
    result.push(memberData[member].banCount);
  })
  
  //인덱스 0번은 무지의 이야기. 1번은 프로도의 이야기.
  console.log(' memberData = ', memberData);
  
  return result;
}

const test1 = {
  id_list: ["muzi", "frodo", "apeach", "neo"], 
  report: ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 
  k: 2,
}
const test2 = {
  id_list: ["con", "ryan"], 
  report: ["ryan con", "ryan con", "ryan con", "ryan con"], 
  k: 3
}
const test3 = {
  id_list: ["con", "ryan","muzi", "frodo", "apeach", "neo"], //0 0 
  report: ["ryan con", "ryan con", "ryan con", "ryan con","muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 
  k: 1
}

// console.log('solution = ', solution(test1), '[2,1,1,0]');
// console.log('solution = ', solution(test2), '[0,0]');
console.log('solution = ', solution(test3), '[0,1,2,1,2,0]');