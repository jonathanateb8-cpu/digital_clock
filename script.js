const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const dateElement = document.getElementById('date');
const ampmElement = document.getElementById('ampm');

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12;

  hoursElement.textContent = String(hours).padStart(2, '0');
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
  ampmElement.textContent = ampm;

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  dateElement.textContent = now.toLocaleDateString('en-US', options);
}

updateClock();
setInterval(updateClock, 1000);
