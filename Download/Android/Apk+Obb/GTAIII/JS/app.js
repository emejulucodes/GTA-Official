/** Main JavaScript file **/

// Anonymous function
(() => {
    // Enabling strict mode
    "use strict";
    // Declare global variables
    let owner, country, date, day, year, time, sec, min, hr, device, android, windows, battery, links, batteryD, batteryS, batteryLevel, batteryCharging, empty, low, half, quarter_half, full, footer;
    // Window load event
    window.addEventListener('load', () => {
        // Get device type
        device = navigator.userAgent;
        android = device.indexOf('Android');
        windows = device.indexOf('Windows');
        // Battery info
        batteryD = document.querySelector('#bt');
        batteryS = document.querySelector('#btd');
        empty = 5;
        low = 20;
        half = 50;
        quarter_half = 90;
        full = 100;
        links = document.querySelectorAll("#download");
        links[0].addEventListener("click", () =>{
            window.open("https://realgamer604.wordpress.com/2017/07/31/gta-3-highly-compressed-high-quality-freedownload-apkobb150mb-only/");
        });
        links[1].addEventListener("click", () => {
            window.open("https://ristechy.com/download-gta-3-apk-obb-data-download-android/");
        });
        // Set the footer content
        owner = 'GTA official';
        country = 'Nigeria';
        date = new Date();
        year = date.getFullYear();
        footer = document.querySelector('footer');
        footer.innerHTML = `&copy; ${year} GTA Games <br/>by<br/> ${owner}<br/><hr style='width:43vw;'><a href='https://www.github.com/JUEsoft/'><i class='fab fa-github'></i></a>&nbsp;&nbsp;&nbsp;<a href='https://www.facebook.com/Emejulu.Officials/'><i class='fab fa-facebook'></i></a>&nbsp;&nbsp;&nbsp;<a href='https://www.twitter.com/EmejuluCodes/'><i class='fab fa-twitter'></i></a>&nbsp;&nbsp;&nbsp;<a href='#'><i class='fab fa-linkedin'></i></a>&nbsp;&nbsp;&nbsp;<a href='https://www.instagram.com/emmanuel_emejulu/'><i class='fab fa-instagram'></i></a>&nbsp;&nbsp;&nbsp;<a href='mailto:emmanueljunior433@gmail.com'><i class='far fa-envelope'></i></a>&nbsp;&nbsp;&nbsp;<a href='https://api.whatsapp.com/send?phone=+2349039923365'><i class='fab fa-whatsapp'></i></a>`;
       // Setting the battery info
        setInterval(() => {
            navigator.getBattery()
                .then((battery) => {
                    batteryLevel = parseInt(battery.level * 100);
                    batteryCharging = battery.charging;
                    if (batteryLevel >= quarter_half) {
                        batteryD.setAttribute('class', 'fas fa-battery-full');
                    }
                    if (batteryLevel <= quarter_half) {
                        batteryD.setAttribute('class', 'fas fa-battery-three-quarters');
                    }
                    if (batteryLevel <= half) {
                        batteryD.setAttribute('class', 'fas fa-battery-half');
                    }
                    if (batteryLevel <= low) {
                        batteryD.setAttribute('class', 'fas fa-battery-quarter');
                    }
                    if (batteryLevel <= empty) {
                        batteryD.setAttribute('class', 'fas fa-battery-empty');
                    }
                    if (batteryLevel == full && batteryCharging) {
                        batteryS.textContent = `Plugged in,  Fully charged (${batteryLevel}%)`;
                    }
                    else if (batteryLevel == full && !batteryCharging) {
                        batteryS.textContent = `Fully charged (${batteryLevel}%)`;
                    }
                    if (batteryLevel != full && batteryCharging || batteryLevel != full && batteryCharging && batteryLevel >= low) {
                        batteryS.textContent = `${batteryLevel}% available (plugged in, charging)`;
                    }
                    else if (batteryLevel != full && !batteryCharging) {
                        batteryS.textContent = `${batteryLevel}% remaining`;
                    }
                    if (batteryLevel <= low && !batteryCharging) {
                        batteryS.textContent = `Low battery (${batteryLevel}%)`;
                        batteryD.style.color = 'rgb(255, 0, 0)';
                    }
                    else if (batteryLevel <= low && batteryCharging) {
                        batteryS.textContent = `Low battery. Charging(${batteryLevel}%)`;
                        batteryD.style.color = 'rgb(0, 0, 0)';
                    }
                    if (android != -1) {
                        batteryS.textContent = `${batteryLevel}%`;
                    }
                });
        }, 1000);
    });
})();