'use strict'

function solution (test) {
  const id_list = test.id_list;
  const report = test.report;
  const k = test.k;
  const result = [];
  const memberData = {};

  id_list.forEach((member) => {
    memberData[member] = {
      reporting: [],
      reported: [],
      banCount: 0
    }
  });
  report.forEach((reportSet) => {
    const ing = reportSet.split(' ')[0];
    const ed = reportSet.split(' ')[1];
    if (!memberData[ing].reporting.includes(ed)) {
      memberData[ing].reporting.push(ed);
    }
    if (!memberData[ed].reported.includes(ing)) {
      memberData[ed].reported.push(ing);
    }
  });

  id_list.forEach((member) => {
    memberData[member].reporting.forEach((nowReported) => {
      if (memberData[nowReported].reported.length >= k) {
        memberData[member].banCount++;
      }
    })
    result.push(memberData[member].banCount);
  })

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

console.log('solution = ', solution(test1), '[2,1,1,0]');
console.log('solution = ', solution(test2), '[0,0]');
console.log('solution = ', solution(test3), '[0,1,2,1,2,0]');