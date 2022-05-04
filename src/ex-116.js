// Books.csv 파일의 데이터를 배열로 가져온다. 사용자에게 배열을 표시하고, 배열의 어떤 행을 삭제하고 싶은지를 선택하라고 요청하여 선택한 행을 삭제 한다.
// 또한, 수정하고 싶은 데이터를 선택하라고 요청하고 선택한 행을 수정한다.
// 데이터를 원래의 csv 파일에 다시 써서 기존 데이터를 수정된 데이터로 덮어쓴다.
import fs from 'node:fs';
import { question } from 'readline-sync';

const array = fs
  .readFileSync('./src/ex-111.csv', 'utf8')
  .toString()
  .split('\n');

for (const [key, value] of array) {
  console.log(`${key}, ${value}`);
}

const usernum = Number(question('삭제하고 싶은 행 번호를 쓰세요.'));
delete array[usernum];

const usernum2 = Number(question('수정하고 싶은 행 번호를 쓰세요.'));
const title = question('제목을 입력해주세요.');
const author = question('작가을 입력해주세요.');
const pdate = Number(question('발행년을 입력해주세요.'));
const data = `${title}, ${author}, ${pdate}`;
array[usernum2] = data;

let arraydata = '';
for (const [key, value] of Object.entries(array)) {
  console.log(`${key}, ${value}`);
  const down = Number(key) === 0 ? `` : `\n`;
  arraydata += `${down}${value}`;
}

console.log(`${arraydata}`);

fs.writeFileSync('./src/ex-111.csv', arraydata, 'utf8');
console.log('동기적 파일 쓰기 완료');
