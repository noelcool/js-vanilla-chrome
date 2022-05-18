const loginForm = document.querySelector("#login-form")
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
// document.querySelector("#login-form input")

function handleLoginBtnClick() {
    console.dir(loginInput.value);
    console.log("click");
}
loginButton.addEventListener("click", handleLoginBtnClick);