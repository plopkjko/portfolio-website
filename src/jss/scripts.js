// Filter Projects by Category
function filterProjects(category) {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach(card => {
    if (category === "all" || card.classList.contains(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (name && email && message) {
    formMessage.textContent = "Thanks for reaching out! I'll get back to you soon.";
    formMessage.style.color = "green";

    // Optionally clear the form
    this.reset();
  } else {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
  }
});

// Dynamic Year in Footer
document.getElementById("year").textContent = new Date().getFullYear();

// Real-Time Clock
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("time").textContent = timeString;
}
setInterval(updateTime, 1000);
updateTime(); // Run once immediately
