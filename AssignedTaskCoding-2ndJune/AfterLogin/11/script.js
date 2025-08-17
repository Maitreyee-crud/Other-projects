const days = document.querySelectorAll('.day');

    days.forEach(day => {
      const button = day.querySelector('button');
      button.addEventListener('click', () => {
        day.classList.toggle('active');
        const radio = day.querySelector('input[type="radio"]');
        radio.checked = !radio.checked;
      });
    });
   
