// 다섯 개의 숫자들을 가진 배열을 출력한다.
// 숫자들 중 하나를 고르라고 사용자에게 요청한다.
// 사용자가 숫자를 고르면 그 항목의 위치(인덱스)를 출력한다.
// 만약 사용자가 입력한 숫자가 배열 안에 없다면 올바른 숫자를 입력할 때까지 다시 요청하라.
import { question } from 'readline-sync';

const comnum = [1, 3, 5, 7, 9];
console.log(comnum);

let whilechk = true; // While문 체크
while (whilechk) {
  const usernum = Number(question('배열의 숫자들 중 하나를 입력해주세요.'));
  const numchk = comnum.indexOf(usernum);
  if (numchk === -1) {
    console.log('배열의 숫자들중 하나가 아닙니다.');
  } else {
    whilechk = false;
    console.log(`${usernum} 의 인덱스번호는  ${numchk} 입니다.`);
  }
}
