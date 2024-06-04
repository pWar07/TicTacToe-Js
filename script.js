document.getElementById("box11").addEventListener("click", fun1);
document.getElementById("box12").addEventListener("click", fun2);
document.getElementById("box13").addEventListener("click", fun3);
document.getElementById("box21").addEventListener("click", fun4);
document.getElementById("box22").addEventListener("click", fun5);
document.getElementById("box23").addEventListener("click", fun6);
document.getElementById("box31").addEventListener("click", fun7);
document.getElementById("box32").addEventListener("click", fun8);
document.getElementById("box33").addEventListener("click", fun9);

var x = 0;
var b1, b2, b3, b4, b5, b6, b7, b8, b9;

function fun1() {
  x++;
  if (x % 2 == 0) {
    document.getElementById("p1").innerHTML = "X";
    b1 = "X";
  } else {
    document.getElementById("p1").innerHTML = "O";
    b1 = "O";
  }
  winner();
  document.getElementById("box11").removeEventListener("click", fun1);
}
function fun2() {
  x++;
  if (x % 2 == 0) {
    document.getElementById("p2").innerHTML = "X";
    b2 = "X";
  } else {
    document.getElementById("p2").innerHTML = "O";
    b2 = "O";
  }
  winner();
  document.getElementById("box12").removeEventListener("click", fun2);
}
function fun3() {
  x++;
  if (x % 2 == 0) {
    document.getElementById("p3").innerHTML = "X";
    b3 = "X";
  } else {
    document.getElementById("p3").innerHTML = "O";
    b3 = "O";
  }
  winner();
  document.getElementById("box13").removeEventListener("click", fun3);
}
function fun4() {
  x++;
  if (x % 2 == 0) {
    document.getElementById("p4").innerHTML = "X";
    b4 = "X";
  } else {
    document.getElementById("p4").innerHTML = "O";
    b4 = "O";
  }
  winner();
  document.getElementById("box21").removeEventListener("click", fun4);
}
function fun5() {
  x++;
  if (x % 2 == 0) {
    document.getElementById("p5").innerHTML = "X";
    b5 = "X";
  } else {
    document.getElementById("p5").innerHTML = "O";
    b5 = "O";
  }
  winner();
  document.getElementById("box22").removeEventListener("click", fun5);
}
function fun6() {
  x++;
  if (x % 2 == 0) {
    document.getElementById("p6").innerHTML = "X";
    b6 = "X";
  } else {
    document.getElementById("p6").innerHTML = "O";
    b6 = "O";
  }
  winner();
  document.getElementById("box23").removeEventListener("click", fun6);
}
function fun7() {
  x++;
  if (x % 2 == 0) {
    document.getElementById("p7").innerHTML = "X";
    b7 = "X";
  } else {
    document.getElementById("p7").innerHTML = "O";
    b7 = "O";
  }
  winner();
  document.getElementById("box31").removeEventListener("click", fun7);
}
function fun8() {
  x++;
  if (x % 2 == 0) {
    document.getElementById("p8").innerHTML = "X";
    b8 = "X";
  } else {
    document.getElementById("p8").innerHTML = "O";
    b8 = "O";
  }
  winner();
  document.getElementById("box32").removeEventListener("click", fun8);
}
function fun9() {
  x++;
  if (x % 2 == 0) {
    document.getElementById("p9").innerHTML = "X";
    b9 = "X";
  } else {
    document.getElementById("p9").innerHTML = "O";
    b9 = "O";
  }
  winner();
  document.getElementById("box33").removeEventListener("click", fun9);
}

function winner() {
  if (
    (b1 == "O" && b2 == "O" && b3 == "O") ||
    (b4 == "O" && b5 == "O" && b6 == "O") ||
    (b7 == "O" && b8 == "O" && b9 == "O") ||
    (b1 == "O" && b4 == "O" && b7 == "O") ||
    (b2 == "O" && b5 == "O" && b8 == "O") ||
    (b3 == "O" && b6 == "O" && b9 == "O") ||
    (b1 == "O" && b5 == "O" && b9 == "O") ||
    (b3 == "O" && b5 == "O" && b7 == "O")
  ) {
    document.getElementById("box11").removeEventListener("click", fun1);
    document.getElementById("box12").removeEventListener("click", fun2);
    document.getElementById("box13").removeEventListener("click", fun3);
    document.getElementById("box21").removeEventListener("click", fun4);
    document.getElementById("box22").removeEventListener("click", fun5);
    document.getElementById("box23").removeEventListener("click", fun6);
    document.getElementById("box31").removeEventListener("click", fun7);
    document.getElementById("box32").removeEventListener("click", fun8);
    document.getElementById("box33").removeEventListener("click", fun9);
    document.getElementById("result").innerHTML = "You Win O!!";
  } else if (
    (b1 == "X" && b2 == "X" && b3 == "X") ||
    (b4 == "X" && b5 == "X" && b6 == "X") ||
    (b7 == "X" && b8 == "X" && b9 == "X") ||
    (b1 == "X" && b4 == "X" && b7 == "X") ||
    (b2 == "X" && b5 == "X" && b8 == "X") ||
    (b3 == "X" && b6 == "X" && b9 == "X") ||
    (b1 == "X" && b5 == "X" && b9 == "X") ||
    (b3 == "X" && b5 == "X" && b7 == "X")
  ) {
    document.getElementById("box11").removeEventListener("click", fun1);
    document.getElementById("box12").removeEventListener("click", fun2);
    document.getElementById("box13").removeEventListener("click", fun3);
    document.getElementById("box21").removeEventListener("click", fun4);
    document.getElementById("box22").removeEventListener("click", fun5);
    document.getElementById("box23").removeEventListener("click", fun6);
    document.getElementById("box31").removeEventListener("click", fun7);
    document.getElementById("box32").removeEventListener("click", fun8);
    document.getElementById("box33").removeEventListener("click", fun9);
    document.getElementById("result").innerHTML = "You Win X!!";
  } else if (
    (b1 == "X" || b2 == "X" || b3 == "X") &&
    (b1 == "X" || b4 == "X" || b7 == "X") &&
    (b1 == "X" || b5 == "X" || b9 == "X") &&
    (b2 == "X" || b5 == "X" || b8 == "X") &&
    (b3 == "X" || b5 == "X" || b7 == "X") &&
    (b3 == "X" || b6 == "X" || b9 == "X") &&
    (b4 == "X" || b5 == "X" || b6 == "X") &&
    (b7 == "X" || b8 == "X" || b9 == "X") &&
    (b1 == "O" || b2 == "O" || b3 == "O") &&
    (b1 == "O" || b4 == "O" || b7 == "O") &&
    (b1 == "O" || b5 == "O" || b9 == "O") &&
    (b2 == "O" || b5 == "O" || b8 == "O") &&
    (b3 == "O" || b5 == "O" || b7 == "O") &&
    (b3 == "O" || b6 == "O" || b9 == "O") &&
    (b4 == "O" || b5 == "O" || b6 == "O") &&
    (b7 == "O" || b8 == "O" || b9 == "O")
  ) {
    document.getElementById("result").innerHTML = "Draw!!";
  }
}