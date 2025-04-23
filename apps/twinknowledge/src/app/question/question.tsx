import React from 'react';
import './question.css';

type QuestionProps = {

    question: string;
    round: string;
    value: string;
    onAnswer: (value: string) => void;
};
const Question: React.FC<QuestionProps> = ({ question, round, value, onAnswer }) => (
    <div>
        <h3>{question}</h3>
        <div>
            <span>Round:</span>
            <span>{round}</span>
        </div>
        <div>
            <span>Value:</span>
            <span>{value}</span>
        </div>

        <input type="text" className="answer-input" placeholder='Type your answer here' />
        <div className="buttons-container">
            <button className="button main-btn" onClick={(e) => onAnswer('')}>Submit</button>
            <button className="button cancel-btn" onClick={(e) => onAnswer('')}>Cancel</button>
        </div>
    </div>
);

export default Question;