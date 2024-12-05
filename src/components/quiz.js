import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./quiz.css";

const QuizWithAllQuestions = () => {

    const navigate = useNavigate();

    const handleNextClick = () => {
        navigate("/conclusion");
    };
    const [answers, setAnswers] = useState({}); // for answer traking

    const questions = [
        {
            question: "What is the purpose of a decision tree?",
            options: ["To decorate a park", "To make better decisions", "To grow fruits", "To write stories"],
            correctOption: 1,
            explanation: "A decision tree helps in making better decisions by providing a structured way to analyze choices.",
        },
        {
            question: "What is the topmost node of a decision tree called?",
            options: ["Root Node", "Leaf Node", "Branch Node", "Parent Node"],
            correctOption: 0,
            explanation: "The topmost node of a decision tree is called the Root Node. It represents the main decision point.",
        },
        {
            question: "What do the branches of a decision tree represent?",
            options: ["Choices", "Leaves", "Paths", "None of the above"],
            correctOption: 2,
            explanation: "The branches of a decision tree represent the different paths or choices from one node to another.",
        },
        {
            question: "What does a leaf node in a decision tree signify?",
            options: ["A flower", "The end of a path", "A new choice", "A decision start point"],
            correctOption: 1,
            explanation: "A leaf node signifies the end of a path and represents a decision or outcome.",
        },
        {
            question: "Which is a real-world example of a decision tree?",
            options: ["Selecting a movie", "Flying a plane", "Playing a piano", "Solving a crossword"],
            correctOption: 0,
            explanation: "Decision trees are often used in scenarios like selecting a movie by analyzing preferences.",
        },
        {
            question: "Which field commonly uses decision trees?",
            options: ["Artificial Intelligence", "Painting", "Gardening", "Cooking"],
            correctOption: 0,
            explanation: "Decision trees are widely used in Artificial Intelligence for data analysis and decision-making.",
        },
        {
            question: "Which of the following is an advantage of a decision tree?",
            options: [
                "It’s complex to use",
                "It’s visually intuitive",
                "It requires advanced knowledge",
                "It cannot handle large datasets",
            ],
            correctOption: 1,
            explanation: "Decision trees are visually intuitive, making them easy to understand and use.",
        },
        {
            question: "How do you start a decision tree?",
            options: [
                "By guessing the outcome",
                "By identifying the root decision",
                "By drawing random branches",
                "By writing a story",
            ],
            correctOption: 1,
            explanation: "A decision tree starts by identifying the root decision or main question.",
        },
    ];

    const handleOptionClick = (questionIndex, optionIndex) => {
        setAnswers({
            ...answers,
            [questionIndex]: {
                selectedOption: optionIndex,
                isCorrect: optionIndex === questions[questionIndex].correctOption,
            },
        });
    };

    return (
        <div className="quiz-container">
            <header className="quiz-header">
                <h1> ⏰ Quiz Time ⏰</h1>
                <p>Test your knowledge</p>
            </header>
            <div className="quiz-questions">
                {questions.map((q, index) => (
                    <div key={index} className="quiz-question">
                        <h2>{q.question}</h2>
                        <div className="quiz-options">
                            {q.options.map((option, optIndex) => {
                                const isSelected = answers[index]?.selectedOption === optIndex;
                                const isCorrect = answers[index]?.isCorrect;
                                // const correctOption = q.correctOption;
                                const optionClass = isSelected
                                    ? isCorrect
                                        ? "option-correct"
                                        : "option-incorrect"
                                    : "";

                                return (
                                    <button
                                        key={optIndex}
                                        className={`quiz-option ${optionClass}`}
                                        onClick={() => handleOptionClick(index, optIndex)}
                                        disabled={answers[index]} // Disable options once answered
                                    >
                                        {option}
                                    </button>
                                );
                            })}
                        </div>
                        {answers[index] && (
                            <p className="quiz-explanation">
                                {answers[index].isCorrect ? "🎉 Correct!" : "❌ Incorrect."} {q.explanation}
                            </p>
                        )}
                    </div>
                ))}
            </div>
            <button className="next-button" onClick={handleNextClick}>
                Next
            </button>
        </div>
    );
};

export default QuizWithAllQuestions;
