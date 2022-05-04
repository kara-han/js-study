// Books.csv 파일을 사용하여 각 행 번호와 그에 대한 데이터를 출력하라.
import fs from 'node:fs';

const array = fs
  .readFileSync('./src/ex-111.csv', 'utf8')
  .toString()
  .split('\n');

for (const [key, value] of Object.entries(array)) {
  console.log(`${key}, ${value}`);
}
