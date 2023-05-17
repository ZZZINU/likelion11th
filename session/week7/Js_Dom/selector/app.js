// getElementByTageName (-> h1)
const tagName = document.getElementsByTagName("h1");
console.log(tagName);


// getElementsById (-> div_id)
const byId = document.getElementById("div_id");
console.log(byId);


// getElementsByClassName (-> info)
const className = document.getElementsByClassName("info");
console.log(className);


// querySelector (-> h1, div_id, info__name)
const qsTag = document.querySelector("h1");
console.log(qsTag);

const qsId = document.querySelector("#div_id");
console.log(qsId);

const qsClass1 = document.querySelector(".info__name");
console.log(qsClass1);


// querySelectorAll
const qsClass2 = document.querySelector(".tweet__box");
console.log(qsClass2);

const qsAllClass = document.querySelectorAll(".tweet__box");
console.log(qsAllClass);



// window, document
console.log(window);
console.log(document);