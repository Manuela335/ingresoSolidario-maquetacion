// JavaScript para manejar el desplazamiento suave y centrado
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-options a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            
            const targetId = event.target.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const screenHeight = window.innerHeight;
                const scrollTo = offsetTop - (screenHeight / 2);
                
                window.scrollTo({
                    top: scrollTo,
                    behavior: "smooth"
                });
            }
        });
    });
});
