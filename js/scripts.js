// Header

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  if (scroll > 30) {
    header.style.backgroundColor = "#fff";
    header.style.boxShadow =
      "0px 10px 34px rgba(0, 0, 0, 0.09), 0px 6.48148px 19.912px rgba(0, 0, 0, 0.0683333), 0px 3.85185px 10.8296px rgba(0, 0, 0, 0.0546667), 0px 2px 5.525px rgba(0, 0, 0, 0.045), 0px 0.814815px 2.77037px rgba(0, 0, 0, 0.0353333), 0px 0.185185px 1.33796px rgba(0, 0, 0, 0.0216667)";
    header.style.transition = "all 0.6s ease";
    } else {
    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "none";
  }
});

// Menu

document.querySelector(".header--button").addEventListener("click", () => {
  document.querySelector("#menu-show").classList.add("menu__active");
});
document.getElementById("menu-hide").addEventListener("click", () => {
  document.querySelector("#menu-show").classList.remove("menu__active");
});

// Hero Slider

const heroImage = document.getElementById("hero--img");

const imageUrl = [
  "https://i.postimg.cc/Pqy8Vykf/photo-01.png",
  "https://i.postimg.cc/3wxkQRVh/photo-02.png",
  "https://i.postimg.cc/4dFFZB55/photo-03.png",
  "https://i.postimg.cc/B6ngwHxG/photo-04.png",
  "https://i.postimg.cc/pXSKP3z4/photo-05.png",
];
let i = 0;
let setTime;
setTime = setInterval(() => {
  const scroll = window.scrollY;
  if (scroll < window.innerHeight) {
    heroImage.style.backgroundImage = `url(${imageUrl[i]})`;
    i++;
    if (i > imageUrl.length - 1) {
      i = 0;
    }
  }
}, 5000);
if (scroll > window.innerHeight) {
  clearInterval(setTime);
}

// Modal

const openModal = document.querySelectorAll(".card");
const modal = document.querySelector(".main__modal");
const closeModal = document.querySelector(".modal__close");

openModal.forEach((card) => {
  card.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("main__modal--show");
  });
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("main__modal--show");
});

// FAQ

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active-faq");
  });
});

// Testimonials

const TestimonialContainer = document.querySelector(".testimonial__messages");
const testimonialPoint = document.querySelectorAll(".point");

testimonialPoint.forEach((point, index) => {
  testimonialPoint[index].addEventListener("click", () => {
    let position = index;
    let operation = position * -33.33 + 33.33;

    TestimonialContainer.style.transform = `translateX(${operation}%)`;

    testimonialPoint.forEach((point, index) => {
      testimonialPoint[index].classList.remove("active");
    });
    testimonialPoint[position].classList.add("active");
  });
});

// Form

const sendForm = () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  window.alert(
    `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\nGracias por escribirnos! Nos pondremos en contacto con usted tan pronto como sea posible.`
  );
};
