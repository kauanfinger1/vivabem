const hamburguer = document.querySelector(".hamburguer"); 
const nav_header = document.querySelector(".nav_header");

hamburguer.addEventListener("click", () => {
  nav_header.classList.toggle("active");
  hamburguer.classList.toggle("ativa")
});

document.getElementById("login-cadastro").addEventListener("click", function(e){
            e.preventDefault();
            window.location.href = "login.html";
            })

document.getElementById("cadastrese").addEventListener("click", function(e){
        e.preventDefault(); // Evita envio do formulário
        window.location.href = "cadastro.html";
        });