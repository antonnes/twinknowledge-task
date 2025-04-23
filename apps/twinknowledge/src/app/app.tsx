import React, { useState, useEffect } from 'react';
import './app.css';
import Dropdown from './dropdown/dropdown';
import Question from './question/question';

const App = () => {
  const roundOptions = ['', 'Jeopardy!', 'Double Jeopardy!', 'Final Jeopardy!'];
  const valuesOptions = ['', '$200', '$400', '$600', '$800', '$1000', '$1200'];

  const [selectedValue, setSelectedValue] = useState('');
  const [selectedRound, setSelectedRound] = useState('');
  const [response, setQuestion] = useState({
    round: '',
    question: '',
    value: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const handleAnswer = (answer: string) => {
      if(!answer) {
        setQuestion({
          round: '',
          question: '',
          value: ''
        });
      }
  }
  const handleSearch = () => {
    if (!selectedValue || !selectedRound) {
      alert('Please select both price and category.');
      return;
    }

    const query = new URLSearchParams({
      value: selectedValue,
      round: selectedRound
    });

    fetch(`http://localhost:3000/api?${query.toString()}`)
      .then(res => res.json())
      .then(response => {
        setQuestion(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (

    <div className='app-container'>
       <h2 className="title">Jeopardy!</h2>
      {
          !response.question && 
          <div>
             <div className="form-container">
              <div className="dropdown">
                <Dropdown          
                  label='Round selector:'
                  options={roundOptions}
                  onSelect={setSelectedRound}
                />
              </div>
              <div className="dropdown">
                <Dropdown
                  label='Value selector:'
                  options={valuesOptions}
                  onSelect={setSelectedValue}
                />
              </div>          
            </div>
            <button className='main-btn button' onClick={handleSearch}>Get question</button> 
          </div>
      }     

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      { 
        response.question && 
        <Question 
          value={response.value} 
          round={response.round} 
          question={response.question}
          onAnswer={handleAnswer}
        />
      }
      
    </div>
  );
}

export default App;
