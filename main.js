const firstWord = ["I", "You", "We", "They", "He", "She", "It"];
const secondWord = ["love", "like", "hate", "enjoy", "dislike", "adore", "fancy"];
const thirdWord = ["JavaScript", "Python", "PHP", "Java", "C++", "C#", "Ruby", "Swift"];

const randomFirstWord = Math.floor(Math.random() * firstWord.length);

const randomSecondWord = Math.floor(Math.random() * secondWord.length);

const randomThirdWord = Math.floor(Math.random() * thirdWord.length);

const randomSentence = `${firstWord[randomFirstWord]} ${secondWord[randomSecondWord]} ${thirdWord[randomThirdWord]}`;

console.log(randomSentence);

