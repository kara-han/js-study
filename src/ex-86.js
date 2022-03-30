// 사용자에게 새로운 비밀번호를 입력하라고 요청하고, 한 번 더 입력하라고 요청한다.
// 입력한 두 개의 비밀번호가 일치하면 "Thank you'"라고 출력한다.
// 만약 입력한 문자는 서로 일치하는데 대소문자가 틀리다면 "They must be in the same case"라고 출력한다.
// 문자가 일치하지 않는다면 "Incorrect" 메시지를 출력하라.
import { question } from 'readline-sync';

const pwd1 = question('새로운 비밀번호를 입력해주세요.');
const pwd2 = question('한 번더 입력해주세요.');
if (pwd1 === pwd2) {
  console.log('Thank you');
} else if (pwd1.toLowerCase() === pwd2.toLowerCase()) {
  console.log('Tey must be in the same case');
} else {
  console.log('Incorrect');
}
