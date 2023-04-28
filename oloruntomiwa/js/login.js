// TO SHOWPASSWORD DETAILS

const passwordInput = document.getElementById("password-input");
const showPasswordBtn = document.getElementById("show-password-btn");

showPasswordBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (passwordInput.type === 'password') {
        document.getElementById("eye-off").style.display = "block"
        document.getElementById("eye-on").style.display = "none"
        passwordInput.type = 'text';
      } else {
        passwordInput.type = 'password';
        document.getElementById("eye-off").style.display = "none"
        document.getElementById("eye-on").style.display = "block"
      }
});