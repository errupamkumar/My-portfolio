// Active year
document.getElementById('year').textContent = new Date().getFullYear();

// Smoothly close navbar on link click (mobile)
document.querySelectorAll('#nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.getElementById('navContent');
    if (nav.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(nav);
      bsCollapse.hide();
    }
  });
});

// Contact form: open default email client with pre-filled message
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:er.rupam.kumar@gmail.com?subject=${subject}&body=${body}`;
});