//반복문
/* 
    for(반복문변수생성; 변수활용조건식; 변수증감식){
        반복문 변수 조건이 참일 때 반복실행문
    }반복문 변수 조건이 거짓일 떄 for 끝나는 위치
 */
//1~10까지 반복하는 반복문
//for 자주 이용하는 지역변수명 = i, j, m, n, k
for(let i=0; i<11; i++){
    console.log('hello js'+(i+1))
}
//0~5 반복문
for(let j=0; j<6; j++){
    console.log('반복문'+j)
}
//0~5 반복문
for(i=5; i>=0; i--){
    console.log('반복'+i)
}
//10~30 반복문 + 10~30중 홀수만
for(i=10; i<=30; i++){
    if(i%2===1){
        console.log(i)
    }
}
//DOM, 배열 사용하는 반복문
const study = ['html','css','javascript','figma','photoshop','illustrator']
// console.log(study[0])
// console.log(study[1])
// console.log(study[2])
//객체의 수 length속성  ==객체.length
for(let i=0; i<study.length; i++){
    console.log(study[i])
}  //length는 1부터 출력
//1. html+공부 2.css+공부...
for(let i=0; i<study.length; i++){
    console.log([i+1]+'. '+study[i]+' 공부')
    //console.log(`${i+1}. ${study[i]} 공부`)
}
//위 study 배열을 역순으로 출력하기
console.log('--------------------------------------')
for(let i=study.length-1; i>=0; i--){
    console.log(`${i+1}. ${study[i]} 공부`)
}

//반복문 연습
const coffee = new Array('아메리카노','카페라떼','녹차라떼')
//반복문 아용 coffee배열 모두 출력
for(i=0; i<coffee.length; i++){
    console.log(coffee[i])
}

