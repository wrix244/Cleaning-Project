document.addEventListener("DOMContentLoaded", () => {

  // ==================== Navbar Hamburger ====================
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  if(menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      menuToggle.classList.toggle('open'); // hamburger animation
    });
  }

  // ==================== Navbar Logo Click ====================
  const homeLogo = document.querySelector("nav .logo");
  if(homeLogo) {
    homeLogo.addEventListener("click", () => {
      window.location.href = "../index.html";
    });
  }

  // ==================== Slider ====================
  const slides = document.querySelectorAll('.overlay-slider .overlay');
  let currentSlide = 0;

  function showNextSlide() {
    if(slides.length === 0) return;
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  if(slides.length > 0) {
    setInterval(showNextSlide, 5000);
  }

  // ==================== FAQ Toggle ====================
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      question.classList.toggle('active');

      if(answer) {
        if (answer.style.maxHeight) {
          answer.style.maxHeight = null;
        } else {
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      }
    });
  });

  // ==================== Carousel ====================
  const list = document.querySelector('.services-list');
  const items = document.querySelectorAll('.service-item');
  const dots = document.querySelectorAll('.dot');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  function setActiveDot(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    if(dots[index]) dots[index].classList.add('active');
  }

  if(dots.length > 0 && items.length > 0) {
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        const scrollAmount = items[index].offsetLeft - list.offsetLeft;
        list.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        setActiveDot(index);
      });
    });
  }

  if(nextBtn && items.length > 0 && list) {
    nextBtn.addEventListener('click', () => {
      const scrollAmount = items[0].offsetWidth + 10;
      list.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }

  if(prevBtn && items.length > 0 && list) {
    prevBtn.addEventListener('click', () => {
      const scrollAmount = items[0].offsetWidth + 10;
      list.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  }

  if(list && items.length > 0) {
    list.addEventListener('scroll', () => {
      let closestIndex = 0;
      let closestDistance = Infinity;

      items.forEach((item, index) => {
        const distance = Math.abs(item.offsetLeft - list.scrollLeft);
        if(distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveDot(closestIndex);
    });
  }

  // ==================== Newsletter Form ====================
  const form = document.querySelector(".newsletter-form");
  if(form) {
    const button = form.querySelector("button");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if(button) {
        button.textContent = "Subscribed!";
        button.classList.add("subscribed");

        setTimeout(() => {
          button.textContent = "Subscribe";
          button.classList.remove("subscribed");
          form.reset();
        }, 3000);
      }
    });
  }

 let allEnquireBtn = document.querySelectorAll(".enquire-btn-all");

allEnquireBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    window.location.href = "/service-pages/contactPage.html";
  });
});

document.querySelector(".enquire-btn1").addEventListener("click",()=>{
    window.location.href="/service-pages/contactPage.html";
})
});
