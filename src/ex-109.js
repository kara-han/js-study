// 사용자에게 다음과 같이 메뉴를 표시하라
// Create a new file
// Display the file
// Add a new item to the file Make a selection 1, 2 or 3:
// 사용자에게 1, 2 또는 3을 입력하라고 요청한다. 다른 것을 입력한다면 에러 메시지를 출력한다.
// 만약 1을 선택하면 과목명을 입력하라고 요청하고, 그것을 ‘Subject.txt'라는 이름의 새로운 파일에 저장한다. 기존 파일이 있다면 새 파일로 덮어쓰게 된다
// 2를 선택하면 'Subject.txt' 파일의 내용을 출력한다
// 3을 선택하면 새로운 과목명을 입력하라고 요청하고, 그것을 파일에 저장한 후에 파일의 전체 내용을 출력 한다.
import fs from 'node:fs';
import { question } from 'readline-sync';

console.log(`1. Create a new file`);
console.log(`2. Display the file`);
console.log(`3. Add a new item to the file`);
const usernum = Number(question('Make a selection 1, 2 or 3.'));
switch (usernum) {
  case 1: {
    const usersubject = question('과목명을 입력해주세요.');
    fs.writeFile('./src/ex-109.txt', usersubject, 'utf8', function (error) {
      if (error) {
        console.log('파일 쓰기 에러 입니다.');
      } else {
        console.log('비동기적 파일 쓰기 완료');
      }
    });
    break;
  }

  case 2: {
    fs.readFile('./src/ex-109.txt', 'utf8', function (error, data) {
      if (error) {
        console.log('파일내용 읽기 에러 입니다.');
      } else {
        console.log(data);
      }
    });
    break;
  }

  case 3: {
    const usersubject = question('새로운 과목명을 입력해주세요.');
    const newsubject = `\n${usersubject}`;
    fs.appendFile('./src/ex-109.txt', newsubject, 'utf8', function (error) {
      if (error) {
        console.log('파일내용 추가 에러 입니다.');
      } else {
        const text = fs.readFileSync('./src/ex-109.txt', 'utf8');
        console.log(`${text}`);
      }
    });
    break;
  }

  default: {
    console.log(`에러입니다.`);
  }
}
