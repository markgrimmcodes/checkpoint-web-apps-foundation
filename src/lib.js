function arePasswordsEqual(pw1, pw2) {
  const areEqual = pw1 === pw2;
  return areEqual;
}
function lengthCheck(pw1) {
  const notLongEnough = pw1.length < 10;
  return notLongEnough;
}
export function initApp() {
  const btn = document.querySelector("button");
  const inputs = document.querySelectorAll("input");

  const inputOne = document.querySelector("#firstPW");
  const inputTwo = document.querySelector("#secPW");

  inputOne.addEventListener("keyup", checkPassword);
  inputTwo.addEventListener("keyup", checkPassword);

  btn.addEventListener("click", () => {
    //password toggle

    for (let input of inputs)
      if (input.type === "password") {
        input.type = "text";
        btn.innerText = "Hide Password";
      } else {
        input.type = "password";
        btn.innerText = "Show Password";
      }
  });

  // verify password

  function checkPassword() {
    let passwordOne = document.querySelector("#firstPW").value;
    let passwordTwo = document.querySelector("#secPW").value;
    let allSpans = document.querySelectorAll("span");
    //match
    const checkResult = arePasswordsEqual(passwordOne, passwordTwo);
    if (!checkResult || passwordOne == "") {
      for (let span of allSpans) {
        span.innerText = "❌";
      }

      return;
    } else {
      document.querySelector("#equalMark").innerText = "✔️";
    }

    //length
    const lengthResult = lengthCheck(passwordOne);
    if (lengthResult) {
      document.querySelector("#lengthMark").innerText = "❌";
    } else {
      document.querySelector("#lengthMark").innerText = "✔️";
    }

    //lower case

    if (passwordOne.search(/[a-z]/) < 0) {
      document.querySelector("#lowCaseMark").innerText = "❌";
    } else {
      document.querySelector("#lowCaseMark").innerText = "✔️";
    }

    // upper case

    if (passwordOne.search(/[A-Z]/) < 0) {
      document.querySelector("#upCaseMark").innerText = "❌";
    } else {
      document.querySelector("#upCaseMark").innerText = "✔️";
    }

    // number check

    if (passwordOne.search(/[0-9]/) < 0) {
      document.querySelector("#contNumMark").innerText = "❌";
    } else {
      document.querySelector("#contNumMark").innerText = "✔️";
    }
  }
}
