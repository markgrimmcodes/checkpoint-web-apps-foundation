const btn = document.querySelector("button");
const inputs = document.querySelectorAll("input");

let passwordOne = document.querySelector("#firstPW").value;
let passwordTwo = document.querySelector("#secPW").value;

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

  checkPassword();
});

// verify password
let match = true;

function checkPassword() {
  let passwordOne = document.querySelector("#firstPW").value;
  let passwordTwo = document.querySelector("#secPW").value;

  if (passwordOne != passwordTwo) {
    match = false;
    console.log("no match");
  } else {
    match = true;
    console.log("passwords match");
  }
}
