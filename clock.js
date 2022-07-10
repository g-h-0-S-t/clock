javascript: ((window) => {
    let width =
        window.innerWidth ||
        window.document.documentElement.clientWidth ||
        window.document.body.clientWidth;
    let height =
        window.innerHeight ||
        window.document.documentElement.clientHeight ||
        window.document.body.clientHeight;
    window.document.head.innerHTML =
        "<style>" +
        "body {background-color: #0a0a0a; color: #c3015c; font-family: 'Gill Sans', sans-serif; text-align: center;}" +
        "#clock {display: flex; align-items: center; justify-content: center; position: fixed; width: 100%; height: 100%; text-align: center; margin: 0 auto}" +
        "#clockTable {font-size: 12vw;}" +
        "#time {text-align: center; font-size: 2em;}" +
        "#date {text-align: center; font-size: 0.5em;}" +
        "#seconds {font-size: 0.14em;}" +
        "</style>";
    window.document.body.innerHTML =
        "<div id = 'clock'></div>";
    window.setInterval(() => {
        let currentDate = new window.Date();
        let hours =
            currentDate.getHours() - 12 > 0
                ? currentDate.getHours() - 12
                : currentDate.getHours();
        let meridian = currentDate.getHours() - 12 > 0 ? "PM" : "AM";
        hours = hours < 10 ? "0" + hours : hours;
        let minutes = currentDate.getMinutes();
        minutes = minutes < 10 ? "0" + minutes : minutes;
        let seconds = currentDate.getSeconds();
        seconds = seconds < 10 ? "0" + seconds : seconds;
        let time =
            hours +
            ":" +
            minutes +
            "<span id = 'seconds'>" +
            seconds +
            "</span>" +
            meridian;
        let day = currentDate.getDate();
        day = day < 10 ? "0" + day : day;
        let dayNames = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        let dayName = dayNames[currentDate.getDay()];
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
            "December",
        ];
        let month = monthArray[currentDate.getMonth()];
        let year = currentDate.getFullYear();
        window.document.getElementById("clock").innerHTML =
            "<table id ='clockTable'><tr><td><div id = 'time'>" +
            time +
            "</div></td></tr><tr><td><div id = 'date'>" +
            dayName +
            " - " +
            month +
            " " +
            day +
            ", " +
            year +
            "</div></td></tr></table>";
    }, 1);
    var clock = window.document.getElementById("clock");
    let openFullscreen = () => {
        if (clock) {
            if (clock.requestFullscreen) {
                clock.requestFullscreen();
            } else if (clock.webkitRequestFullscreen) { /* Safari */
                clock.webkitRequestFullscreen();
            } else if (clock.msRequestFullscreen) { /* IE11 */
                clock.msRequestFullscreen();
            }
        }
    };
    clock.addEventListener("click", openFullscreen);
})(window);
