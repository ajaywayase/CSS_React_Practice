const time = document.getElementById('time');

let startTime;
let interval;

function formatTime(duration) {
    let mins = Math.floor(duration / 60000);
    let secs = Math.floor((duration - mins * 60000) / 1000);
    let mil = duration - mins * 60000 - secs * 1000;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}:${String(mil).padStart(3, '0')}`;
}

function updateTimer() {
    let duration_passed = Date.now() - startTime;
    time.innerText = formatTime(duration_passed);
}

function handleStart() {
    if (!startTime) {
        startTime = Date.now();
    }
    clearInterval(interval);
    interval = setInterval(updateTimer, 10);
}

function handleStop() {
    clearInterval(interval);
}

function handleReset() {
    startTime = null;
    time.innerText = "00:00:000";
    clearInterval(interval);
}
