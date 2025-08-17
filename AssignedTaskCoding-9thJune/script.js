 document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
      alert('More details will be shown here.');
    });
  });
  function switchTab(element, type) {
    const tabs = document.querySelectorAll('.section-2-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    element.classList.add('active');

    const tabText = document.getElementById('section-2-tab-text');
    const content = {
      expertise: "We embody unwavering expertise, garnered through years of industry mastery. Our team’s extensive knowledge and refined skills ensure effective solutions, fostering trust and delivering excellence.",
      innovation: "Innovation drives our strategies. By embracing change and leveraging emerging technologies, we create unique financial solutions tailored to each client’s needs.",
      accountability: "Our firm stands on a foundation of integrity and responsibility, ensuring transparent communication, consistent results, and trustworthy partnerships."
    };

    tabText.textContent = content[type];
  }
  document.querySelectorAll('.accordion-title').forEach((button) => {
    button.addEventListener('click', () => {
      const accordionItem = button.parentElement;
      const isOpen = accordionItem.classList.contains('active');

      document.querySelectorAll('.accordion-item').forEach((item) => {
        item.classList.remove('active');
        item.querySelector('.icon').textContent = '+';
      });

      if (!isOpen) {
        accordionItem.classList.add('active');
        button.querySelector('.icon').textContent = '−';
      }
    });
  });
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form submitted successfully!");
    this.reset(); // Clear form
  });

