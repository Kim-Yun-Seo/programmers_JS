'use strict'

function solution(test) {
  const students = test.numbers;
  const n = test.n;
  const m = test.m;
  const k = test.k;
  const data = [{}];
  let clubMember = [];
  
  
  //동아리 별로 사람들 쪼개고
  //각각의 사람들을 오브젝트나 배열로 만들어야 하나.
  //동아리 인원수를 세야함(다른 동아리 들은 사람 빼고)
  const clubObj = {
    // aaa : {
    //   member: ['13123820'],
    //   department: ['BusinessManagement']
    // }
  }
  students.forEach((person, index) => {
    const memberArray = person.split(' ');
    const memberId = memberArray[0];
    const departmentName = memberArray[1];
    const clubId = memberArray[2];

    if (clubObj.hasOwnProperty(clubId)) {
      console.log(' = ', clubId, '는 있어');
    } else {
      clubObj[clubId] = {
        member: [],
        department: []
      }
    }
  
    clubObj[clubId].member.push(memberId);
    clubObj[clubId].department.push(departmentName);
  })
  console.log('clubObj = ', clubObj);

  students.forEach((person, index) => { // '13123820 BusinessManagement AAA', '15047648 Economics AAA',
    // console.log('person = ', person);
    if (person.split(' ')[2] === 'AAA') {
      data['AAA'] = {
        number : person.split(' ')[0] ,

        department : person.split(' ')[1],
      }
    } else if (person.split(' ')[2] === 'BBB') {
      data['BBB'] = {
        number : person.split(' ')[0],
        department : person.split(' ')[1],
      }
    } else {
      data['CCC'] = {
        number : person.split(' ')[0],
        department : person.split(' ')[1],
      }
    }
    
  });
  console.log('data = ', data);
  data.forEach((person, index) => {
    console.log('person = ', person);
    if (person['club'] === 'AAA') {
      clubMember.push(person)
    }
    // console.log('Object.values(person) = ', Object.values(person));
    Object.values(person).forEach((aa) => {
      // console.log('aa = ', aa );
      // console.log('person = ', person['number']);
      if (person['number'] === aa) {
        // console.log('true = ', );
      }
    }) 
  })
  // console.log('clubMember = ', clubMember);
  
  var answer = 0;
  return answer;
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
