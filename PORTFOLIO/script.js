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
