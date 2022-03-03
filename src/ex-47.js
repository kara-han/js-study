// 사용자에게 숫자를 입력하라고 요청한 다음에 다른 숫자를 입력하라고 하자.
// 두 숫자들을 더한 뒤, 또 다른 숫자를 더하고 싶은지 묻고 "y" 라고 입력하면
// 다른 숫자를 입력받아 더하고 다시 같은 질문을 한다.
// "y"가 아닌 답을 하면 루프를 종료하고 총합을 출력하라.
import { question } from 'readline-sync';

let askChk = 'y';
let total = 0;
const usernum1 = Number(question('숫자를 입력해주세요.')); // 사용자에게 숫자를 입력하라고 요청
total += usernum1; // 총합에 사용자 입력 숫자를 더한다.
while (askChk === 'y') {
  const usernum2 = Number(question('다른 숫자를 입력입력해주세요.')); // 다른 숫자를 입력
  total += usernum2; // 총합에 사용자 입력 숫자를 더한다.
  askChk = question('다른 숫자를 더하고 싶으면 y를 입력해주세요.'); // 다른 숫자를 더하고 싶은지 묻는다. y일경우 반복
}

console.log(`Total ${total}`);
