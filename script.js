const cursor = document.querySelector('.cursor');
const body = document.body;

// Move cursor with mouse
document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;

  // Create trailing effect
  const trail = document.createElement('div');
  trail.className = 'trail';
  trail.style.left = `${e.pageX}px`;
  trail.style.top = `${e.pageY}px`;
  body.appendChild(trail);

  // Remove trail after animation
  setTimeout(() => {
    trail.remove();
  }, 1000);
});

// Expand cursor on click
document.addEventListener('mousedown', () => {
  cursor.classList.add('click');
});

// Shrink cursor after releasing click
document.addEventListener('mouseup', () => {
  cursor.classList.remove('click');
});

//For Cursor


//For type writer
const roles = [
    "Frontend Developer 💻",
    "UI/UX Designer 🎨",
    "Figma Designer ✏️",
    "Software Developer 🌐"
  ];

  const textContainer = document.getElementById("dynamic-text-container");
  let roleIndex = 0;
  let charIndex = 0;
  let isErasing = false;

  function typeEffect() {
    const currentRole = roles[roleIndex];

    if (isErasing) {
      textContainer.textContent = currentRole.substring(0, charIndex--);
    } else {
      textContainer.textContent = currentRole.substring(0, charIndex++);
    }

    if (!isErasing && charIndex === currentRole.length) {
      setTimeout(() => (isErasing = true), 1000); // Pause before erasing
    } else if (isErasing && charIndex === 0) {
      isErasing = false;
      roleIndex = (roleIndex + 1) % roles.length; // Move to next role
    }

    setTimeout(typeEffect, isErasing ? 50 : 100); // Adjust typing/erasing speed
  }

  typeEffect();
