# Assembly: Endgame

Assembly: Endgame is a fun and interactive word-guessing game built with React.  
The goal is to guess the hidden word within a limited number of attempts to prevent the programming world from falling into Assembly language chaos.

This project is inspired by the classic Hangman game, redesigned with a developer-themed twist.

---

##  Game Concept

- Guess the word in under **8 attempts**
- Each wrong guess removes a programming language
- Lose all languages → **Assembly takes over**

---

## Features

- Interactive word-guessing gameplay
- Built using React Hooks (`useState`)
- Dynamic UI updates with conditional styling
- Random word generation for replayability
- Confetti animation on winning
- Accessible UI using ARIA attributes
- Restart game functionality

---

## Technologies Used

- React.js
- JavaScript (ES6+)
- CSS
- clsx (for conditional class handling)
- react-confetti (win animation)

---

##  Project Structure
-assemblyendgame
|___ src
    |___ App.jsx
    |___ index.css
    |___ languages.js
    |___ main.jsx
    |___ utils.js
    |___ words.js


---

## How the Game Works

### State Management
- `currentWord` – The word to be guessed
- `guessedLetters` – Letters guessed by the user

### Game Rules
- Each incorrect guess eliminates one programming language
- Maximum attempts = number of languages − 1
- The game ends when:
  - All letters are guessed (Win)
  - Attempts are exhausted (Lose)

---

## Core Concepts Used

- React `useState` for state management
- Derived state for win/loss conditions
- Conditional rendering for UI updates
- Event handling for keyboard interaction
- Accessibility using `aria-live` and `aria-label`

---

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/Damu987/assembly-endgame.git
2. Navigate to the project directory:
  * cd assembly-endgame
  * Install dependencies:
  * npm install
  * Start the development server: npm run dev
  * Open in your browser: `http://localhost:5173`

## Learning Outcomes

* Understanding React state and derived state
* Implementing game logic in React
* Handling user interactions
* Improving accessibility in web apps
* Building reusable and interactive UI components

## Screenshots
*<img width="400" height="400" alt="Screenshot 2025-11-10 205850" src="https://github.com/user-attachments/assets/3b363604-a8c9-482a-a831-d753c03c7a6b" />
*<img width="400" height="400" alt="Screenshot 2025-11-10 205951" src="https://github.com/user-attachments/assets/2080c142-158a-4fff-9782-f8793b81d43f" />



## Future Improvements

* Difficulty levels
* Word categories
* Timer-based gameplay
* Mobile responsiveness
* Score tracking system

## Author

Damini S
Frontend Developer (Fresher)

## Acknowledgements

* Scrimba React Course
* React documentation
* Open-source React community
