import React from 'react';
import './GradientButton.css';

const GradientButton = ({ buttonText }) => {
    const handleButtonClick = () => {
        window.open('https://github.com/nishanng', '_blank');
    };

    return (
        <div className="button_cont">
            <button className="btn" type="button" onClick={handleButtonClick}>
                <strong>More Projects</strong>
                <div id="container-stars">
                    <div id="stars"></div>
                </div>

                <div id="glow">
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
            </button>
        </div>
    );
};

export default GradientButton;
