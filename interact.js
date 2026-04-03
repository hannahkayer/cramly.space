// FOCUS TIMER
const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let time = 25 * 60;
let interval = null;

function updateDisplay() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  timerDisplay.textContent =
    `${minutes.toString().padStart(2, "0")}:` +
    `${seconds.toString().padStart(2, "0")}`;
}

function startTimer() {
  if (interval !== null) return;

  interval = setInterval(() => {
    if (time > 0) {
      time--;
      updateDisplay();
    } else {
      clearInterval(interval);
      interval = null;
      alert("You did it, time for a well deserved break!!! ⏰");
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  clearInterval(interval);
  interval = null;
  time = 25 * 60;
  updateDisplay();
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

updateDisplay();


// SHORT BREAK TIMER
const timersbDisplay = document.getElementById("timer-sb");
const startsbBtn = document.getElementById("start-sb");
const stopsbBtn = document.getElementById("stop-sb");
const resetsbBtn = document.getElementById("reset-sb");

let timesb = 5 * 60;
let intervalsb = null;

function updateDisplaysb() {
  const minutes = Math.floor(timesb / 60);
  const seconds = timesb % 60;

  timersbDisplay.textContent =
    `${minutes.toString().padStart(2, "0")}:` +
    `${seconds.toString().padStart(2, "0")}`;
}

function startTimersb() {
  if (intervalsb !== null) return;

  intervalsb = setInterval(() => {
    if (timesb > 0) {
      timesb--;
      updateDisplaysb();
    } else {
      clearInterval(intervalsb);
      intervalsb = null;
      alert("Break over — back to work! ⏰");
    }
  }, 1000);
}

function stopTimersb() {
  clearInterval(intervalsb);
  intervalsb = null;
}

function resetTimersb() {
  clearInterval(intervalsb);
  intervalsb = null;
  timesb = 5 * 60;
  updateDisplaysb();
}

startsbBtn.addEventListener("click", startTimersb);
stopsbBtn.addEventListener("click", stopTimersb);
resetsbBtn.addEventListener("click", resetTimersb);

updateDisplaysb();

const timerlbDisplay = document.getElementById("timer-lb");
const startlbBtn = document.getElementById("start-lb");
const stoplbBtn = document.getElementById("stop-lb");
const resetlbBtn = document.getElementById("reset-lb");

let timelb = 30 * 60;
let intervallb = null;

function updateDisplaylb() {
  const minutes = Math.floor(timelb / 60);
  const seconds = timelb % 60;

  timerlbDisplay.textContent =
    `${minutes.toString().padStart(2, "0")}:` +
    `${seconds.toString().padStart(2, "0")}`;
}

function startTimerlb() {
  if (intervallb !== null) return;

  intervallb = setInterval(() => {
    if (timelb > 0) {
      timelb--;
      updateDisplaylb();
    } else {
      clearInterval(intervallb);
      intervallb = null;
      alert("Long break finished, ready for Round 2? Hell yeah!! ⏰");
    }
  }, 1000);
}

function stopTimerlb() {
  clearInterval(intervallb);
  intervallb = null;
}

function resetTimerlb() {
  clearInterval(intervallb);
  intervallb = null;
  timelb = 30 * 60;
  updateDisplaylb();
}

startlbBtn.addEventListener("click", startTimerlb);
stoplbBtn.addEventListener("click", stopTimerlb);
resetlbBtn.addEventListener("click", resetTimerlb);

updateDisplaylb();

const examInput = document.getElementById("exam-date");
const setExamBtn = document.getElementById("set-exam");

const daysDisplay = document.getElementById("days");
const hoursDisplay = document.getElementById("hours");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");

let countdownInterval = null;

function formatNumber(value) {
  return value.toString().padStart(2, "0");
}

function updateCountdown(targetDate) {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    clearInterval(countdownInterval);
    countdownInterval = null;

    daysDisplay.textContent = "00";
    hoursDisplay.textContent = "00";
    minutesDisplay.textContent = "00";
    secondsDisplay.textContent = "00";

    alert("Deadline Reached!!! ⏰");
    localStorage.removeItem("examDate");
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  daysDisplay.textContent = formatNumber(days);
  hoursDisplay.textContent = formatNumber(hours);
  minutesDisplay.textContent = formatNumber(minutes);
  secondsDisplay.textContent = formatNumber(seconds);
}

function startCountdown() {
  const examValue = examInput.value;

  if (!examValue) {
    alert("Please select your exam date and time.");
    return;
  }

  const targetDate = new Date(examValue).getTime();

  if (isNaN(targetDate)) {
    alert("Please enter a valid date and time.");
    return;
  }

  if (targetDate <= new Date().getTime()) {
    alert("Please choose a future date and time.");
    return;
  }

  localStorage.setItem("examDate", examValue);

  clearInterval(countdownInterval);
  countdownInterval = null;

  updateCountdown(targetDate);

  countdownInterval = setInterval(() => {
    updateCountdown(targetDate);
  }, 1000);
}

function loadSavedCountdown() {
  const savedExamDate = localStorage.getItem("examDate");

  if (!savedExamDate) return;

  examInput.value = savedExamDate;

  const targetDate = new Date(savedExamDate).getTime();

  if (targetDate > new Date().getTime()) {
    updateCountdown(targetDate);

    countdownInterval = setInterval(() => {
      updateCountdown(targetDate);
    }, 1000);
  } else {
    localStorage.removeItem("examDate");
  }
}

setExamBtn.addEventListener("click", startCountdown);

loadSavedCountdown();

const fallbackQuotes = [
      { q: "The secret of getting ahead is getting started.", a: "Mark Twain" },
      { q: "It always seems impossible until it's done.", a: "Nelson Mandela" },
      { q: "Push yourself, because no one else is going to do it for you.", a: "Unknown" },
      { q: "Great things never come from comfort zones.", a: "Unknown" },
      { q: "Dream it. Wish it. Do it.", a: "Unknown" },
      { q: "Success doesn't just find you. You have to go out and get it.", a: "Unknown" },
      { q: "The harder you work for something, the greater you'll feel when you achieve it.", a: "Unknown" },
      { q: "Don't stop when you're tired. Stop when you're done.", a: "Unknown" },
    ];
 
    let lastIndex = -1;
 
    async function fetchQuote() {
      const textEl   = document.getElementById('quote-text');
      const authorEl = document.getElementById('quote-author');
      const btn      = document.getElementById('new-quote-btn');
 
      
      textEl.classList.add('fading');
      authorEl.classList.add('fading');
      btn.disabled = true;
 
      await new Promise(r => setTimeout(r, 400));
 
      try {
        
        const res  = await fetch('https://zenquotes.io/api/random');
        if (!res.ok) throw new Error('API error');
        const data = await res.json();
        const item = data[0];
        textEl.textContent   = `"${item.q}"`;
        authorEl.textContent = `— ${item.a}`;
      } catch {
    
        let idx;
        do { idx = Math.floor(Math.random() * fallbackQuotes.length); }
        while (idx === lastIndex && fallbackQuotes.length > 1);
        lastIndex = idx;
        const pick = fallbackQuotes[idx];
        textEl.textContent   = `"${pick.q}"`;
        authorEl.textContent = `— ${pick.a}`;
      }
 
      textEl.classList.remove('fading');
      authorEl.classList.remove('fading');
      btn.disabled = false;
    }
    fetchQuote();

