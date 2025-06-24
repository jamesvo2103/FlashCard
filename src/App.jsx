import { useState } from 'react'
import './App.css'

const cards = [
  { question: "When was Villanova University founded?", answer: "1842" },
  { question: "In which U.S. state is Villanova University located?", answer: "Pennsylvania" },
  { question: "What is the nickname of Villanova University's athletic teams?", answer: "Wildcats" },
  { question: "What are Villanova University's official colors?", answer: "Blue and White" },
  { question: "Which religious order founded Villanova University?", answer: "Order of Saint Augustine" },
  { question: "What division do the Villanova Wildcats compete in NCAA sports?", answer: "Division I" },
  { question: "What is Villanova University's motto?", answer: "Veritas, Unitas, Caritas" },
  { question: "What is the name of Villanova’s student-run newspaper?", answer: "The Villanovan" },
  { question: "Is Villanova University public or private?", answer: "Private" },
  { question: "Who is the longtime head coach and alumnus of Villanova’s men's basketball team?", answer: "Jay Wright" }
];

function App() {
  const [page, setPage] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState(null); // 'correct' | 'incorrect' | null

  const handleCardClick = () => {
    if (feedback === 'correct') setFlipped(f => !f);
  };

  const handleGuessChange = (e) => {
    setGuess(e.target.value);
    setFeedback(null);
  };

  const handleGuessSubmit = (e) => {
    e.preventDefault();
    if (guess.trim().toLowerCase() === cards[page].answer.trim().toLowerCase()) {
      setFeedback('correct');
      setFlipped(true);
    } else {
      setFeedback('incorrect');
      setFlipped(false);
    }
  };

  const handleNext = () => {
    if (page < cards.length - 1) {
      setPage(page + 1);
      setFlipped(false);
      setGuess('');
      setFeedback(null);
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      setPage(page - 1);
      setFlipped(false);
      setGuess('');
      setFeedback(null);
    }
  };

  return (
    <>
      <div className="app-background">
        <img src="https://codetheweb.blog/assets/img/posts/css-advanced-background-images/cover.jpg" alt="background" />
      </div>
      <div className="app-content">
        <h1>Flash Card</h1>
        <div
          className={`card${flipped ? ' flipped' : ''}`}
          onClick={handleCardClick}
          style={{ cursor: feedback === 'correct' ? 'pointer' : 'default' }}
        >
          <div className="card-inner">
            <div className="card-front">
              <h2>{cards[page].question}</h2>
              {/* Removed form from here */}
              {feedback === 'correct' && <div className="feedback correct">Correct!</div>}
              {feedback === 'incorrect' && <div className="feedback incorrect">Incorrect, try again!</div>}
              <div className="hint">(Submit the correct answer to flip the card)</div>
            </div>
            <div className="card-back">
              <p>{cards[page].answer}</p>
            </div>
          </div>
        </div>
        {/* Moved form here */}
        <form onSubmit={handleGuessSubmit} className="guess-form" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <input
            type="text"
            value={guess}
            onChange={handleGuessChange}
            placeholder="Enter your guess"
            disabled={feedback === 'correct'}
            className={`guess-input ${feedback === 'correct' ? 'correct' : feedback === 'incorrect' ? 'incorrect' : ''}`}
            aria-label="Enter your guess"
          />
          <button
            type="submit"
            disabled={feedback === 'correct' || guess.trim() === ''}
            className="submit-btn"
          >
            Submit
          </button>
        </form>
        <div>
          <button
            onClick={handlePrev}
            disabled={page === 0}
            className={page === 0 ? 'nav-btn disabled' : 'nav-btn'}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={page === cards.length - 1}
            className={page === cards.length - 1 ? 'nav-btn disabled' : 'nav-btn'}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App
