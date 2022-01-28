import { question } from 'readline-sync';

const UserName = question('이름을 입력하세요.');
const UseFistName = question('성을 입력하세요.');

console.log(`Hello ${UserName} ${UseFistName}`);
