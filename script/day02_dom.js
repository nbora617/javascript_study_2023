// dom == document object mode1
//자바스크립트 = 객체지향언어
//bom = browser object mode1 웹브라우저의 기본 객체
// let hello = 'hello js';
// window.alert(hello);   //팝업창
// window.prompt('이건 뭘까?')
// let qa = window.prompt('1+1?');
// window.alert('정답은 '+qa+'입니다.');
// let ox = window.confirm('자바스크립트는 객체지향언어다.');   
//확인=true(참), 취소=false(거짓)
// window.alert(ox);

//객체.속성
//객체.메서드()
//객체.속성.메서드()

//아이디 객체 변수 대입하기
//변수선언키워드 변수명 대입연산자 대입객체문법
const btn1 = document.getElementById('btn1');
console.log(btn1);
btn1.style.color = 'red';
const loginBtn = document.getElementById('login');
console.log(loginBtn);
const payBtn = document.getElementById('pay');
console.log(payBtn);

//클래스 객체 변수 생성
const li_first = document.getElementsByClassName('first');
const li_second = document.getElementsByClassName('second')
const li_last = document.getElementsByClassName('last')[0];
console.log(li_first, li_second, li_last);
console.log(li_first[0]);    //동일한 클래스명 중 특정 태그만 단독 선택

//태그 변수생성
const header = document.getElementsByTagName('header')
const h1 = document.getElementsByTagName('h1')
const nav = document.getElementsByTagName('nav')
const aTag =document.getElementsByTagName('a')
console.log(header, h1, nav, aTag);
console.log(aTag[0]);

//innerHTML 속성 활용
//객체.속성 //읽기
//객체.속성 = 대입값 //수정or삭제
console.log(header.innerHTML) //undefined 
console.log(header[0].innerHTML); //자식, 자손 읽기
console.log(h1[0].innerHTML)
console.log(btn1.innerHTML);
console.log(li_last.innerHTML);

h1[0].innerHTML = '로고';
aTag[2].innerHTML = '' //빈문자열 == 문자열을 비운다(삭제)
loginBtn.innerHTML = 'Login';

nav[0].style.backgroundColor = 'aqua'
nav[0].style.border = '2px solid black'
btn1.style.borderRadius = '50%'

