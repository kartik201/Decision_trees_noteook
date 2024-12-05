import React from "react";
import { useNavigate } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./coverpage.css";

const CoverPage = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/module");
    };

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <div className="cover-container">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: { color: { value: "#000" } },
                    particles: {
                        color: { value: "#ffffff" },
                        links: { enable: true, color: "#ffffff", distance: 150 },
                        move: { enable: true, speed: 2 },
                        number: { value: 50 },
                        size: { value: { min: 1, max: 5 } },
                    },
                }}
            />
            <div className="cover-content">
                <h1 className="cover-title">Understanding Decision Trees</h1>
                <p className="cover-subtitle">An Interactive Guide for Young Minds</p>
                <button className="start-button" onClick={handleStart}>
                    Let's Go
                </button>
            </div>
        </div>
    );
};

export default CoverPage;
