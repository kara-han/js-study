// Books.csv 파일을 사용하며, 사용자에게 시작 년도와 끝 년도를 입력하라고 요청한다. 입력된 두 년도 사이에 출간된 모든 책을 출력하라.
import fs from 'node:fs';
import { question } from 'readline-sync';

const startyear = Number(question('시작 년도를 입력해주세요.'));
const endyear = Number(question('끝 년도를 입력해주세요.'));

const searchdata = [];
const array = fs
  .readFileSync('./src/ex-111.csv', 'utf8')
  .toString()
  .split('\n');

for (const value of array) {
  const detail = value.toString().split(',');
  // Console.log(detail[1]);
  // console.log(userauthor);

  if (detail[3].trim() >= startyear && detail[3].trim() <= endyear) {
    searchdata.push(value);
    // Console.log(value);
  }
}

if (searchdata.length === 0) {
  console.log('검색된 책이 하나도 없습니다.');
} else {
  for (const element of searchdata) console.log(element);
}
