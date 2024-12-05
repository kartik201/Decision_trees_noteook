import React, { useState } from "react";
import "./conclusion.css";

const ConclusionPage = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleFinishClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="conclusion-page">
            <div className="conclusion-content">
                <h1>The Final Step of Your Journey</h1>
                <p>
                    You’ve come a long way, exploring the fascinating world of decision trees. Here's a recap of your incredible learning journey:
                </p>

                <section className="key-points">
                    <h2>Key Takeaways</h2>
                    <ul>
                        <li>
                            <strong>Structured Thinking:</strong> Decision trees help break down complex problems into manageable steps.
                        </li>
                        <li>
                            <strong>Real-World Applications:</strong> From business strategies to machine learning, decision trees are everywhere!
                        </li>
                        <li>
                            <strong>Hands-On Practice:</strong> You’ve built and visualized your own decision trees, making theory come alive.
                        </li>
                        <li>
                            <strong>Problem-Solving:</strong> Learned how to tackle decisions logically, with confidence and clarity.
                        </li>
                    </ul>
                </section>

                <section className="final-message">
                    <p>
                        Remember, every decision you make shapes your journey. Embrace the wisdom of decision trees, and let them guide you to
                        success in life, studies, and beyond. 🌟
                    </p>
                </section>

                <button className="finish-button" onClick={handleFinishClick}>
                    Finish
                </button>
            </div>

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Congratulations!🥳 Now you are a Decision Tree Champ!</h2>
                        <img
                            src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif"
                            alt="World Heavyweight Championship Celebration"
                            className="champ-gif"
                        />
                        <button className="close-button" onClick={handleClosePopup}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ConclusionPage;
