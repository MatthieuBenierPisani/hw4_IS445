const isPalindrome = (str) => {
    let rev = "";
    length = str.length;
    while (length--) {
        rev += str[length];
    }
    return (str === rev);
}

function countVowels() {
    let word = prompt("Please enter a word", "")
    let vowels = ["a", "e", "i", "o", "u", "y"]
    let vowelsCount = 0;
    let phrase = ""

    for (let index = 0; index < word.length; index++) {
        if (word[index] in vowels)
            console.log(word[index])
        
    }

    for (let letter of word) {
        if (vowels.includes(letter)) {
            vowelsCount++;
        }
    }

    let checkIfPalindrome = isPalindrome(word)
    
    if (checkIfPalindrome)
        phrase = "is a palindrome"
    else
        phrase = "is not a palindrome"

    console.log(`${word} contains ${vowelsCount} vowels and ${phrase}`)

  }