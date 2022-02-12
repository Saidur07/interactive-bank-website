document.getElementById("login-submit").addEventListener("click", function () {
  // Get User Email
  let emailField = document.getElementById("user-email");
  let userEmail = emailField.value;

  // Get User Password
  let passwordField = document.getElementById("user-password");
  let userPassword = passwordField.value;

  // check user email and password

  if (
    userEmail == "user@gmail.com" &&
    userPassword == "userPassword"
  ) {
    window.location.href = "banking.html";
  } else {
    document.getElementById("input-error").innerText = "Invalid User 😒";
  }
});
let hiddenBtn = document.getElementById('showBtn')
let hiddenThings = document.getElementById('hidden-things')
hiddenBtn.addEventListener('click', function () {
    hiddenThings.style.display = "block"; 
    // alert(hiddenThings)
})