let startEl = document.getElementById("start");
let counterEl = document.getElementById("counterwq");
let optionsEl = document.querySelectorAll("option");
let questionsAll = document.querySelectorAll("label");
let optionsABCD = document.getElementById("optionsAll");
let optionElA = document.getElementById("optionA");
let optionElB = document.getElementById("optionB");
let optionElC = document.getElementById("optionC");
let optionElD = document.getElementById("optionD");
let buttonNext = document.getElementById("button");
let modalEl = document.getElementById("modal");

// Set the state
let timeLeft = 30;
let score = 0;
let initialTimer;

// 1) Click Start Button to start quiz.

console.log(optionsEl)
startEl.addEventListener("click", function () {
    clearInterval(initialTimer);
    timeLeft = 30;
    counterEl.textContent = "00:" + timeLeft;
    initialTimer = setInterval(function () {
        counterEl.textContent = "00:" + timeLeft;
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(initialTimer);
            counterEl.textContent = "00:00";
        }
    }, 1000);

    // 1a ) Start button reveals first question.
    // 2) If option is correct, "Good job!".
    // 2a) If incorrect, time loss
    // *****QUESTION 1*****

    optionsEl.forEach(function (element) {
        label.textContent = "1)	The acronym HTML stands for what”?";
        optionElA.textContent = "a. Hey There My Lady.";
        optionElB.textContent = "b. Hypertext Markup Language.";
        optionElC.textContent = "c. Hypertext Markdown Language. ";
        optionElD.textContent = "d. Hot Toddy Me Larry.";
        element.addEventListener("click", function (event) {
            if (event.target.matches("#optionC")) {
                optionsAll.style.display = "none";
                label.textContent = "Good job!!";
                counterEl.textContent = "00:00";
                score += timeLeft;
                clearInterval(initialTimer);
                timeLeft = 30;
            } else {
                timeLeft -= 5;
            }
    // *****QUESTION 2*****
            label.textContent = "2) HTML creates structure. CSS is for what?";
            optionElA.textContent = "a. Used to style a page.";
            optionElB.textContent = "b. Used to track button clicks.";
            optionElC.textContent = "c. Used to create more puppies in the world.";
            optionElD.textContent = "d. Does not exist.";
            element.addEventListener("click", function (event) {
                if (event.target.matches("#optionA")) {
                    optionsAll.style.display = "none";
                    label.textContent = "Good job!!";
                    counterEl.textContent = "00:00";
                    score += timeLeft;
                    clearInterval(initialTimer);
                    timeLeft = 30;
                } else {
                    timeLeft -= 5;
                }
    // *****QUESTION 3*****
                label.textContent = "3) What does CSS stand for?";
                optionElA.textContent = "a. Cascading Style Sheet.";
                optionElB.textContent = "b. Cats, Spooky Szn.";
                optionElC.textContent = "c. Combat Service Support.";
                optionElD.textContent = "d. Does not exist.";
                element.addEventListener("click", function (event) {
                    if (event.target.matches("#optionA")) {
                        optionsAll.style.display = "none";
                        label.textContent = "Good job!!";
                        counterEl.textContent = "00:00";
                        score += timeLeft;
                        clearInterval(initialTimer);
                        timeLeft = 30;
                    } else {
                        timeLeft -= 5;
                    }
    // *****QUESTION 4*****
                    label.textContent = "4) Javascript is used for what?";
                    optionElA.textContent = "a. Used to make webpages interactive.";
                    optionElB.textContent = "b. Used to change page aestetic.";
                    optionElC.textContent = "c. Used to make a cake.";
                    optionElD.textContent = "d. Does not exist.";
                    element.addEventListener("click", function (event) {
                        if (event.target.matches("#optionA")) {
                            optionsAll.style.display = "none";
                            label.textContent = "Good job!!";
                            counterEl.textContent = "00:00";
                            score += timeLeft;
                            clearInterval(initialTimer);
                            timeLeft = 30;
                        } else {
                            timeLeft -= 5;
                        }

                    })
                })
            })
        })
    })
})
