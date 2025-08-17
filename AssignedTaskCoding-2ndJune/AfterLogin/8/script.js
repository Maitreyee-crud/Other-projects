 const range = document.getElementById('rangeInput');
    const tooltip = document.getElementById('tooltip');

    function updateSlider() {
      const value = +range.value;
      tooltip.textContent = value === 9 ? '9+ Years' : `${value} Years`;

      const percent = (value - 1) / 8 * 100;
      tooltip.style.left = `calc(${percent}% + (${8 - value} * 0.5px))`;
    }

    range.addEventListener('input', updateSlider);
    updateSlider();