const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const navLinks = document.querySelector(".nav-links");

loginBtn.onclick = () => {
  loginBtn.classList.add("hidden");
  logoutBtn.classList.remove("hidden");
  alert("Logged in successfully!");
};

logoutBtn.onclick = () => {
  logoutBtn.classList.add("hidden");
  loginBtn.classList.remove("hidden");
  alert("Logged out!");
};

function toggleMenu() {
  navLinks.classList.toggle("show");
}
