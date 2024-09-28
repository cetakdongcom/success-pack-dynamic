document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
      item.addEventListener('click', function () {
          // Remove 'active' class from all FAQ items and reset icons
          faqItems.forEach(i => {
              i.classList.remove('active');
              i.querySelector('.icon').src = 'assets/icons/icon-plus.svg';
          });

          // Add 'active' class to the clicked FAQ item and change icon
          this.classList.add('active');
          this.querySelector('.icon').src = 'assets/icons/icon-minus.svg';
      });
  });
});
