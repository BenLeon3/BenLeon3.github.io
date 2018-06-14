//Create an array of words
const word = [
"anamaniacs",
"thundercats",
"heman",
"pokemon"]
//Choose word randomly
let randNum = Math.floor(Math.random() * word.length);
let choosenWord = word[randNum];
let guessedLetters = [];
//console.log(choosenWord);

//Dom Manipulation
let docUnderScore = document.getElementsByClassName('underscore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess'); 

//Main
console.log(choosenWord);
//Create underscores based on lenght of word

function generateUnderscore() {
    let builtWord = "";
    for(let i = 0; i < choosenWord.length; i++) {
        var guessed = false;
        for(var j = 0; j < guessedLetters.length; j++){
            if (guessedLetters[j] == choosenWord[i]){
                guessed = true;
            }
        }

        if(guessed){
            builtWord += choosenWord[i]
        }
        else{
            builtWord += "_";
        }

   }
    return builtWord;
}

//testing
//console.log(generateUnderscore());
//Get users guess
document.addEventListener('keypress', function(event) {
    //console.log(event);
    //let keycode = event.keyCode;
    //console.log(keyCode)
    let letter = String.fromCharCode(event.which);

    guessedLetters.push(letter);
    document.getElementById('guessedLetters').innerHTML = guessedLetters
    var underscoreWord = generateUnderscore();
    console.log(underscoreWord) 
    document.getElementById('currentWord').innerHTML = underscoreWord

    //console.log(keyword);
//if users guess is right
    // if(choosenWord.indexOf(keyword) > -1) {
    //     //console.log(true);
    //     //add to right words array
    //     rightWord.push(keyword);
    //     //console.log(rightWord);
    //     //replace underscore with right letter
    //     underScore[choosenWord.indexOf(keyword)] = keyword;
    //     docUnderScore[0].innerHTML = underScore.join(' '); 
    //     docRightGuess[0].innerHTML = rightWord; 
    //     //check to see if word matches guesses
    //     if(underScore.join('') == choosenWord){
    //         alert('you win');
    //     }
    // }
    // else {
    //     wrongWord.push(keyword);
    //     //console.log(wrongWord);
    //     //docWrongGuess[0].innerHTML = wrongWord;
    // }
    
});

//docunderScore[0].innerHTML = generateUnderscore().join(' ');
