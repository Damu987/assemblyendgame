import { useState } from 'react'
import { languages} from  './languages'
import { clsx } from "clsx";
import { getFarewellText, getRandomWord} from "./utils"
import Confetti from "react-confetti"

function App() {
//state values
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLetters ] = useState([]);

   const languageElements = languages.map((lang, index) => {
    const isLanguageLost = index < wrongGuessCount
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    }
    const className = clsx("chip", isLanguageLost && "lost")
    return (
      <span key={lang.name} className={className} style={styles}>
        {lang.name}
      </span>
    )
  })


  //derived values
  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length;
  const numGuessesLeft = languageElements.length-1;
  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= numGuessesLeft;
  const isGameOver = isGameWon || isGameLost;
  const lastGuessedLetter = guessedLetters[guessedLetters.length-1];
  const isLastGuessesLetter = lastGuessedLetter && !currentWord.includes(lastGuessedLetter);


  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  function addGuessedLetter(letter){
    setGuessedLetters(prevLetters => 
      prevLetters.includes(letter) ? 
      prevLetters :
      [...prevLetters, letter]
    )
  }
  function startNewGame(){
    setCurrentWord(getRandomWord());
    setGuessedLetters([]);
  }

 

   const letter = currentWord.split("").map((value, index) => {

    const shouldRevealLetter = isGameLost || guessedLetters.includes(value);
    const letterClassName = clsx(
      isGameLost && !guessedLetters.includes(value) && "missed-letter"
    )
    return(
    <span key={index} className={letterClassName}>
      {shouldRevealLetter ? value.toUpperCase() : ""}</span>
  )})

  const buttonEls = alphabets.split("").map(alphabet => {
   
   const isGuessed = guessedLetters.includes(alphabet);
   const isCorrect = isGuessed && currentWord.includes(alphabet);
   const isWrong = isGuessed && !currentWord.includes(alphabet);
   const className = clsx({
      correct: isCorrect,
      wrong: isWrong
   })
   
    return (
    <button 
       key={alphabet} 
       className={className}
       aria-disabled = {guessedLetters.includes(alphabet)}
       aria-label = {`Letter ${alphabet}`}
       onClick={() => addGuessedLetter(alphabet)}>
         {alphabet.toUpperCase()}
      </button>
  )})

  const gameStatusClass = clsx("game-status", {
    won: isGameWon,
    lost: isGameLost,
    farewell: !isGameOver && isLastGuessesLetter
  })

  function renderGameStatus(){
    if(!isGameOver && isLastGuessesLetter){
      return(
        <p className="farewell-message">
          {getFarewellText(languages[wrongGuessCount-1].name)}
        </p>
      )
    }

    if(isGameWon){
      return(
        <>
          <h2>You win!</h2>
          <p>Well done!</p>
        </>
      )
    }
    if(isGameLost){
      return(
        <>
           <h2>Game over!</h2>
           <p>You lose! Better start learning Assembly 😭</p>
        </>
      )
    }
    return null
  }

 

  return (
    <main>
      { isGameWon && <Confetti recycle={false} numberOfPieces={1000} /> }
         <header>
          <h1>Assembly: Endgame</h1>
          <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
         </header>
         <section className={gameStatusClass} aria-live="polite" role="status">
           {renderGameStatus()}
         </section>
         <section className="language-chips">
              {languageElements}
         </section>
         <section className='input'>
              {letter}
         </section>
        

         <section className="sr-only" aria-live="polite" role="status">
           <p>{currentWord.includes(lastGuessedLetter) ? `Correct! The letter ${lastGuessedLetter} is in the word.` :
           `Sorry, the letter ${lastGuessedLetter} is not in the word.`}
           You have {numGuessesLeft} attempts left.</p>

           <p>Current word: { currentWord.split("").map(letter => 
           guessedLetters.includes(letter) ? letter + "." : "blank.").join("")}</p>
         </section>

          <section className='keyboard'>
              {buttonEls}
         </section>
         {isGameOver &&
         <button className="new-game" onClick={startNewGame}>New Game</button>}
    </main>
  )
}

export default App
