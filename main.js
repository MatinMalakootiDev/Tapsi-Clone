const navLinks = document.querySelector(".nav-links");
const btnOpen = document.getElementById("btnOpen");
const btnClose = document.getElementById("btnClose");
const serviceBtnsContainer = document.querySelector(".service-btns");
const serviceBtnImg = document.querySelectorAll(".service-btn-img");
const serviceBtnInfo = document.querySelectorAll(".service-btn-info");
const serviceContainer = document.querySelectorAll(".service-container");

btnOpen.addEventListener("click", () => {
  btnOpen.classList.add("hidden");
  btnClose.classList.remove("hidden");
  navLinks.classList.add("active");
});

btnClose.addEventListener("click", () => {
  btnClose.classList.add("hidden");
  btnOpen.classList.remove("hidden");
  navLinks.classList.remove("active");
});

let currentIndex = 0;

function activateService(i) {
  serviceBtnImg.forEach(el => el.classList.remove("active"));
  serviceBtnInfo.forEach(el => el.classList.remove("active"));
  serviceContainer.forEach(el => el.classList.remove("active"));

  serviceBtnImg[i].classList.add("active");
  serviceBtnInfo[i].classList.add("active");
  serviceContainer[i].classList.add("active");

  const btn = serviceBtnImg[i];
  const container = serviceBtnsContainer;

  const btnCenter =
    btn.offsetLeft - container.offsetWidth / 2 + btn.offsetWidth / 2;

  container.scrollTo({
    left: btnCenter,
    behavior: "smooth"
  });

  currentIndex = i;
}

serviceBtnImg.forEach((btn, i) => {
  btn.addEventListener("click", () => activateService(i));
});

serviceBtnInfo.forEach((btn, i) => {
  btn.addEventListener("click", () => activateService(i));
});

setInterval(() => {
  currentIndex++;

  if (currentIndex >= serviceContainer.length) {
    currentIndex = 0;
  }

  activateService(currentIndex);
}, 5000);
