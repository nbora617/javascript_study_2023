//1. 변수 생성
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const inputId = document.querySelector('#user_id')
console.log(btn3, btn4, btn5, inputId);
//2. 이벤트 작성
//btn3 클릭햇을 때 경고창 띄우기
//객체.이벤트리스너('이벤트종류',함수(){실행결과})
btn3.addEventListener('click',function(){
    window.alert('error')
})

btn4.addEventListener('mouseover',function(){
    this.style.backgroundColor = 'aqua'
})
//this 현재 이벤트 객체 대상 == btn4
btn5.addEventListener('click',function(){
    btn4.style.transform = 'skew(10deg)';
    btn3.style.transform = 'rotate(180deg)';
    btn3.innerHTML = 'button3';
})
inputId.addEventListener('focus',function(){
    this.style.backgroundColor = 'lime';
})
inputId.addEventListener('blur',function(){
    this.style.backgroundColor = 'grey';
})