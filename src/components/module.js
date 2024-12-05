import React from "react";
import { useNavigate } from "react-router-dom";
import "./module.css";

const ModulePage = () => {
    const navigate = useNavigate();

    const handleNextClick = () => {
        navigate("/example");
    };
    return (
        <div className="module-container">
            <header className="module-header">
                <h1>Welcome to the Decision Tree Module</h1>
                <p>Lets Learn, explore, and build decision through a fun story!</p>
            </header>

            <section className="intro-section">
                <h2>The Magic Forest and the Wise Owl</h2>
                <p>
                    Once upon a time, in a magical forest, there was a great treasure hidden deep within its heart. Many had tried to find it, but the forest was full of confusing paths, tricky choices, and secret clues. The only way to reach the treasure was to follow a special map a map that could think like a wise guide.

                    One day, a group of curious kids Emma, Aryan, and Zar decided to find the treasure. On their way, they met a wise old owl named Olive, sitting on the branch of a tall oak tree.

                    "To find the treasure," said Olive, "you must solve the puzzle of the Decision Tree!
                </p>
                <img
                    src="https://i.postimg.cc/267gXxFf/Designer1.jpg"
                    alt="Example of a Decision Tree"
                    className="intro-image"
                />
            </section>
            <section className="intro-section">
                <h2>The Decision Tree Challenge</h2>
                <p>
                    "What's a decision tree?" asked Aryan, scratching his head.

                    "A decision tree is like a magical map," explained Olive. "It helps you make the best choice at every turn by asking questions. Each question leads you closer to the treasure!"

                    The owl spread out a parchment with a tree drawn on it. At the top, it said:

                    "Start your journey."

                    "Each branch of the tree is a choice," Olive continued. "Let’s practice with a smaller tree first!"
                </p>
                <img
                    src="https://i.postimg.cc/N07rShWP/Designer2.jpg"
                    alt="Example of a Decision Tree"
                    className="intro-image"
                />
            </section>
            <section className="intro-section">
                <h2>The Challenge begins.</h2>
                <p>
                    Question 1: Do you see a path with flowers?

                    Yes: Go right.
                    No: Go left.
                    The kids looked ahead. "Flowers!" shouted Emma, and they went right.
                </p>
                <img
                    src="https://i.postimg.cc/KvKP88K6/Designer3.jpg"
                    alt="Example of a Decision Tree"
                    className="intro-image"
                />
            </section>
            <section className="intro-section">
                <p>
                    Question 2: Is there a river blocking your way?

                    Yes: Look for a wooden bridge.
                    No: Keep walking forward.
                    They reached a river. Zara pointed to a wooden bridge, and they crossed it.
                </p>
                <img
                    src="https://i.postimg.cc/BQY1H9Fx/Designer4.jpg"
                    alt="Example of a Decision Tree"
                    className="intro-image"
                />
            </section>
            <section className="intro-section">
                <p>
                    Question 3: Is there a golden bird in the tree?

                    Yes: Follow it to the treasure!
                    No: Keep following the map.
                    They saw a golden bird perched high on a tree. "There it is!" Aryan exclaimed. They followed the bird and found a chest sparkling with treasure.

                </p>
                <img
                    src="https://i.postimg.cc/vZwDWYBx/Designer5.jpg"
                    alt="Example of a Decision Tree"
                    className="intro-image"
                />
            </section>
            <section className="intro-section">
                <h2>Building Decision Tree</h2>
                <p>
                    "Now you know how to use a decision tree," said Olive. "But the real power lies in building your own!"

                    The kids decided to make a decision tree for the next adventurers. They thought of questions that would guide others to the treasure, like:

                    Does the path have sunlight?
                    Do you see a blue butterfly?
                    They added branches for each question, connecting paths until they reached the treasure.

                    "Wow, it’s like solving a puzzle and drawing a map at the same time!" said Zara.
                </p>
                {/* <img
                    src="decision-tree-example.png"
                    alt="Example of a Decision Tree"
                    className="intro-image"
                /> */}
            </section>
            <section className="intro-section">
                <h2>Lesson of the Tree</h2>
                <p>
                    Olive nodded wisely. "Decision trees are not just for treasures," she said. "They’re used in many places—like solving problems, making decisions, and even training computers to think! Remember, every decision leads to a new path."

                    The kids waved goodbye to Olive, carrying their treasure and the wisdom of the magical decision tree. From that day on, they saw decisions as exciting adventures, with each choice leading to new possibilities.
                </p>
                {/* <img
                    src="decision-tree-example.png"
                    alt="Example of a Decision Tree"
                    className="intro-image"
                /> */}
            </section>

            <section className="interactive-example">
                <h2>Explore a Decision Tree</h2>
                <p>Let's explore Decision Trees through an example. Hit the button ↙️↙️</p>
                {/* <img
                    src="interactive-tree.png"
                    alt="Interactive Decision Tree Example"
                    className="example-image"
                /> */}
            </section>

            <footer className="module-footer">
                <button className="next-button" onClick={handleNextClick}>
                    Next: Deep Dive
                </button>
            </footer>
        </div>
    );
};

export default ModulePage;
