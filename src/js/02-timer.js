import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysSpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');
const date = new Date();
let leftTime = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < date.getTime()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtn.removeAttribute('disabled');
      leftTime = selectedDates[0].getTime() - date.getTime();
    }
  },
};

startBtn.setAttribute('disabled', 'true');
startBtn.addEventListener('click', () => {
  startBtn.setAttribute('disabled', 'true');
  setInterval(() => {
    leftTime -= 1000;
    if (leftTime < 1) {
      return;
    } else {
      console.log(leftTime);
      convertMs(leftTime);
    }
  }, 1000);
});

function addLeadingZero(value) {
  if (String(value).length < 2) {
    return String(value).padStart(2, '0');
  }
  // console.log(value);
  return value;
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

  daysSpan.textContent = addLeadingZero(days);
  hoursSpan.textContent = addLeadingZero(hours);
  minutesSpan.textContent = addLeadingZero(minutes);
  secondsSpan.textContent = addLeadingZero(seconds);

  return console.log({ days, hours, minutes, seconds });
}

flatpickr(input, options);
