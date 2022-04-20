// 사용자에게 행과 열을 선택하라고 요청하고, 096번 프로그램의 2차원 배열을 이용하여 해당 값을 출력하라.
import { question } from 'readline-sync';

const array = [
  [2, 5, 8],
  [3, 7, 4],
  [1, 6, 9],
  [4, 2, 0],
];
console.log(array);
const usernum1 = Number(question('0과 3사이의 정수를 입력해주세요.'));
const usernum2 = Number(question('0과 2사이의 정수를 입력해주세요.'));
console.log(array[usernum1][usernum2]);
