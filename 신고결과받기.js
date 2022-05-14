function solution(id_list, report, k) {
  let reportedMembersArray = []; // 사람이름 
  let reportedTimesArray = []; // {신고된이름:3}
  let memberReportingList = []; // {신고한사람: 신고된사람: }
  let stopMember = []; // 정지된사람
  let totalResult = [];
  let result= [];
  let eachMemberList = [];

  report.forEach((reportList, index) => {
    eachMemberList = reportList.split(' ')
    console.log(' eachMemberList = ', eachMemberList );
    // console.log(' eachMemberList = ', eachMemberList );
    reportedMembersArray.push(eachMemberList[1]);

    
    //중복된거 있으면 하나로 합치자.
    
    // console.log('aaa = ', );
    // if (memberReportingList[index].reportedmember !== memberReportingList[index + 1].reportedmember) {
    //   console.log('aaa = ', );
    // }
    // console.log(' memberReportingList = ', memberReportingList);
    memberReportingList.push({member: eachMemberList[0], reportedMember: eachMemberList[1]})
  });
  
  let test = [...new Set(memberReportingList)]
  console.log('test = ', test);
  //여기까지 완성된 것 : 누가 누구를 신고했는지를 object로 만들어서 한 배열에 담았음.
  //다음으로 해야할 것 : 각 member가 신고한 사람이 몇번 신고당했는지를 알아야함.
  
  id_list.forEach((member, memberIndex) => {
    let reportedTimes = reportedMembersArray.filter(n => n === member).length;
    reportedTimesArray.push({name: member, times: reportedTimes})
  })
  //여기까지 한 것 : 각 멤버가 신고당한 횟수를 obejct로 만들어서 한 배열에 담았음.
  //다음으로 해야할 것 : 계정 정지를 당한 사람은 누구인지. (계정정지는 k보다 많이 신고당하면 됨)
  // 이용해야 하는것: reportedMembersArray, reportedTimesArray
  console.log('memberReportingList = ', memberReportingList);
  console.log(' reportedTimesArray = ', reportedTimesArray);
  console.log(' reportedMembersArray = ', reportedMembersArray );
  
  for (let i = 0; i < reportedTimesArray.length; i++) {
    if (reportedTimesArray[i].times >= k) {
      stopMember.push(reportedTimesArray[i].name)
    }
  }
  console.log('stopMember = ', stopMember);

  //여기까지 한 것 : 신고를 k번 이상 당해서 정지된 사람들을 한 배열에 담았음.
  //다음으로 해야할 것 : 자신이 신고한 사람중에 정지가 된 사람들의 개수를 리턴 할거야..
  memberReportingList.forEach((reporting) => {
    if (stopMember.includes(reporting.reportedMember)) {
      totalResult.push(reporting.member)
      
    }
  })
  id_list.forEach((member) => {
    result.push(totalResult.filter(n => n === member).length)
  
  })
  console.log('totalResult = ', totalResult);
  console.log('result = ', result);
  console.log('aaa = ', );

  //muzi가 신고한 사람들이 stopMember에 있는지, 있으면 몇명있는지를 알아야 하고 그걸 리턴할거임.
  
  let answer = [];
  return answer;
}

// console.log('solution = ', solution(["muzi", "frodo", "apeach", "neo"],["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],2));
console.log('solution = ', solution(["con", "ryan"],["ryan con", "ryan con", "ryan con", "ryan con"],3));