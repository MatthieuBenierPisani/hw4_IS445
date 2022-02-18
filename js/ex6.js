function guessNumber() {
    let randomNumber = Math.floor(Math.random() * (100 - 1) + 1)
    console.log(randomNumber)
    let userNumber = 0
    let attempts = 1;

    while (userNumber != randomNumber) {
        let userNumber = Number(prompt("Please enter a number between 1 and 100", ""))
        
        if (userNumber < randomNumber)
        console.log("Too low, guess again")
        else if (userNumber > randomNumber)
        console.log("Too high, guess again")
        else {
            console.log(`Correct! It took you ${attempts} attempts to guess the correct number`)
            break;
        }
        attempts++
    }
}