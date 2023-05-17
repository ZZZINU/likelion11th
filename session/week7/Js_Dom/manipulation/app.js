/* 0. 선택자
    01.getElementByTageName
    02.getElementsById 
    03.getElementsByClassName
    04.querySelector
    05.querySelectorAll
*/


// 1. 속성 변경
// .setAttribute()과 같은 함수 활용



// 2. 내용 접근
// textContent : 선택한 요소에서 HTML 요소를 제거한 순수한 텍스트 데이터의 값
// innerText : textContent와 비슷하지만 CSS에 종속적이라서 hidden시에 못 읽음
// innerHTML : 선택한 요소의 HTML 태그를 그대로 제공 (보안에 취약)
document.querySelector("#div_id").textContent = "멋쟁이 사자처럼 10기";
document.querySelector(".info__position").textContent = "Backend-End";
console.log(document.querySelector("#div_id").style)




// 3. 스타일 변경
// 3-1. .setAttribute() 활용
// 3-2. style객체 접근
// 3-3. 클래스 조작
// className : 클래스 이름  / classList : 클래스 이름들
// classList.add(a) : 클래스 추가
// classList.remove(a) : 클래스 삭제
// classList.replace(a, b) : 클래스 이름 a에서 b로 수정
// classList.toggle(a) : 클래스a를 추가했다가 제거했다가 (toggle)
// add와 remove를 동시에 사용할 때 사용





// 4. element 생성 및 추가
// 4-1. element 생성
const p1 = document.createElement('p');
const p2 = document.createElement('p');


// 4-2. element에 컨텐츠를 대입
p1.textContent = "이영서";
p2.textContent = "기획/디자인";


// 4-3. element 추가할 부모 요소
const parent = document.getElementById("parent");


// 4-4. element를 부모 요소의 자식 요소로 추가 
// 4-4. 이미 다른 element가 존재할 경우 마지막 자식 요소로 추가됨
parent.appendChild(p1);
parent.appendChild(p2);
