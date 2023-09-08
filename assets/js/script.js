const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const watch = setInterval(function time() {
  let dateNow = new Date();
  let hour = dateNow.getHours();
  let minute = dateNow.getMinutes();
  let second = dateNow.getSeconds();

  hours.textContent = hour;
  minutes.textContent = formatMinutes(minute);
  seconds.textContent = second;

  function formatMinutes(minute) {
    if (minute < 10) {
      return '0' + minute;
    } else {
      return minute.toString();
    }
  }

});