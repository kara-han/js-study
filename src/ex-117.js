// 사용자의 이름을 묻는다.
// 두 개의 수(1부터 100까지)를 입력 받아 두 수를 더하는 퀴즈를 만들어 출력하고 답을 입력받는다.
// 총 2개의 문제를 입력받고, 답을 맞추면 점수를 +1 한다.
// 사용자의 이름과 질문, 답변 그리고 최종 점수를 csv 파일에 저장한다. 프로그램이 실행될 때마다 csv 파일에 추가되며 덮어쓰지 않는다.
import fs from 'node:fs';
import { question } from 'readline-sync';

const username = question('사용자의 이름을 입력해주세요.');
let userscore = 0;
let data = `${username}`;
for (let i = 0; i < 2; i++) {
  const usernumber1 = Number(question('1부터 100까지의 숫자를 입력해주세요.'));
  const usernumber2 = Number(question('1부터 100까지의 숫자를 입력해주세요.'));
  const comhap = usernumber1 + usernumber2;
  const userhap = Number(question(`${usernumber1} + ${usernumber2} = `));
  if (comhap === userhap) {
    userscore += 1;
  }

  data += `, ${usernumber1} + ${usernumber2} = ${userhap}`;
}

data += `, ${userscore}\n`;

fs.appendFileSync('./src/ex-117.csv', data, 'utf8');
console.log('동기적 파일 쓰기 완료');
