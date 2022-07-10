javascript: ((window) => {
    let devMsg = "Made with <3 by Cyberbatman.\nGet the code @ ";
    let srcCodeLink = "https://github.com/g-h-0-S-t/clock";
    window.console.info(devMsg + srcCodeLink);
    let clockCSS = document.createElement("STYLE");
    clockCSS.id = "clockCSS";
    clockCSS.innerHTML =
        "body {background-color: #0a0a0a !important; color: #c3015c !important; font-family: 'Gill Sans', sans-serif !important; text-align: center !important;}" +
        "a {color: #0a95ff !important;}" +
        "#clock {display: flex !important; align-items: center !important; justify-content: center !important; position: fixed !important; width: 100% !important; height: 100% !important; text-align: center !important; margin: 0 auto !important;}" +
        "#clockTable {font-size: 12vw !important;}" +
        "#time {text-align: center !important; font-size: 2em !important;}" +
        "#seconds {font-size: 0.14em !important;}" +
        "#date {text-align: center !important; font-size: 0.5em !important;}" +
        "#devMsg {text-align: center !important; font-weight: bold !important; font-size: 2rem !important; position: fixed !important; top: 1rem !important; left: 0 !important; right: 0 !important; z-index: 1 !important;}";
    window.document.head.appendChild(clockCSS);
    window.document.body.innerHTML = "<div id = 'devMsg'>" + devMsg + "<a target='_blank' href = " + srcCodeLink + ">" + srcCodeLink + "</a>.<br>Go <a href = '#' onclick = 'openFullscreen();'>fullscreen</a>!</div>";
    window.document.body.innerHTML += "<div id = 'clock'></div>";
    let clock = window.document.getElementById("clock");
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
        clock.innerHTML =
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
        window.document.getElementById("clockTable").addEventListener("click", openFullscreen);
        if (window.document.head.getElementsByTagName("TITLE")[0]) {
            let clockTitle = window.document.head.getElementsByTagName("TITLE")[0];
            clockTitle.id = "clockTitle";
        }
        else {
            let clockTitle = document.createElement("TITLE");
            clockTitle.id = "clockTitle";
            window.document.head.appendChild(clockTitle);
        }
        window.document.getElementById("clockTitle").textContent =
            dayName.substring(0, 3) + " " +
            hours + ":" + minutes + ":" + seconds + " " + meridian +
            " (" + day + " " + month.substring(0, 3) + " " + currentDate.toLocaleDateString('en', { year: '2-digit' }) + ")";
    }, 1);
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
    return window.openFullscreen = openFullscreen;
})(window);
