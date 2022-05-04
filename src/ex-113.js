// Books.csv 파일을 사용하며, 리스트에 몇 개의 레코드를 추가하고 싶은지 묻고 입력한 만큼 추가할 수 있도록 한다.
// 모든 데이터가 추가된 후에 사용자에게 검색할 저자의 이름을 입력하라고 요청하고, 입력된 저자의 모든 책 정보를 출력한다.
// 만약 입력한 저자의 책이 하나도 없다면 그에 맞는 메시지를 출력하라.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
import fs from 'node:fs';
import { question } from 'readline-sync';

const usernum = Number(question('리스트에 몇 개의 레코드를 추가하시겠습니까?'));
let data = '';
for (let i = 0; i < usernum; i++) {
  const title = question('제목을 입력해주세요.');
  const author = question('작가을 입력해주세요.');
  const pdate = Number(question('발행년을 입력해주세요.'));
  data += `\n${title}, ${author}, ${pdate}`;
}

fs.appendFileSync('./src/ex-111.csv', data, 'utf8');
console.log('동기적 파일 쓰기 완료');

const searchdata = [];
const userauthor = question('검색할 저자의 이름을 입력해주세요.?');
const array = fs
  .readFileSync('./src/ex-111.csv', 'utf8')
  .toString()
  .split('\n');

for (const value of array) {
  const detail = value.toString().split(',');
  // Console.log(detail[2].trim().toLowerCase());
  // console.log(userauthor.trim().toLowerCase());

  if (userauthor.trim().toLowerCase() === detail[2].trim().toLowerCase()) {
    searchdata.push(value);
    // Console.log(value);
  }
}

if (searchdata.length === 0) {
  console.log('입력한 저자의 책이 하나도 없습니다.');
} else {
  for (const element of searchdata) console.log(element);
}
