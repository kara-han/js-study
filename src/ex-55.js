// 1과 5 사이의 숫자를 임의로 선택한다. 사용자에게 숫자를 선택하라고 요청한다.
// 입력한 값이 맞으면 "Well done" 메시지를 출력하고, 그렇지 않으면 선택한 숫자가 너무 높은지
// 아니면 너무 낮은지를 알려주고 다시 숫자를 입력하라고 한다.
// 다시 입력한 숫자가 맞으면 "Correct"라고 출력하고, 그렇지 않다면 "You lose"라고 출력하라.
import { question } from 'readline-sync';

const randomnum = Math.floor(Math.random() * 5) + 1; // 1~5 랜덤 숫자
const usernum = Number(question('1 ~ 5 숫자를 입력해주세요.'));
// 입력한 값이 같을 경우
if (randomnum === usernum) {
  console.log('Well done');
} else {
  // 입력한 값이 같지 않을 경우
  if (randomnum > usernum) {
    console.log('입력한 숫자가 너무 낮습니다.');
  } else {
    console.log('입력한 숫자가 너무 높습니다.');
  }

  const usernum2 = Number(question('숫자를 다시 선택해주세요.')); // 다시 숫자 입력 요청
  if (randomnum === usernum2) {
    console.log('Correct');
  } else {
    console.log('You lose');
  }
}
