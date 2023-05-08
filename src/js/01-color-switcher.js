const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const htmlBody = document.querySelector('body');
let timerId = null;

stopBtn.setAttribute('disabled', 'false');

const randomColorCode = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    return console.log((htmlBody.style.backgroundColor = randomColorCode()));
  }, 1000);
  startBtn.setAttribute('disabled', 'true');
  stopBtn.removeAttribute('disabled');
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', 'false');
});
