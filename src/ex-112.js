// 111번 프로그램에서 만든 Books.csv 파일을 사용한다.
// 사용자에게 다른 레코드를 입력하도록 요청하고 입력된 데이터를 파일의 끝에 추가한다.
// csv 파일의 각 행을 한 줄에 하나씩 출력하라.
import fs from 'node:fs';
import { question } from 'readline-sync';

const title = question('제목을 입력해주세요.');
const author = question('작가을 입력해주세요.');
const pdate = question('발행년을 입력해주세요.');
const data = `\n${title}, ${author}, ${pdate}`;

fs.appendFile('./src/ex-111.csv', data, 'utf8', function (error) {
  if (error) {
    console.log('파일내용 추가 에러 입니다.');
  } else {
    const array = fs.readFileSync('./src/ex-111.csv').toString().split('\n');
    for (const [key, value] of Object.entries(array)) {
      console.log(`${key} : ${value}`);
    }
  }
});
