function timer() {
    
// Timer

const deadLine = "2023-12-31";

function getTime(endTime) {
  let days, hours, minutes, seconds;
  const t = Date.parse(endTime) - Date.parse(new Date());
  if (t <= 0) {
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
  } else {
    days = Math.floor(t / (1000 * 60 * 60 * 24));
    hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    minutes = Math.floor((t / (1000 * 60)) % 60);
    seconds = Math.floor((t / 1000) % 60);
  }
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}
getTime(deadLine);

function timer(selector, endtime) {
  const time = document.querySelector(selector);
  const days = time.querySelector("#days");
  const hours = time.querySelector("#hours");
  const minutes = time.querySelector("#minutes");
  const seconds = time.querySelector("#seconds");
  const timerID = setInterval(updateTime, 1000);
  updateTime();
  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function updateTime() {
    const t = getTime(endtime);
    days.textContent = getZero(t.days);
    hours.textContent = getZero(t.hours);
    minutes.textContent = getZero(t.minutes);
    seconds.textContent = getZero(t.seconds);

    if (t.total <= 0) {
      clearInterval(timerID);
    }
  }
}
timer(".timer", deadLine);
}

export default timer