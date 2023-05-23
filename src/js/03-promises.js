import Notiflix from 'notiflix';

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
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
        // Fulfill
      } else {
        reject({ position, delay });
        // Reject
      }
    }, delay);
  });
  //
}

function createPromiseMultipleTimes(event) {
  event.preventDefault();
  console.log(`delay ${delay}`);

  for (let i = 0; i < amount; i++) {
    //
    console.log(`i * step - ${i * step}`);
    console.log(`parseint(delay) - ${i * step + parseInt(delay)}`);
    position = i + 1;
    createPromise(position, i * step + parseInt(delay))
      .then(({ position, delay }) => {
        const fulfillText = `✅ Fulfilled promise ${position} in ${delay}ms`;
        Notiflix.Notify.success(fulfillText);
      })
      .catch(({ position, delay }) => {
        const rejectText = `❌ Rejected promise ${position} in ${delay}ms`;
        Notiflix.Notify.failure(rejectText);
      });
    //
  }
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
