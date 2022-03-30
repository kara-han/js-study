// 사용자에게 대문자로 메시지를 입력하라고 요청한다.
// 만약 메시지 에 소문자가 있다면 모두 대문자로 입력할 때까지 계속해서 다시 입력하라고 요청한다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
import { question } from 'readline-sync';

let whilechk = true; // While문 체크
const eng = /^[A-Z]*$/; // 정규식으로 대문자만 체크
while (whilechk) {
  let forchk = true; // For문 체크
  const message = question('대문자로 메시지를 입력해주세요.');
  if (message !== '') {
    for (let i = 0; i < message.length; i++) {
      if (
        message.charAt(i) === message.charAt(i).toUpperCase() &&
        eng.test(message.charAt(i))
      ) {
        // 영문(대문자) OK!
      } else {
        forchk = false;
      }
    }

    if (forchk === true) {
      console.log(`대문자 메시지 ${message} 완료`);
      whilechk = false;
    }
  }
}
