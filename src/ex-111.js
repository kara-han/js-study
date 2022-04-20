// 다음의 데이터를 저장할 csv 파일을 생성하고 그 이름을 'Books.csv' 라고 하라.
import fs from 'node:fs';

let data = 'To Kill A Mockingbird, Harper Lee, 1960\n';
data += 'A Brief History of Time, Stephen Hawking, 1988\n';
data += 'The Great Gatsby, F. Scott Fitzgerald, 1922\n';
data += 'The Man Who Mistook His Wife for a Hat, Oliver Sacks, 1985\n';
data += 'Pride and Prejudice, Jane Austen, 1813';

fs.writeFile('./src/ex-111.csv', data, 'utf8', function (error) {
  if (error) {
    console.log('에러');
  } else {
    console.log('비동기적 파일 쓰기 완료');
  }
});
