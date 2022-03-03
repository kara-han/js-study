// 056번 프로그램을 업데이트하여 사용자가 입력한 숫자가 큰지 작은지를 알려주고 다시 숫자를 고르게 하라.
import { question } from 'readline-sync';

let checknum = 'N';
const randomnum = Math.floor(Math.random() * 10) + 1; // 1~10 랜덤 숫자
// console.log(randomnum);
while (checknum === 'N') {
  const usernum = Number(question('1~ 10 사이의 임의의 숫자를 선택해주세요.'));
  checknum = randomnum === usernum ? 'Y' : 'N'; // 유저랑 같은 숫자를 선택했을경우 'Y' 아닐경우 'N'
  if (checknum === 'N') {
    if (randomnum > usernum) {
      console.log('사용자가 입력한 숫자가 작습니다.');
    } else {
      console.log('사용자가 입력한 숫자가 큽니다.');
    }
  }
}
