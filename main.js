let mainDiv = document.querySelector(".questionDiv")
let timer = "";

function firstAnswer() {
    mainDiv.innerHTML = `
                <p>
                    Are you on Medicare or Medicaid?
                </p>

                <button onclick="secondAnswerYes()" class="yesFirst">Yes</button>
                <button onclick="finalAnswer()" class="yesFirst">No</button>
    `
}

function secondAnswerYes() {
    mainDiv.innerHTML = `
    <h3 style="text-align: center;">Unfortunately, we can't Qualify you at the moment</h3>
    `
}

function finalAnswer() {

    startCountdown()
    mainDiv.innerHTML = ` 
    <h3 class="main">CONGRATULATIONS, You're Eligible!</h3>

                <p class="resultP">
                    <span class="boldSpan">Last Step:</span>
                    You must Call Now to receive your
                    <span class="redSpan">
                        Free Credits
                    </span>
                    with Medical, Dental & Vision coverage.
                </p>

                <p>Call before enrollment closes!</p>

                <a href="tel:+18882277051" class="yesFirst">
                    Call Now (888) 227-7051
                </a>
                <h3 class="resultP2">ACT FAST! Due to high call demand, your hotline will remain available for the next:
               <span id="timer" class="timer"></span>
    `
}



let timeLimit = 120;
let interval;

function countdown() {
    let minutes = Math.floor(timeLimit / 60);
    let seconds = timeLimit % 60;

    let timerSpan = document.getElementById('timer');

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    timerSpan.textContent = minutes + ":" + seconds;

    timeLimit--;

    if (timeLimit < 0) {
        clearInterval(interval);
        console.log("Countdown completed!");
    }
}

function startCountdown() {
    if (!interval) {
        interval = setInterval(countdown, 1000);
    }
}

