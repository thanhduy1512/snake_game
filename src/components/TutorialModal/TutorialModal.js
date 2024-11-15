import React from 'react';
import './TutorialModal.css';

const tutorialContent = [
    { type: 'header', text: 'Controls:' },
    { type: 'item', text: 'Use Arrow Keys to control the snake', icon: '⌨️' },
    { type: 'item', text: 'Press Space to Start/Pause game', icon: '⏸️' },
    { type: 'header', text: 'Objective:' },
    { type: 'item', text: 'Collect food to grow and score points', icon: '🍎' },
    { type: 'item', text: 'Avoid hitting walls and yourself', icon: '⚠️' },
    { type: 'header', text: 'Food Types:' },
    { type: 'item', text: 'Apple: 1 point', icon: '🍎' },
    { type: 'item', text: 'Pizza: 3 points', icon: '🍕' },
    { type: 'item', text: 'Star Fruit: 5 points', icon: '⭐' }
];

const TutorialModal = ({ onClose }) => (
    <div className="tutorial-modal" onClick={onClose}>
        <div className="tutorial-content" onClick={e => e.stopPropagation()}>
            <div className="tutorial-header">
                <h3 className="tutorial-title">How to Play</h3>
                <button className="close-button" onClick={onClose}>×</button>
            </div>
            <div className="tutorial-body">
                {tutorialContent.map((item, index) => (
                    <div
                        key={index}
                        className={`tutorial-item ${item.type === 'header' ? 'tutorial-header-item' : ''}`}
                    >
                        <span className="tutorial-text">
                            {item.icon && `${item.icon} `}{item.text}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default TutorialModal; 