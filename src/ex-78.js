// 네 개의 TV 프로그램 타이틀을 담은 배열을 생성하고 각 항목을 한 줄씩 출력한다.
// 사용자에게 다른 프로그램을 입력하도록 요청하고 배열에서의 원하는 위치를 묻는다.
// 입력한 프로그램 타이틀을 원하는 위치에 삽입하고 다섯 개 의 TV 프로그램 모두를 다시 출력한다.
import { question } from 'readline-sync';

const comtv = ['run', 'sun', 'ceo', 'sat'];
for (const i of comtv) {
  console.log(i);
}

let tvchk = 'y';
while (tvchk === 'y') {
  const usertv = question('다른 프로그램을 입력해주세요.');
  const numchk = comtv.indexOf(usertv); // 기존 프로그램인지 체크
  if (numchk === -1 && usertv !== '') {
    let usertvnum = -1;
    while (!(usertvnum >= 0 && usertvnum <= 4)) {
      usertvnum = Number(question('배열에서 원하는 위치(0~4)를 입력해주세요.'));
      if (usertvnum >= 0 && usertvnum <= 4) {
        comtv.splice(usertvnum, 0, usertv);
        tvchk = 'n';
      }
    }
  }
}

console.log(comtv);
