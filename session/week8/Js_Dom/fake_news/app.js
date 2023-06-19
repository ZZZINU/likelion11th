const fakeDiv = document.querySelector(".third");
const fakeTitle = document.querySelector(".third_title");
const fakeBody = document.querySelector(".third_body");
const btn = document.querySelector("#btn");
const complete = document.getElementById('complete');
//const complete = document.querySelector('.complete');

console.log(btn)
btn.addEventListener("click", () => {
    fakeDiv.style.backgroundColor = 'orange';
    fakeTitle.textContent = "[심층보도] 슬기요미 사실 안귀여워";
    fakeBody.textContent = "아기사자들이 보는 눈이 정확하다고 밝혀져";
    complete.textContent = "수정완료.";
});



