let a = 10  //숫자데이터
let b = '10' //문자데이터
let total = a+b //숫자+문자=문자
console.log(`total >> ${total}`) 
console.log(`${typeof(a)}+${typeof(b)}=${typeof(a+b)}`)
console.log('---------------------------------------')
//명시적 형변환(문자>숫자, 숫지>문자), 개발자가 직접 데이터 형식 결정
console.log(`b=${typeof(b)}, b+1=${b+1}`)
//Number() == 형변황 메서드
//괄호 안에 작성한 데이터를 숫다 데이터로 변환한다.
//일회성의 불편함을 해소하기 위해 변황한 데이터를 다른 변수에 대입해서 일반적으로 사용
console.log(`b=${typeof(Number(b))}`)
let c = Number(b)
console.log(`c=${typeof(c)}, c=${c} a+c=${a+c}`)
console.log('-----------------------------------')
// const d = Number(window.prompt('1+1=?'))
// console.log(`d=${d}, ${typeof(d)}`)
// const userInput = document.querySelector('#user');
// const resultBtn = document.querySelector('#result')
// console.log(userInput,resultBtn) //DOM*2 출력
// //동작 이벤트 없이 Input의 값 확인은 초기값만 인식
// //input value 값은 숫자데이터로 입력해도 문자데이터로 자동 암시적 형변환이 된다.
// userInput.value=1234 //초기값 대입
// console.log(`userInput typeof=${typeof(userInput.value)}`)
// console.log(`userInput value =${userInput.value}`)
// let userInputNumber =  Number(userInput.value) //숫자로 형변환한 userInput값
// console.log(`userInputNumber typeof=${typeof(userInputNumber)}`)
// console.log(`userInputNumber value =${userInputNumber}`)

// resultBtn.addEventListener('click',function(){
//     userInputNumber =  Number(userInput.value)
//     console.log(`userInputNumber typeof=${typeof(userInputNumber)}`)
//     console.log(`userInputNumber value =${userInputNumber}`)
//     //버튼 클릭 시 input값에 +1결과 콘솔 출력하기
//     console.log(`${userInputNumber+1}`)
// })
const dan2 = document.querySelector('#dan2')
const calc = document.querySelector('#calc')
const result =document.querySelector('#result')
const resultBtn =document.querySelector('#resultBtn')
console.log(dan2, calc, result, resultBtn)
//연산자 좌우 피연사나가 문자데이터일 경우
//더하기연산자(+) >> 문자+문자=문자로 연결결과로 보여준다
//나머지연산자(-,*/,%) >> 문자를 암시적변환으로 자동으로 숫자데이터를 변경해서 문자*문자=숫자 결과로 보여준다
resultBtn.addEventListener('click',function(){
    let first = Number(dan2.value)
    let last= Number(calc.value)
    console.log(first, last, first*last)
    result.value = first*last
})




