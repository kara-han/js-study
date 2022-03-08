// 사용자에게 파티에 초대할 사람 3명의 이름을 입력하라고 요청하고 배열에 저장한다.
// 모든 이름이 입력되면 추가할 사람이 있는지 묻는다.
// 만약 그렇다면 "n"이라고 답할 때까지 이름을 추가하게 한다.
// "n"이라고 입력하면 파티에 초대한 사람이 몇 명인지 표시하라.
import { question } from 'readline-sync';

let partychk = 'y';
let partynum = -1; // 목록에 있는지 체크(0이상)
const partyist = [];
let chki = 0; // 파티에 초대할 사람 3명 체크
while (chki < 3) {
  const username = question('파티에 초대할 사람을 입력해주세요.');
  partynum = partyist.indexOf(username.toLowerCase());
  // 입력한 값이 있고 동일한 값이 없으면 저장
  if (partynum === -1 && username !== '') {
    partyist.push(username.toLowerCase()); // 목록에 저장
    chki += 1;
  }
}

// 추가할 사람이 있는지 묻는다.
while (partychk === 'y') {
  const username2 = question('파티에 추가할 사람이 있나요?');
  if (username2 === 'n') {
    partychk = 'n';
  } else {
    partynum = partyist.indexOf(username2.toLowerCase());
    // 입력한 값이 있고 동일한 값이 없으면 저장
    if (partynum === -1 && username2 !== '') {
      partyist.push(username2.toLowerCase()); // 목록에 저장
    }
  }
}

console.log(`${partyist}`);
console.log(`파티에 초대한 사람은 ${partyist.length} 명입니다.`);

/* 
Const partyist = [];
for (let i = 0; i < 3; i++) {
  const username = question('파티에 초대할 사람을 입력해주세요.');
  partyist.push(username.toLowerCase()); // 목록에 저장
}

let partychk = 'y';
while (partychk === 'y') {
  const username2 = question('파티에 추가할 사람이 있나요?');
  if (username2 === 'n') {
    partychk = 'n';
  } else {
    partyist.push(username2.toLowerCase()); // 목록에 저장
  }
}

console.log(`${partyist}`);
console.log(`파티에 초대한 사람은 ${partyist.length} 명입니다.`);
 */
