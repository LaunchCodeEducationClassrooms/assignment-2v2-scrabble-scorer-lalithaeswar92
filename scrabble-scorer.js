// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
  let score = 0;
  	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
          score = score + Number(pointValue);
		 }
 
	  }
	}
  console.log(`Score for '${word}': ${score}`)
  return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
     
   console.log("Let's play some scrabble! \n");
   let word = input.question("Enter a word to score: ")
   console.log("Which scoring algorithm would you like to use? \n")
   console.log("0 - Simple: One point per character");
   console.log("1 - Vowel Bonus: Vowels are worth 3 points");
   console.log("2 - Scrabble: Uses scrabble point system \n");
   let option = input.question("Enter 0, 1, or 2 : ");
   console.log(scorerPrompt(option,word));
   //console.log(oldScrabbleScorer(useWord));   
};

function simpleScore(simple) {
  console.log(`Score for '${simple}': ${simple.length}`)
	//console.log("Simple score is " + simple.length);
  return;
 }
//let simpleWord = input.question("Enter a Simple Word : ")
//console.log(simpleScore(simpleWord));

const vowelPointStructure = {
  3: ['A', 'E', 'I', 'O', 'U'],
  1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'],
};

function vowelBonusScore(vowel) {
	vowel = vowel.toUpperCase();
	let vowelBonusScore = "";
  let score = 0;
	for (let i = 0; i < vowel.length; i++) {
 
	  for (const vowelValue in vowelPointStructure) {
 
		 if (vowelPointStructure[vowelValue].includes(vowel[i])) {
			vowelBonusScore += `Points for '${vowel[i]}': ${vowelValue}\n`
      score = score + Number(vowelValue);
		 }
 
	  }
	}
  console.log(`Score for '${vowel}': ${score}`);
	return vowelBonusScore;
 }



let scrabbleScore;

const scoringAlgorithms = [
  ['Name','Description','Score Function'],
  ['Simple Score', 'Each letter is worth 1 point', 'A function with a parameter for user input that returns a score.'],
  ['Bonus Vowels', 'Vowels are 3 pts, consonants are 1 pt.', 'A function that returns a score based on the number of vowels and consonants.'],
  ['Scrabble','The traditional scoring algorithm.','Uses the oldScrabbleScorer() function to determine the score for a given word.']
  ];

 

function scorerPrompt(choice, word) {
    //let score = input.question("Choose a value between 0 to 2 : ");
    if (choice == 0) {
        //let simpleWord = input.question("Enter a Simple Word : ")
        console.log(simpleScore(word));
    } else if (choice == 1) {
        //let vowelWord = input.question("Enter a Word to get vowel Score: ")
        console.log(vowelBonusScore(word));
    } else if (choice == 2) {
        //let useWord = input.question("Let's play some scrabble! Enter a word: ")
        console.log(oldScrabbleScorer(word)); 
    } else {console.log("You have entered an invalid option...")}

}



function transform() {
  let structure = [];
  	for (let i = 0; i < oldPointStructure.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
          structure[oldPointStructure[i].toLowerCase] = pointValue;
		  }
	}
  //console.log(`Score for '${word}': ${score}`)
  return structure;
};

const newPointStructure = {
  1: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
  2: ['d', 'g'],
  3: ['b', 'c', 'm', 'p'],
  4: ['f', 'h', 'v', 'w', 'y'],
  5: ['k'],
  8: ['j', 'x'],
  10: ['q', 'z'],
  0: [' ']
};

function runProgram() {
   initialPrompt();
   
}

module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

