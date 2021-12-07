
const loginid = document.getElementsByClassName('login_id')[0];
const loginpassword = document.getElementsByClassName('login_pw')[0];
const loginbtn = document.getElementsByClassName('login_btn')[0];

inputContainer.addEventListener("keyup", function() {
  btn.disabled = validation ? false : true;
  const validation = id.value.length >= 0 && password.value.length > 3;
}
);

// function wrongAlert() {
//   alert('잘못된 비밀번호입니다. 다시 확인하세요.')
// }
