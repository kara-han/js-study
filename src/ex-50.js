// 사용자에게 10과 20 사이의 숫자를 입력하라고 요청한다. 입력한 숫자가 10 이하이면
// "Too low"라는 메시지를 출력하고 다시 입력하라고 요청한다.
// 만약 20 이상이면 "Too high" 라는 메시지를 출력하고 다시 입력하라고 요청한다.
// 사용자가 10과 20 사이의 값을 입력할 때까지 이 과정을 반복하고, 10과 20 사이의 값을 입력하면
// "Thank you" 라는 메시지를 출력하라.
import { question } from 'readline-sync';

let usernum = Number(question('10과 20 사이의 숫자를 입력해주세요.')); // 사용자에게 10과 20 사이의 숫자를 입력하라고 요청
// 사용자가 10과 20 사이의 값을 입력할 때까지 이 과정을 반복
while (usernum <= 10 || usernum >= 20) {
  if (usernum <= 10) {
    console.log('Too low'); // 숫자가 10 이하이면 "Too low"라는 메시지를 출력
  } else {
    console.log('Too high'); // 숫자가 20 이상이면 "Too high" 라는 메시지를 출력
  }

  usernum = Number(question('10과 20 사이의 숫자를 다시 입력해주세요.')); // 숫자 다시 입력하라고 요청
}

console.log('Thank you');
