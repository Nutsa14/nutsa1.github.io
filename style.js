let teqsti = document.getElementById('message');
let randomNumber;
let attempts;
let maxAttemps = 7;

startGame();

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("რიცხვი:", randomNumber); // დამხმარე, დეველოპერისთვის

    attempts = 0;
    teqsti.innerText = "";
    document.getElementById("attempts").innerText = attempts;
    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").disabled = false;
    document.querySelector("button").disabled = false;
    document.getElementById("startAgain").style.display = "none";
}


//innerText არის:მაგალითად h1-ში წერია რაღაცა ტექსტი და h1-ის სახელია "nutsa" უნდა ჩაწერო nutsa
//და რა ტექსტიც ეწერება ის ტექსტი გადმოვა და ასევე innerText მუსაობს p,spam- ზე



function checkGuess() {
    let guess = Number(document.getElementById('guessInput').value);
    attempts++;
    //attempts++ :უმატებს ცდების რაოდენობას
    document.getElementById("attempts").innerText = attempts;

    if (guess === randomNumber) {
        teqsti.innerText = "სწორია! 🎉";
        endGame();
    } else if (guess < randomNumber) {
        teqsti.innerText = "რანდომ რიცხვი მეტია ⬆️";
    } else {
        teqsti.innerText = "რანდომ რიცხვი ნაკლებია ⬇️";
    }

    if (attempts >= maxAttemps && guess !== randomNumber) {
        teqsti.innerText = "წააგე! სწორი პასუხი იყო: " + randomNumber;
        endGame();
    }
}

function endGame() {
    document.getElementById("guessInput").disabled = true;
    document.querySelector("button").disabled = true;
    document.getElementById("startAgain").style.display = "block";
}
//querySelector არის იგივე რაც getElebentById მაგრამ class და id -ის გარეშე