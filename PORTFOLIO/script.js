* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial;
}

body {
  background: linear-gradient(135deg, #0f172a, #1e293b);
  color: white;
}

/* NAV */
nav {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: rgba(0,0,0,0.4);
}

nav ul {
  display: flex;
  gap: 20px;
}

nav a {
  color: white;
  text-decoration: none;
}

/* HERO */
.hero {
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.hero button {
  padding: 10px 20px;
  background: #f59e0b;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

/* PROJECTS */
#projects {
  padding: 50px;
  text-align: center;
}

.grid {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

.card {
  background: rgba(255,255,255,0.1);
  padding: 20px;
  border-radius: 10px;
  width: 250px;
  transition: 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

/* CONTACT */
#contact {
  padding: 50px;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  margin: auto;
}

input, textarea {
  padding: 10px;
  border: none;
  border-radius: 5px;
}

button {
  background: #22c55e;
  border: none;
  padding: 10px;
  cursor: pointer;
}

/* FOOTER */
footer {
  text-align: center;
  padding: 20px;
}

/* ANIMATION */
.fade {
  opacity: 0;
  transform: translateY(20px);
  transition: 1s;
}

.show {
  opacity: 1;
  transform: translateY(0);
}
