function solution (test) {
  const id_list = test.id_list;
  const report = test.report;
  const k = test.k;
  let stopMemberArray = [];
  let memberData = {
    // muzi : {},
    // neo : {},
  };
  // 신고한사람에게 메일을 보낸다. 
  // 메일을 보내려면, reportedCount가 k보다 크면 정지먹을거임.
  // 정지 당할사람 들을
  id_list.forEach((id, idIndex) => {
    memberData[id] = {
      reporting: [],
      reportedCount: 0,
    }
  });
  console.log(' memberData = ', memberData);

  report.forEach((arrow) => {
    const split = arrow.split(' ');
    const 신고한사람 = split[0];
    const 신고받은사람 = split[1];
    memberData[신고한사람].reporting.push(신고받은사람);
    memberData[신고받은사람].reportedCount++
  })
  //만약에 reportedCount가 k보다 크면 isdelete가 true 바뀔거야.
  Object.keys(memberData).forEach((member) => {
    if (memberData[member].reportedCount > 1) {
      console.log('신고 많이 받아 정지될친구들  = ', );
      stopMemberArray.push(member);
    }
  }) 
  Object.keys(memberData).forEach((member) => {
    memberData[member].reporting
  })
  

//   console.log('stopMemberArray = ', stopMemberArray);
//   stopMemberArray.forEach(() => {
// //  정지 받은 친구들 모음 
//   })
  
  return [];
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

console.log('solution = ', solution(test1), '[2,1,1,0]');
// console.log('solution = ', solution(test2), '[0,0]');