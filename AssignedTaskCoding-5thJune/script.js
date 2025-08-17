const dailyBtn = document.getElementById('dailyBtn');
  const monthlyBtn = document.getElementById('monthlyBtn');

  dailyBtn.addEventListener('click', () => {
    dailyBtn.classList.add('active');
    monthlyBtn.classList.remove('active');
    console.log("Daily view active");
  });

  monthlyBtn.addEventListener('click', () => {
    monthlyBtn.classList.add('active');
    dailyBtn.classList.remove('active');
    console.log("Monthly view active");
  });