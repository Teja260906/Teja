function showMessage() {
    
    alert("🔥 Welcome Teja! Your cloud site is live!");
}
<script>
const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

elements.forEach(el => observer.observe(el));
</script>
// Load projects from backend
fetch("http://13.233.197.196:3000/projects")
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });

// Contact form
function sendMessage() {
  fetch("http://13.233.197.196:3000/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: "Teja",
      email: "test@gmail.com",
      message: "Hello!"
    })
  })
  .then(res => res.json())
  .then(data => alert(data.status));
}
