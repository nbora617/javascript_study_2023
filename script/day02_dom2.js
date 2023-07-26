//getElement.. 방법
const mainTag = document.getElementsByTagName('main')[0];
const hTag = document.getElementsByTagName('h1');
const contentsCls = document.getElementsByClassName('contents')
const boxId = document.getElementById('box')
const aTag =document.getElementsByTagName('a')
const aCls1 = document.getElementsByClassName('first')
const aCls2 = document.getElementsByClassName('last');
console.log(mainTag, hTag[0], contentsCls[0], boxId);
console.log(aTag, aTag[0], aTag[1], aTag[2])
console.log(aCls1[0], aCls2[0]);
//[ES6]querySelector.. 방법
const mainTagQ = document.querySelector('main');
const hTagQ = document.querySelector('h1');
const contentsClsQ =document.querySelector('.contents')
const boxIdQ = document.querySelector('#box')
const aTagQ = document.querySelectorAll('a');
const aCls1Q = document.querySelector('.first');
const aCls2Q = document.querySelector('.last');
console.log(mainTagQ, hTagQ, contentsClsQ, boxId);
console.log(aTagQ, aTagQ[0], aTagQ[1], aTagQ[2]);   //a태그 중 첫번째 태그만을 선택
console.log(aCls1Q, aCls2Q);