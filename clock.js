javascript: ((window) => {
    /** initialize seconds hand ticking sound */
    let secondsSound = new Audio("audios/seconds.mp3");
    /** initialize hours hand ticking sound */
    let hoursSound = new Audio("audios/hours.mp3");
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
        "#seconds {display: inline-block !important; width: 1.12em !important; font-size: 0.14em !important; text-align: left !important;}" +
        "#meridian {display: inline-block !important; width: fit-content !important; font-size: 0.5em !important; text-align: right !important;}" +
        "#celestial > img {height: 10rem !important;}" +
        "#timeDivider {display: inline-block !important; width: 0.27em !important; font-size: 0.5em !important;}" +
        "#date {text-align: center !important; font-size: 0.5em !important;}" +
        "#devMsg {text-align: center !important; font-weight: bold !important; font-size: 2rem !important; position: fixed !important; top: 1rem !important; left: 0 !important; right: 0 !important; z-index: 1 !important;}";
    window.document.head.appendChild(clockCSS);
    window.document.body.innerHTML = "<div id = 'devMsg'>" + devMsg + "<a target='_blank' href = " + srcCodeLink + ">" + srcCodeLink + "</a>.<br>Go <a href = '#' onclick = 'openFullscreen();'>fullscreen</a> or <a href = '#' onclick = 'hideMe()'>hide</a> this message!</div>";
    window.document.body.innerHTML += "<div id = 'clock' onclick = 'openFullscreen();'></div>";
    let clock = window.document.getElementById("clock");
    window.openFullscreen = () => {
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
    window.hideMe = () => document.getElementById("devMsg").style.display = "none";
    window.setInterval(() => {
        let currentDate = new window.Date();
        let hours =
            currentDate.getHours() - 12 > 0
                ? currentDate.getHours() - 12
                : currentDate.getHours();
        let meridian = currentDate.getHours() - 12 > 0 ? "PM" : "AM";
        /** moon -> 7pm to 5am ; sun -> 6am to 6pm */
        let celestial = (currentDate.getHours() - 12 > 6 || currentDate.getHours() < 6) ? "moon.png" : "sun.png";
        hours = hours == 0 ? 12 : hours < 10 ? "0" + hours : hours;
        let minutes = currentDate.getMinutes();
        minutes = minutes < 10 ? "0" + minutes : minutes;
        let seconds = currentDate.getSeconds();
        seconds = seconds < 10 ? "0" + seconds : seconds;
        let timeDivider = "<div id = 'timeDivider'>" + ((seconds % 2 === 0) ? ":" : "&nbsp;") + "</div>";
        let timeDividerForTitle = ((seconds % 2 === 0) ? "/" : "\\");
        let time =
            hours +
            timeDivider +
            minutes +
            "<div id = 'seconds'>" +
            seconds +
            "</div>" +
            "<div id = 'meridian'>" +
            "<div id='celestial'><img src='images/" + celestial + "'></div>" +
            meridian +
            "</div>";
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
            hours + timeDividerForTitle + minutes + timeDividerForTitle + seconds + " " + meridian +
            " (" + day + " " + month.substring(0, 3) + " " + currentDate.toLocaleDateString('en', { year: '2-digit' }) + ")";
        /** seconds hand ticking sound */
        secondsSound.play();
        /** hours hand ticking sound */
        if (seconds == 0 && minutes == 0) {
            hoursSound.loop = true;
            hoursSound.play();
            setTimeout(() => {
                hoursSound.pause();
                hoursSound.currentTime = 0;
            }, hours * 1000);
        }
    }, 1000);
})(window);
