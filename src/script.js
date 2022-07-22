const btn = document.querySelector("button");
const inputs = document.querySelectorAll("input");

const inputOne = document.querySelector("#firstPW");
const inputTwo = document.querySelector("#secPW");

let passwordOne = inputOne.value;
let passwordTwo = inputTwo.value;

inputOne.addEventListener("keyup", checkPassword);
inputTwo.addEventListener("keyup", checkPassword);

btn.addEventListener("click", () => {
  //password toggle

  for (input of inputs)
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

  if (passwordOne != passwordTwo || passwordOne === "") {
    console.log("no match");
    for (let span of allSpans) {
      span.innerText = "❌";
    }

    return;
  } else {
    console.log("passwords match");
    document.querySelector("#equalMark").innerText = "✔️";
  }

  //length

  if (passwordOne.length < 10) {
    console.log("Password not long enough.");
    document.querySelector("#lengthMark").innerText = "❌";
  } else {
    console.log("Password is long enough.");
    document.querySelector("#lengthMark").innerText = "✔️";
  }

  //lower case

  if (passwordOne.search(/[a-z]/) < 0) {
    console.log("no lowercase letters found");
    document.querySelector("#lowCaseMark").innerText = "❌";
  } else {
    console.log("your password contains lowercase letters");
    document.querySelector("#lowCaseMark").innerText = "✔️";
  }

  // upper case

  if (passwordOne.search(/[A-Z]/) < 0) {
    console.log("no uppercase letters found");
    document.querySelector("#upCaseMark").innerText = "❌";
  } else {
    console.log("your password contains uppercase letters");
    document.querySelector("#upCaseMark").innerText = "✔️";
  }

  // number check

  if (passwordOne.search(/[0-9]/) < 0) {
    console.log("no number found");
    document.querySelector("#contNumMark").innerText = "❌";
  } else {
    console.log("your password contains numbers");
    document.querySelector("#contNumMark").innerText = "✔️";
  }
}
