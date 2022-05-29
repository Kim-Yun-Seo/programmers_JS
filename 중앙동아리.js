'use strict'
//중앙동아리 문제 = return은 숫자(중앙동아리 개수)
//1. 중앙동아리의 조건 부합 여부를 확인하기 위해 데이터가 있어야함.
//1-1. 1을 찾기 위해 동아리이름으로 묶인 obj가 있어야함.
//1-2. 1-1에는 겹치는 애들(예: 19학번)이 없어야함
//1-3. 학번으로 묶인 obj가 있어야 1-1을 확인 할 수 있음.
//2. 중앙동아리 조건 부합 여부를 확인해야함.
//2-1. 1-1로 만든 데이터로 알 수 있음. (배열의 length를 이용)
//2-2. 숫자값을 올리면서 return.

function solution(test) {
  const students = test.numbers;
  const n = test.n;
  const m = test.m;
  const k = test.k;
  let result = 0;
  const clubObj = {}
  const memberObj = {}

  students.forEach((student) => {
    const id = student.split(' ')[0]
    const department = student.split(' ')[1]
    const club = student.split(' ')[2]

    if (!memberObj.hasOwnProperty(id)) {
      memberObj[id] = {
        club: [],
        department: [],
        frontId: []
      }
    }
    memberObj[id].club.push(club);
    memberObj[id].department.push(department); 
    memberObj[id].frontId.push(id.substr(0,2)); 
  })
  Object.keys(memberObj).forEach((id, index) => {
    if (memberObj[id].club.length < 2) {
      const department = memberObj[id].department.join('');
      const club = memberObj[id].club.join(''); 

      if (!clubObj.hasOwnProperty(club)) {
        clubObj[club] = {
          id: [],
          frontId: [],
          department: [],
        }
      }
      clubObj[club].id.push(id);
      if (!clubObj[club].department.includes(department)) {
        clubObj[club].department.push(department); 
      }
      if (!clubObj[club].frontId.includes(id.substr(0,2))) {
        clubObj[club].frontId.push(id.substr(0,2)); 
      }
    }
  });

  Object.keys(clubObj).forEach((club) => {
    if ((clubObj[club].id.length >= n) && (clubObj[club].frontId.length >= m) && (clubObj[club].department.length >= k)) {
      result++
    }
  });

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
