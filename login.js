function validateForm(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  const validUsername = "admin";
  const validPassword = "123321";

  if (username === validUsername && password === validPassword) {
    sessionStorage.setItem("isLoggedIn", "true");
    alert("Login berhasil!");
    window.location.href = "index.html";
  } else {
    errorMessage.style.display = "block";
    errorMessage.textContent = "Username atau password salah!";
  }

  return false;
}

// dengan kodingan ini user tidak dapat mengklik tombol kiri pada mouse
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
