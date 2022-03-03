// 사용자에게 숫자를 입력하라고 요청한다.
// 입력한 값이 5를 넘을 때까지 숫자를 입력하라고 요청하며
// 5를 넘으면 "The last number you entered was a [숫자]"를 출력하고 프로그램을 종료하라.
import { question } from 'readline-sync';

let usernum = 0;
// 입력한 값이 5를 넘을 때까지 숫자를 입력하라고 요청 5를 넘으면 멈춤
while (usernum <= 5) {
  usernum = Number(question('숫자를 입력해주세요.')); // 사용자에게 숫자를 입력하라고 요청
}

console.log(`The last number you entered was a ${usernum}`);
