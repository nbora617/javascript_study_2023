// day02.js
let a = 10;
let b =1;
let c = 0;
console.log(a); //10
a = 20;
b = 2;
b = 3;
a = a+b; //20+3
// b = 6;
c = a+b+c //23+3+0
b = a+b+c; //23+26+3
console.log(a, b, c); //23,52,26
//------------------------------------
const birth = 12
let age = 20;
let name = '홍길동';
let address = '인천시 부평구'
let bloodType = 'A형'

console.log('이름:'+ name);
console.log('나이:'+age+'살');
console.log('생일:'+birth+'월');
console.log('주소:'+address);
console.log('혈액형:'+bloodType);
// birth =21 //상수값 변경 에러
//문제1. 다음 회원의 정보를 변수로 처리하시오
//이름: 홍길동
//나이: 20
//생일: 12월
//주소: 인천시 부평구
//혈액형: A형
//위 값을 모두 변수로 개별대입 후 콘솔 출력하기