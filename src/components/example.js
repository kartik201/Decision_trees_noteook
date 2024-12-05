
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./example.css";

const Example = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);

    const navigate = useNavigate(); // Initialize the hook

    const handleNextClick = () => {
        navigate("/simulator");
    };

    return (
        <div className="example-page">
            <header className="example-header">
                <h1>Discover Decision Trees</h1>
                <p>
                    Watch the video and explore how decision trees can help in making better choices with a great example. Let's get started!
                </p>
            </header>

            <section className="video-section">
                {/* YouTube Embed */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/sXRJS_G9sOE?si=zoLX8IUGz857FLvl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </section>


            <section class="example-explanation">
                <h2>Lets talk about the Example</h2>
                <p>
                    In this decision tree, we classify users into two categories: <strong>Yes</strong> or <strong>No</strong>, based on their <em>Age</em>, <em>Student Status</em>, and <em>Credit Score</em>.
                </p>
                <ul>
                    <li>
                        <strong>Step 1: Age?</strong> The root node asks if the user is <em>Young</em>, <em>Middle Aged</em>, or an <em>Older Adult</em>.
                    </li>
                    <li>
                        <strong>If Young:</strong> We ask, “Are you a Student?”
                        <ul>
                            <li>If <em>No</em>, the answer is <span class="highlight">No</span>.</li>
                            <li>If <em>Yes</em>, the answer is <span class="highlight">Yes</span>.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>If Middle Age:</strong> The decision is directly <span class="highlight">Yes</span>.
                    </li>
                    <li>
                        <strong>If Older Adult:</strong> The tree checks the <em>Credit Score</em>:
                        <ul>
                            <li>If <em>Regular</em>, the answer is <span class="highlight">No</span>.</li>
                            <li>If <em>Excellent</em>, the answer is <span class="highlight">Yes</span>.</li>
                        </ul>
                    </li>
                </ul>
                <p>
                    This structured approach ensures clear and logical decision-making by following simple, interpretable rules. Each path from the root to a leaf defines a <strong>classification rule</strong>, making decision trees a valuable tool in machine learning and AI.
                </p>
            </section>
            <section className="info-section">
                <h2>What we have learnt</h2>
                <ul>
                    <li>
                        <strong>Decision Trees:</strong> A powerful tool for solving classification problems by breaking down decisions into smaller, interpretable steps.
                    </li>
                    <li>
                        <strong>Structure of a Tree:</strong>
                        Nodes represent questions, branches represent answers, and leaves represent outcomes or decisions.
                    </li>
                    <li>
                        <strong>Real-World Applications:</strong> Used in industries like healthcare, finance, and marketing to predict outcomes or classify data.
                    </li>
                    <li>
                        <strong>Building and Interpreting:</strong> Learned how to construct and interpret a decision tree, making data-driven decisions.
                    </li>
                    <li>
                        <strong>Hands-On Practice:</strong> Explored an example decision tree and built your understanding through an interactive quiz.
                    </li>
                    <li>
                        <strong>Key Insights:</strong>
                        - Simplicity and interpretability make decision trees ideal for beginners.
                        - They help break down complex problems into logical, easy-to-follow rules.
                    </li>
                </ul>
            </section>



            <footer className="example-footer">
                <button className="next-button" onClick={handleNextClick}>
                    Next: Decision Tree Model
                </button>
            </footer>
        </div>
    );
};

export default Example;
