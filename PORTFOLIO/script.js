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
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const inputs = document.querySelectorAll("input, textarea");

  const data = {
    name: inputs[0].value,
    email: inputs[1].value,
    message: inputs[2].value
  };

  const res = await fetch("http://13.233.197.196:3000/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  alert(result.message);
});
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const inputs = document.querySelectorAll("input, textarea");

  const data = {
    name: inputs[0].value,
    email: inputs[1].value,
    message: inputs[2].value
  };

  const res = await fetch("http://13.233.197.196:3000/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  alert(result.message);
});
