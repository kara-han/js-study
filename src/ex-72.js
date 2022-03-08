// 교과목 여섯 개가 담긴 배열을 생성하라.
// 이들 중 사용자가 좋아하지 않는 과목을 묻고 그 과목을 배열에서 삭제한 후에 배열을 다시 출력하라.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
import { question } from 'readline-sync';

let textbookchk = 'N'; // 교과목중 과목을 입력했는지 확인
let textbooknum = -1;
const textbook = ['math', 'music', 'science', 'english', 'arts', 'chinese'];
console.log(`교과목 : ${textbook}`); // 교과목 출력
while (textbookchk === 'N') {
  const usertextbook = question(`교과목 중 좋아하지 않는 과목을 입력해주세요.`);
  textbooknum = textbook.indexOf(usertextbook.toLowerCase());
  if (textbooknum > -1 && usertextbook !== '') {
    textbook.splice(textbooknum, 1); // 교과목중 과목 제거
    textbookchk = 'Y'; // 교과목중 과목 제거 Y
  }
}

console.log(textbook);
