import React, { useEffect, useState } from 'react';
// import Tree from "react-d3-tree";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./simulator.css";

const EnhancedDecisionTreeSimulator = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();

    const handleNextClick = () => {
        navigate("/quiz");
    };
    const [inputs, setInputs] = useState({
        age: "",
        student: "",
        creditScore: ""
    });
    const [decision, setDecision] = useState(null);

    const handleInputChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const simulateDecisionTree = () => {
        let result = "";


        if (inputs.age === "Young") {
            if (inputs.student === "Yes") {
                result = "Yes";
            } else {
                result = "No";
            }
        } else if (inputs.age === "Middle Age") {
            result = "Yes";
        } else if (inputs.age === "Older Adult") {
            if (inputs.creditScore === "Excellent") {
                result = "Yes";
            } else {
                result = "No";
            }
        }

        setDecision(result);
    };

    return (
        <div className="enhanced-decision-tree">
            <h1>Decision Tree Model</h1>
            <p>Now, lets see if our model predics correct results or not!</p>


            <div className="input-section">
                <h2>Provide Input</h2>
                <label>
                    Age:
                    <select name="age" value={inputs.age} onChange={handleInputChange}>
                        <option value="">Select Age Group</option>
                        <option value="Young">Young</option>
                        <option value="Middle Age">Middle Age</option>
                        <option value="Older Adult">Older Adult</option>
                    </select>
                </label>
                {inputs.age === "Young" && (
                    <label>
                        Student:
                        <select name="student" value={inputs.student} onChange={handleInputChange}>
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </label>
                )}
                {inputs.age === "Older Adult" && (
                    <label>
                        Credit Score:
                        <select name="creditScore" value={inputs.creditScore} onChange={handleInputChange}>
                            <option value="">Select</option>
                            <option value="Regular">Regular</option>
                            <option value="Excellent">Excellent</option>
                        </select>
                    </label>
                )}
                <button onClick={simulateDecisionTree}>Simulate</button>
            </div>

            {decision && (
                <motion.div
                    className="decision-result"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2>Decision</h2>
                    <p>The decision is: <strong>{decision}</strong></p>
                    <p>Yayy! Our model predicted correct results</p>
                </motion.div>
            )}
            <button className="next-button" onClick={handleNextClick}>
                Quiz:Are you ready?
            </button>
        </div>
    );
};

export default EnhancedDecisionTreeSimulator;
