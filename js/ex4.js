function storeWords() {
    let array = [];

    while (1) {
        let word = prompt("Please enter a word", "");
        if (word == "stop" || word === "stop")
            break
        else
            array.push(word)
    }

    if (array.length === 0)
        console.log("No word to display")
    else {
        for (let index = 0; index < array.length; index++) {
            console.log(array[index]);
        }
    }
}