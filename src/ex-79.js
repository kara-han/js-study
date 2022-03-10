// 'nums'라는 이름의 빈 배열을 생성한다.
// 사용자에게 숫자를 입력하라고 요청한다.
// 숫자가 입력되면 그것을 nums 배열 끝에 추가하고 배열을 출력한다.
// 세 개의 숫자를 입력받으면 마지막 숫자를 저장할 것인지 묻는다.
// 만약 "n"이라고 답하면 배열의 마지막 항목을 삭제하고 배열을 출력하라.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
import { question } from 'readline-sync';

const nums = []; // 빈 배열 생성
let numchk = 'y';
while (numchk === 'y') {
  const usernum = question('숫자를 입력해주세요.');
  // Console.log(usernum);
  // console.log(Number.isNaN(Number(usernum)));
  // console.log(Number.isNaN(37));
  if (usernum !== '' && Number.isNaN(Number(usernum)) === false) {
    nums.push(Number(usernum)); // Nums 배열 끝에 추가
    console.log(nums); // 배열을 출력
    if (nums.length >= 3) {
      numchk = question('마지막 숫자를 저장할 것인지(y or n)?');
      if (numchk.toLowerCase() === 'n') {
        nums.pop(); // 배열 마지막 삭제 nums.splice(-1, 1);
        console.log(nums); // 배열을 출력
      }
    }
  }
}
