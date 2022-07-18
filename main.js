const menu = document.querySelector("#menu-btn");
const navBar = document.querySelector(".navbar");
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navBar.classList.toggle("active");
};

document.querySelector("#login-btn").onclick = () =>
  document.querySelector(".login-form-container").classList.toggle("active");

document.querySelector("#close-login-form").onclick = () =>
  document.querySelector(".login-form-container").classList.remove("active");

window.onscroll = () => {
  if (scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
  menu.classList.remove("fa-times");
  navBar.classList.remove("active");
};

window.onload = () => {
  if (scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

document.querySelector(".home").onmousemove = (e) => {
  document.querySelectorAll(".home-parallax").forEach((ele) => {
    const speed = ele.getAttribute("data-speed");
    const x = (window.innerWidth - e.pageX * speed) / 90;
    const y = (window.innerHeight - e.pageY * speed) / 90;
    ele.style.transform = `translateX(${y}px) translateY(${x}px)`;
  });
};

document.querySelector(".home").onmouseleave = () => {
  document.querySelectorAll(".home-parallax").forEach((ele) => {
   
    ele.style.transform = `translateX(0px) translateY(0px)`;
  });
};

var swiper = new Swiper(".vehicles-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  centeredSlides:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  centeredSlides:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1040: {
      slidesPerView: 3,
    },
  },
});