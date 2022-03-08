// 076번 프로그램을 수정하여 초대할 사람들의 이름이 배열에 모두 추가되면 전체 명단을 출력하고
// 배열에 있는 이름들 중 하나를 입력하라고 요청한다.
// 입력된 이름의 위치(인덱스)를 출력하고 그 사람을 정말로 파티에 초대할 것인지를 묻는다.
// 만약 "n"이라고 답하면 그 항목을 배열서 삭제하고 배열을 다시 출력한다.
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
    break;
  }

  partynum = partyist.indexOf(username2.toLowerCase());
  // 입력한 값이 있고 동일한 값이 없으면 저장
  if (partynum === -1 && username2 !== '') {
    partyist.push(username2.toLowerCase()); // 목록에 저장
  }
}

console.log(`${partyist}`);

partychk = 'y';
while (partychk === 'y') {
  const username3 = question('배열에 있는 이름들 중 하나를 입력해 주세요.');
  partynum = partyist.indexOf(username3.toLowerCase());
  // 입력한 값이 있으면 제거
  if (partynum > -1 && username3 !== '') {
    const partychk2 = question(
      `인덱스번호 ${partynum} | ${username3} 정말로 파티에 초대하시겠습니가? (y or n)`
    );
    if (partychk2.toLowerCase() === 'n') {
      partyist.splice(partynum, 1); // 배열에서 삭제
      console.log(`${partyist}`); // 배열 출력
    }

    partychk = 'N'; // 배열에 있는 이름을 중 하나를 입력했을경우 그만
  }
}
