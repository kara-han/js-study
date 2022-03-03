// Compnum이라는 이름의 변수를 생성하고 50을 설정한다.
// 사용자에게 숫자를 입력하라고 요청하고 입력한 값이 compnum과 동일하지 않다면 입력한 값이 높은지 낮은지를 알려주고
// 다시 맞춰보라고 묻는다. 만약 compnum의 값과 일치하면 "Well done, you took [카운트] attempts"라는 메시지를 출력하라.
import { question } from 'readline-sync';

const compnum = 50; // Compnum이라는 이름의 변수를 생성하고 50을 설정
let usernum = Number(question('숫자를 입력해주세요.')); // 사용자에게 숫자를 입력하라고 요청
let trycount = 1; // 카운트
// Compnum과 동일하지 않다면 반복
while (compnum !== usernum) {
  // Compnum과 동일하지 않다면 입력한 값이 높은지 낮은지를 알려준다.
  if (compnum > usernum) {
    console.log(`입력한값이 낮습니다.`);
  } else {
    console.log(`입력한값이 높습니다.`);
  }

  trycount += 1; // 총카운트
  usernum = Number(question('숫자를 다시 맞춰보세요.')); // 다시 맞춰보라고 묻는다
}

console.log(`Well done, you took ${trycount} attempts`);
