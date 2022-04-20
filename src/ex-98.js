// 096번 프로그램의 2차원 배열을 이용하여 사용자에게 표시할 행을 요청하고 그 행을 출력한다.
// 새로운 값을 입력하라고 요청하고 그것을 표시한 행에 추가하고 그 행을 다시 출력하라.
import { question } from 'readline-sync';

const array = [
  [2, 5, 8],
  [3, 7, 4],
  [1, 6, 9],
  [4, 2, 0],
];
console.log(array);

const usernum1 = Number(question('0과 3사이의 정수를 입력해주세요.'));
console.log(array[usernum1]); // 행 출력

const usernum2 = Number(question('숫자를 입력해주세요.'));

array[usernum1].push(usernum2);
console.log(array[usernum1]);
