// ‘Numbers.txt’라는 이름의 새로운 파일을 생성한다. 한 줄에 쉼표로 구분된 다섯 개의 숫자를 추가한다.
// 프로그램을 실행하고 나서 이 프로그램이 저장된 위치에 해당 파일이 생성되었는지 확인한다.
// 여러분이 윈도우 시스템을 사용하고 있다면 이 파일을 메모장에 불러와서 확인하는 게 가장 쉽게 확인하는 방법일 것이다.
// https://nodejs.dev/learn/the-nodejs-fs-module
// https://opentutorials.org/module/938/7373
// Sync가 붙은 것은 동기적 읽기, 붙지 않은 것은 비동기적 읽기입니다. 파일을 읽는데 시간이 오래 걸릴 수도 있습니다.
// 동기적 읽기로 읽게 되면 파일을 읽으면서 다른 작업을 동시에 할 수 없습니다.
// 하지만 비동기적으로 읽으면 파일을 읽으면서 다른 작업도 동시에 수행할 수 있고 파일을 다 읽으면 매개변수 callback으로 전달한 함수가 호출됩니다.
// [options]에는 보통 인코딩 방식이 오게 되며 웹에서는 utf8을 주로 사용합니다.
import fs from 'node:fs';

let data = '1, \n';
data += '2, \n';
data += '3, \n';
data += '4, \n';
data += '5, ';

fs.writeFile('./src/ex-105-1.txt', data, 'utf8', function (error) {
  if (error) {
    console.log('에러');
  } else {
    console.log('비동기적 파일 쓰기 완료');
  }
});

fs.writeFileSync('./src/ex-105-2.txt', data, 'utf8');
console.log('동기적 파일 쓰기 완료');
