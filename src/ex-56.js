// 1과 10 사이의 정수를 임의로 선택한다. 사용자에게 숫자를 입력하라고 요청하고
// 임의로 선택한 숫자를 입력할 때까지 계속 숫자를 입력하게 하라.
import { question } from 'readline-sync';

let checknum = 'N';
const randomnum = Math.floor(Math.random() * 10) + 1; // 1~10 랜덤 숫자
// console.log(randomnum);
while (checknum === 'N') {
  const usernum = Number(question('1~ 10 사이의 임의의 숫자를 선택해주세요.'));
  checknum = randomnum === usernum ? 'Y' : 'N'; // 유저랑 같은 숫자를 선택했을경우 'Y' 아닐경우 'N'
}
