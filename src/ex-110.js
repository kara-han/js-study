// 앞에서 생성한 Names.txt 파일을 이용하여 목록의 이름들을 출력한다
// 그 이름들 중 하나를 입력하라고 요청하고, 그 이름을 제외한 나머지 이름들을 Names2.txt라는 새로운 파일에 저장하라.
// 프로그램을 여러 번 실행하여 옵션들을 테스트하라.
import fs from 'node:fs';
import { question } from 'readline-sync';

const array = fs.readFileSync('./src/ex-106-2.txt').toString().split('\n');
console.log(array);

const username = question('목록의 이름중 하나를 입력해주세요.');
let newarray = '';
for (const [key, value] of Object.entries(array)) {
  // Console.log(`${key} : ${value}`);
  if (value !== username) {
    newarray += Number(key) === 0 ? `${value}` : `\n${value}`;
  }
}

fs.writeFile('./src/ex-110.txt', newarray, 'utf8', function (error) {
  if (error) {
    console.log('파일 쓰기 에러 입니다.');
  } else {
    console.log('비동기적 파일 쓰기 완료');
  }
});
