const login = document.querySelector(".login");
const register = document.querySelector(".register");
const logout = document.querySelector(".logout");
const loggedUser = document.querySelector(".logged-user");

login.addEventListener("click", userLogin);

function userLogin(e) {
    e.preventDefault();
}

showHideIcon(register, true);
function showHideIcon(icon, flag) {
    flag ? (icon.style.display = "none") : (icon.style.display = "block");
}