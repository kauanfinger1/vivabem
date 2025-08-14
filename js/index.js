const hamburguer = document.querySelector(".hamburguer"); 
const nav_header = document.querySelector(".nav_header");

hamburguer.addEventListener("click", () => {
  nav_header.classList.toggle("active");
  hamburguer.classList.toggle("ativa")
});
document.getElementById("login-link").addEventListener("click", function(e){
            e.preventDefault();
            window.location.href = "login.html";
            });
document.getElementById("cadastrese-link").addEventListener("click", function(e){
        e.preventDefault();
        window.location.href = "cadastro.html";
        });
      
