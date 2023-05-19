import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysSpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');
const divTimer = document.querySelector('.timer');

const date = new Date();
let leftTime = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < date.getTime()) {
      window.alert('Please choose a date in the future');
    } else {
      startBtn.removeAttribute('disabled');
      leftTime = selectedDates[0].getTime() - date.getTime();

      console.log(leftTime);
    }
  },
};

function addLeadingZero(value) {
  // divTimer.addEventListener("input", (event) => {
  // if (event.currentTarget.textContent) {};
  // });

  if (String(value).length < 2) {
    return (value = String(value).padStart(2, '0'));
  }
  // console.log(String(value).length);
  console.log(value);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  addLeadingZero(days);

  daysSpan.textContent = days;
  hoursSpan.textContent = hours;
  minutesSpan.textContent = minutes;
  secondsSpan.textContent = seconds;

  return console.log({ days, hours, minutes, seconds });
}

startBtn.setAttribute('disabled', 'true');
startBtn.addEventListener('click', () => {
  setInterval(() => {
    leftTime -= 1000;
    console.log(leftTime);
    convertMs(leftTime);
  }, 1000);
});
flatpickr(input, options);
