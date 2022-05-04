// 소수점 이하 두 자리가 있는 10과 100 사이의 숫자 다섯 개를 포함하는 배열을 생성한다.
// 사용자에게 2와 5 사이의 정수를 입력하도록 요청한다.
// 입력한 숫자가 범위에 없는 숫자라면 적절한 에러 메시지를 출력하고 다시 입력 하라고 한다.
// 배열에 있는 각 숫자를 사용자가 입력한 숫자로 나누고 소수점 둘째자리까지 표시하라.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed 반올림됨. 확인
// Math.ceil() : 소수점 올림, 정수형 반환
// Math.floor() : 소수점 버림, 정수형 반환
// Math.round() : 소수점 반올림, 정수형 반환
import { question } from 'readline-sync';

const comnum = [11.34, 35.34, 52.12, 71.67, 93.23];
console.log(comnum);

let whilechk = true; // While문 체크
while (whilechk) {
  const usernum = Number(question('2와 5사이의 정수를 입력해주세요.'));
  if (usernum >= 2 && usernum <= 5) {
    whilechk = false;
    for (const element of comnum) {
      const numnu = element / usernum;
      console.log(Math.floor(numnu * 100) / 100);
    }
  } else {
    console.log(`2와 5사이의 정수가 아닙니다.`);
  }
}
