// ‘Names.txt’ 파일을 열고 읽어서 데이터를 표시하라.
import fs from 'node:fs';

// 비동기적 읽기
fs.readFile('./src/ex-106-1.txt', 'utf8', function (error, data) {
  if (error) {
    console.log('에러');
  } else {
    console.log(`비동기적 : ${data}`);
  }
});

// 동기적 읽기
const text = fs.readFileSync('./src/ex-106-2.txt', 'utf8');
console.log(`동기적 : ${text}`);
