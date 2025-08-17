const stars = document.querySelectorAll('.star');
    const tooltip = document.getElementById('tooltip');
    const starWrapper = document.getElementById('stars');
    const messages = ['Poor', 'Fair', 'Good!', 'Very Good!', 'Excellent!'];

    stars.forEach(star => {
      star.addEventListener('click', () => {
        const value = parseInt(star.dataset.value);
        stars.forEach((s, i) => {
          if (i < value) {
            s.classList.add('selected');
            s.textContent = '★';
          } else {
            s.classList.remove('selected');
            s.textContent = '☆';
          }
        });

        tooltip.textContent = messages[value - 1];

        const rect = star.getBoundingClientRect();
        const parentRect = starWrapper.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2 - parentRect.left;

        tooltip.style.left = `${centerX}px`;
        tooltip.style.display = 'block';
      });
    });

    // Auto-select 3 stars on load
    window.addEventListener('DOMContentLoaded', () => {
      stars[2].click();
    });