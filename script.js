`use strict`;

// buttons
const btnTop = document.querySelector(`.btn-top`);
const btnAbout = document.querySelector(`.btn-about`);
const btnExperience = document.querySelector(`.btn-experience`);
const btnWork = document.querySelector(`.btn-work`);
const btnContact = document.querySelector(`.btn-contact`);

// sections
const secFront = document.querySelector(`#front`);
const secAbout = document.querySelector(`#about`);
const secExperience = document.querySelector(`#experience`);
const secWork = document.querySelector(`#work`);
const secContact = document.querySelector(`#contact`);

// smooth scroll
const scroll = () => {
  secFront.scrollIntoView({ behavior: `smooth` });
};
btnTop.addEventListener(`click`, scroll);
//
//
// Modal-Opening/Closing
//
//
let btnShowModal = document.querySelectorAll(`.show-modal`);
let modal = document.querySelectorAll(`.modal`);
let btnCloseModal = document.querySelectorAll(`.close-modal`);
let overlay = document.querySelector(`.overlay`);

[...btnShowModal].forEach((btn, indx) => {
  btn.addEventListener(`click`, function () {
    modal[indx].classList.remove(`hidden`);
    overlay.classList.remove(`hidden`);
  });
});

[...btnCloseModal].forEach((btn, indx) => {
  btn.addEventListener(`click`, function () {
    modal[indx].classList.add(`hidden`);
    overlay.classList.add(`hidden`);
  });
});

overlay.addEventListener(`click`, function () {
  for (let i = 0; i < modal.length; i++) {
    modal[i].classList.add(`hidden`);
  }
  overlay.classList.add(`hidden`);
});

//key press event(global event) to close modal with escape key
let closeModalWithKey = (e) => {
  if (e.key === `Escape`) {
    for (let i = 0; i < modal.length; i++) {
      if (!modal[i].classList.contains(`hidden`)) {
        // NOT, if modal contain class `hidden`
        for (let i = 0; i < modal.length; i++) {
          modal[i].classList.add(`hidden`);
        }
        overlay.classList.add(`hidden`);
      }
    }
  }
  //   console.log(`${e.key} is pressed`);
};
document.addEventListener(`keydown`, closeModalWithKey);

//
//
//
/*

let testBTN1 = document.querySelector(`.test-btn-1`);
let testBTN2 = document.querySelector(`.test-btn-2`);
let testBTN3 = document.querySelector(`.test-btn-3`);

let showModal = () => {
  //removing `hidden` class to make modal visible
  for (let i = 0; i < modal.length; i++) {
    modal[i].classList.remove(`hidden`);
  }
  overlay.classList.remove(`hidden`);
};
let closeModal = () => {
  //adding `hidden` class to make modal disappear
  for (let i = 0; i < modal.length; i++) {
    modal[i].classList.add(`hidden`);
  }
  overlay.classList.add(`hidden`);
};

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener(`click`, showModal);
}

for (let i = 0; i < btnCloseModal.length; i++) {
  btnCloseModal[i].addEventListener(`click`, closeModal);
}

overlay.addEventListener(`click`, closeModal);

// all modals are stacking up, so testing to remove the top modal
testBTN1.addEventListener(`click`, function () {
  modal[2].classList.add(`hidden`);
  overlay.classList.add(`hidden`);
});
testBTN2.addEventListener(`click`, function () {
  modal[1].classList.add(`hidden`);
  overlay.classList.add(`hidden`);
});
testBTN3.addEventListener(`click`, function () {
  modal[0].classList.add(`hidden`);
  overlay.classList.add(`hidden`);
});

*/
