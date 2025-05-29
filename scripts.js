
    function filterProjects(category) {
      const projects = document.querySelectorAll('.project-card');
      if (category === 'all') {
        projects.forEach((proj) => (proj.style.display = 'block'));
        return;
      }
      projects.forEach((proj) => {
        if (proj.classList.contains(category)) {
          proj.style.display = 'block';
        } else {
          proj.style.display = 'none';
        }
      });
    }

    // Simple contact form validation and submission simulation
    document.getElementById('contactForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const formMessage = document.getElementById('formMessage');
      const name = this.name.value.trim();
      const email = this.email.value.trim();
      const message = this.message.value.trim();

      if (!name || !email || !message) {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.style.color = '#ff6b6b';
        return;
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.style.color = '#ff6b6b';
        return;
      }

      formMessage.style.color = '#d4af37';
      formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
      this.reset();
    });