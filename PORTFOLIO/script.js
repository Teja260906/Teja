// Scroll to projects
function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

// Fade animation
const elements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// Contact form (connect to backend later)
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent! (Backend integration needed)");
});
