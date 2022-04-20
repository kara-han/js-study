// ‘Names.txt’라는 이름의 새로운 파일을 생성한다. 다섯 명의 이름을 한 줄에 하나씩 문서에 추가한다.
// 프로그램을 실행한 후에 이 프로그램이 저장된 위치에 해당 파일이 제대로 생성되었는지 확인하라.
import fs from 'node:fs';

let data = 'kara\n';
data += 'han\n';
data += 'kim\n';
data += 'yun\n';
data += 'jung';

fs.writeFile('./src/ex-106-1.txt', data, 'utf8', function (error) {
  if (error) {
    console.log('에러');
  } else {
    console.log('비동기적 파일 쓰기 완료');
  }
});

fs.writeFileSync('./src/ex-106-2.txt', data, 'utf8');
console.log('동기적 파일 쓰기 완료');
