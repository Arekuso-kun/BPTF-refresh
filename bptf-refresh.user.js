// ==UserScript==
// @name         Inventory refresh
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       Alexo
// @downloadURL  https://github.com/Arekuso-kun/BPTF-refresh/raw/main/bptf-refresh.user.js
// @updateURL    https://github.com/Arekuso-kun/BPTF-refresh/raw/main/bptf-refresh.user.js
// @match        https://backpack.tf/profiles/76561198219409524
// @icon         https://www.google.com/s2/favicons?sz=64&domain=backpack.tf
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function refreshPage() {
        location.reload();
    }

    function updateDisplay(remainingTime) {
        let timeDisplay = document.getElementById('time-display');
        if (!timeDisplay) {
            const newTimeDisplay = document.createElement('div');
            newTimeDisplay.id = 'time-display';
            newTimeDisplay.style.position = 'fixed';
            newTimeDisplay.style.bottom = '10px';
            newTimeDisplay.style.right = '10px';
            newTimeDisplay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            newTimeDisplay.style.color = 'white';
            newTimeDisplay.style.padding = '10px';
            newTimeDisplay.style.borderRadius = '5px';
            document.body.appendChild(newTimeDisplay);
            timeDisplay = newTimeDisplay;
        }
        timeDisplay.textContent = `Time remaining: ${remainingTime} seconds`;
    }

    function startTimer() {
        let remainingTime = 900; // 15 minutes in seconds

        // Update the display immediately
        updateDisplay(remainingTime);

        // Refresh the page every 15 minutes (900 seconds)
        setInterval(() => {
            remainingTime -= 1;
            if (remainingTime <= 0) {
                refreshPage();
            } else {
                updateDisplay(remainingTime);
            }
        }, 1000); // Update every second
    }

    // Start the timer when the page loads
    startTimer();
})();