// ‘Names.txt’ 파일을 연다. 사용자에게 새로운 이름을 입력하라고 요청한다.
// 입력된 이름을 파일의 끝에 추가하고(파일에 저장) 전체 파일을 출력하라.
import fs from 'node:fs';
import { question } from 'readline-sync';

const name = question('이름을 입력해주세요.');
const data = `\n${name}`;

fs.appendFile('./src/ex-106-1.txt', data, 'utf8', function (error) {
  if (error) {
    console.log('에러');
  } else {
    console.log('비동기적 파일 쓰기 완료');
    // 동기적 읽기
    const text2 = fs.readFileSync('./src/ex-106-1.txt', 'utf8');
    console.log(`비동기적 : ${text2}`);
  }
});

fs.appendFileSync('./src/ex-106-2.txt', data, 'utf8');
console.log('동기적 파일 쓰기 완료');

// 동기적 읽기
const text = fs.readFileSync('./src/ex-106-2.txt', 'utf8');
console.log(`동기적 : ${text}`);
