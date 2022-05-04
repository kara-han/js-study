// 이전 프로그램을 변경하여 어떤 행을 출력할지 사용자에게 묻는다. 입력받은 행을 출력한다.
// 열을 선택하라고 요청하고 그 행에서의 해당 열을 출력한다.
// 그 값을 변경하고 싶은지 사용자에게 묻고, 그러길 원한다면 새로운 값을 입력받아 변경한다.
// 마지막으로 그 행 전체를 다시 출력하라.
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
const usernum2 = Number(question('0과 2사이의 정수를 입력해주세요.'));
console.log(array[usernum1][usernum2]); // 열 출력

const numchk = question('값을 변경하고 싶나요? (y or n)');
if (numchk.toLowerCase() === 'y') {
  const usernum3 = Number(question('숫자를 입력해주세요.'));
  array[usernum1][usernum2] = usernum3;
}

console.log(array[usernum1]);
