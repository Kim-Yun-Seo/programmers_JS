'use strict'

function solution(test) {
  const students = test.numbers;
  const n = test.n;
  const m = test.m;
  const k = test.k;
  let result = 0;
  //동아리 별로 사람들 쪼개고
  //obj 만들어야 되고 

  const clubObj = {
    // 동아리: {
    //   id: [],
    //   frontId: [],
    //   department: [],
    // }
  }
  const memberObj = {
    // 19000000: {
    //   동아리 : [AAA, BBB],
    // }
  }
  students.forEach((student, index) => {
    const id = student.split(' ')[0]
    const department = student.split(' ')[1]
    const club = student.split(' ')[2]

    if (memberObj.hasOwnProperty(id)) {

    } else {
      memberObj[id] = {
        club: [],
        department: [],
        frontId: []
      }
    }
    memberObj[id].club.push(club)
    memberObj[id].department.push(department); 
    memberObj[id].frontId.push(id.substr(0,2)); 
  })
  console.log(' memberObj = ', memberObj);
  
  
  Object.keys(memberObj).forEach((student, index) => {
    if (memberObj[student].club.length < 2) {
      const id = student//student.split(' ')[0]
      const department = memberObj[student].department.join('') //student.split(' ')[1]
      const club = memberObj[student].club.join('') //student.split(' ')[2]
      // console.log('club = ', club);
      //memberObj[student]
      // 동아리덩어리 만들기
      // 학번은 같지만 동아리는 다른 사람을 버리고 생각하기
      // 학번이 2번이상 나오면 제껴.
      // 처음부터 다 확인을 하고 시작해야함. ----
      // 확인해서 어디 저장해놓을까 -----
      //memberObj의 key의 club의 길이가 2 이상이면 아무것도 하지마. ---

      if (clubObj.hasOwnProperty(club)) {

      } else {
        clubObj[club] = {
          id: [],
          frontId: [],
          department: [],
        }
      }
      
      // 동아리 덩어리에 값 넣기
      //배열에서 겹치는애 찾아서 없으면 넣을거야.
      clubObj[club].id.push(id);
      if (!clubObj[club].department.includes(department)) {
        clubObj[club].department.push(department); 
      }
      if (!clubObj[club].frontId.includes(id.substr(0,2))) {
        clubObj[club].frontId.push(id.substr(0,2)); 
      }
    }
  });
  console.log(' clubObj = ', clubObj );

  Object.keys(clubObj).forEach((club, index) => {
    console.log('clubObj[club] = ', clubObj[club]);
    // clubObj[club].id.length > n
    // clubObj[club].frontId.length > m
    // clubObj[club].department.length > k

    if ((clubObj[club].id.length >= n) && (clubObj[club].frontId.length >= m) && (clubObj[club].department.length >= k)) {
      result++
      console.log('dkdfs = ', );
    }
  })
  
  return result;
}



const test1 = {
  numbers: [
    '13123820 BusinessManagement AAA',
    '15047648 Economics AAA',
    '17869244 ComputerScience AAA',
    '19000000 ElectronicEngineering AAA',
    '14281264 Law AAA',
    '19000000 ElectronicEngineering BBB',
    '16188768 BusinessManagement BBB',
    '14634411 Law BBB',
    '16628760 Economics BBB',
    '14863606 BusinessManagement CCC',
    '13165700 Law CCC',
    '15215218 ComputerScience CCC',
  ],
  n: 4,
  m: 3,
  k: 3,
};
console.log(' =====> ', solution(test1), '1');
