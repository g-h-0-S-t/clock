javascript: (window => {
    let width = window.innerWidth || window.document.documentElement.clientWidth || window.document.body.clientWidth;
    let height = window.innerHeight || window.document.documentElement.clientHeight || window.document.body.clientHeight;
    window.document.head.innerHTML =
      "<style>body {font-size: 12vw; background-color: #0a0a0a; color: #c3015c; font-family: 'Gill Sans', sans-serif; text-align: center;} #clock {display: flex; align-items: center; position: fixed; width: fit-content; text-align: center; width: " +
      width +
      "px; height: " +
      height +
      "px; margin: 0 auto} #time {font-size: 2em;} #date {font-size: 1em;} #seconds {font-size: 0.5em;}</style>";
    window.setInterval(() => {
      let currentDate = new window.Date();
      let hours = currentDate.getHours() - 12 > 0 ? currentDate.getHours() - 12 : currentDate.getHours();
      let meridian = currentDate.getHours() - 12 > 0 ? "PM" : "AM";
      hours = hours < 10 ? "0" + hours : hours;
      let minutes = currentDate.getMinutes();
      minutes = minutes < 10 ? "0" + minutes : minutes;
      let seconds = currentDate.getSeconds();
      seconds = seconds < 10 ? "0" + seconds : seconds;
      let time = hours + ":" + minutes + "<span id = 'seconds'>" + seconds + "</span>" + meridian;
      let day = currentDate.getDate();
      day = day < 10 ? "0" + day : day;
      let monthArray = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      let month = monthArray[currentDate.getMonth()];
      let year = currentDate.getFullYear();
      window.document.body.innerHTML =
        "<div id = 'clock'><table><tr><td><div id = 'time'>" +
        time +
        "</div></td></tr><tr><td><div id = 'date'>" +
        month +
        " " +
        day +
        ", " +
        year +
        "</div></td></tr></table></div>";
    }, 1);
  })(window);
  