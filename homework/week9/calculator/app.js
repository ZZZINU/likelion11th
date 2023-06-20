// 배경색 전환 함수
function changeBackgroundColor() {
  const body = document.querySelector("body");
  const colors = ["#AE9ED0", "#E87C87", "#D88CAD", "#9CB3FD"];
  var colorIndex = 0;

  setInterval( function () {
    body.style.transition = "background-color 1.5s ease-in-out"; // 배경색 전환 애니메이션
    body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  }, 2000);
}
/* 배경화면 효과 */
changeBackgroundColor();

/* 계산기 화면에 출력 */
function input(char) {
  var screen = document.querySelector('input[name="screen"]');
  screen.value = screen.value + char;
}

/* 계산기 화면 clear */
function clearInput() {
  var screen = document.querySelector('input[name="screen"]');
  screen.value = "";
}

/* 계산 */
function myCalculator() {
  // 1. 일단 연산자/피연산자 분리하기
  var screen = document.querySelector('input[name="screen"]');
  var value = screen.value;

  var operator = ["+", "-", "*", "/"]; // 연산자
  var operand = []; // 피연산자
  var temp = ""; // 임시 저장

  for (var i = 0; i < value.length; i++) {
    var char = value[i];
    if (operator.includes(char)) {
      if (temp !== "") {
        // 만약 지금 temp가 공백이 아님 -> 피연산자 들어있음
        operand.push(temp); // 피연산자 끝 -> push
        temp = ""; // temp 초기화
      }
      operand.push(char); // temp에 아무것도 없으면 그냥 push => 연산자
    } // 피연산자 => 몇 자리 수인지 모름
    else {
      temp += char;
    }
  }

  if (temp !== "") {
    operand.push(temp);
  }

  // 2. 후위식으로 변환

  // 우선순위 설정
  var priority = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };

  var postfix = [];
  var temp_operator = [];

  operand.forEach(function (token) {
    if (/[0-9]/.test(token)) {
      // 피연산자라면
      postfix.push(token); // postfix 배열에 push
    } else if (/[+\-*/]/.test(token)) {
      // 연산자라면
      while (
        temp_operator.length > 0 && // 연산자가 하나라도 들어있는지
        // 그리고 '바로 전 연산자의 우선순위' >= '현재 연산자의 우선순위'
        priority[temp_operator[temp_operator.length - 1]] >= priority[token]
      ) {
        postfix.push(temp_operator.pop()); //전 연산자 먼저 postfix에 push
      }
      temp_operator.push(token); // temp_operator에 아무것도 없으면 push
    }
  });

  // temp_operator 에 남은 연산자 다 postfix 배열에 push
  while (temp_operator.length > 0) {
    postfix.push(temp_operator.pop());
  }

  // 3. 후위식을 통해 연산하기
  var stack = [];

  postfix.forEach(function (token) {
    if (/[0-9]/.test(token)) {
      // 피연산자라면
      stack.push(parseFloat(token)); // 스택에 Float로 변환하여 push -> 소수점 반영
    } else if (/[+\-*/]/.test(token)) {
      // 연산자라면
      var operand2 = stack.pop(); // 먼저 pop 되는 게 나중 피연산자
      var operand1 = stack.pop();
      var result;

      switch (token) {
        case "+":
          result = operand1 + operand2;
          break;
        case "-":
          result = operand1 - operand2;
          break;
        case "*":
          result = operand1 * operand2;
          break;
        case "/":
          result = operand1 / operand2;
          break;
      }
      stack.push(result);
    }
  });

  clearInput(); // 계산기 screen 초기화하고
  screen.value = stack.pop(); // 결과값 출력
}
