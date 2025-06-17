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

  const handleCardClick = () => setFlipped(f => !f);

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
          style={{ cursor: 'pointer' }}
        >
          <div className="card-inner">
            <div className="card-front">
              <h2>{cards[page].question}</h2>
            </div>
            <div className="card-back">
              <p>{cards[page].answer}</p>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => { setPage(page - 1); setFlipped(false); }}
            disabled={page === 0}
          >
            Previous
          </button>
          <button
            onClick={() => { setPage(page + 1); setFlipped(false); }}
            disabled={page === cards.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App
