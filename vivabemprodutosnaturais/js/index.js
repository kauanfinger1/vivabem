const hamburguer = document.querySelector(".hamburguer"); 
const nav_header = document.querySelector(".nav_header");

hamburguer.addEventListener("click", () => {
  nav_header.classList.toggle("active");
  hamburguer.classList.toggle("ativa")
});

document.getElementById("cahgfdfghse").addEventListener("click", function(e){
        e.preventDefault();
        window.location.href = "cadastro.html";
        });
      
document.getElementById("login-cadastro").addEventListener("click", function(e){
            e.preventDefault();
            window.location.href = "login.html";
            });




