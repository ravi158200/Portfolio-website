// Smooth scroll behavior
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 50,
        behavior: "smooth"
      });
    }
  });
});

// Form submission simulation
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  e.target.reset();
});