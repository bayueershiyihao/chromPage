const clockTitle = document.querySelector(".clock-text");
const dateTitle = document.querySelector(".date-text");

function getTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();

  const hours = now.getHours();
  const minutes = now.getMinutes();

  let day;
  switch (now.getDay()) {
    case 0:
      day = "SUN";
      break;
    case 1:
      day = "MON";
      break;
    case 2:
      day = "TUE";
      break;
    case 3:
      day = "WED";
      break;
    case 4:
      day = "THU";
      break;
    case 5:
      day = "FRI";
      break;
    case 6:
      day = "SAT";
      break;
  }

  dateTitle.innerHTML = `${year} - ${month < 10 ? `0${month}` : month} - ${
    date < 10 ? `0${date}` : date
  }  ${day}`;
  clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
}

function inti() {
  getTime();
  setInterval(getTime, 1000);
}

inti();
