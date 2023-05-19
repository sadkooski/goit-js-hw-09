import Notiflix from 'notiflix';

const inputDelay = document.querySelector('[name="delay"]');
const inputStep = document.querySelector('[name="step"]');
const inputAmount = document.querySelector('[name="amount"]');
const btnCreate = document.querySelector('[type="submit"]');
const form = document.querySelector('form');

let position;
let delay;
let step;
let amount;

form.addEventListener('input', inputsListener);
form.addEventListener('submit', createPromiseMultipleTimes);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  //
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
      // Fulfill
    } else {
      reject({ position, delay });
      // Reject
    }
  });
  //
}

function createPromiseMultipleTimes(event) {
  event.preventDefault();
  setTimeout(() => {
    console.log(`delay ${delay}`);

    for (let i = 0; i < amount; i++) {
      // setTimeout(() => {
      position = i + 1;
      createPromise(position, delay)
        .then(({ position, delay }) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });
      // }, step);
    }
  }, delay);
}

function inputsListener(event) {
  if (event.target.name === 'delay') {
    delay = event.target.value;
    console.log(delay);
  } else if (event.target.name === 'step') {
    step = event.target.value;
    // console.log(step);
  } else if (event.target.name === 'amount') {
    amount = event.target.value;
    // console.log(amount);
  }
}

// console.log(createPromise(2, 1500));
