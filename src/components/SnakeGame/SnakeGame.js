import React, { useState, useEffect, useCallback } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, query, orderBy, limit, getDocs, onSnapshot, where, updateDoc, doc } from 'firebase/firestore';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import './SnakeGame.css';
import EmojiPicker from 'emoji-picker-react';
import TutorialModal from '../TutorialModal/TutorialModal';
import AudioControl from '../AudioControl/AudioControl';

// Add new constants for food types
const FOOD_TYPES = {
    NORMAL: { points: 1, symbol: '🍎' },
    BONUS: { points: 3, symbol: '🍕' },
    SPECIAL: { points: 5, symbol: '🌟' }
};

const GRID_SIZE = 20;
const CELL_SIZE = 20;


const SnakeGame = () => {


    return (
        <div className="game-wrapper">
            <div className="scores-panel">
                <div className="score-info">
                    <p>Current Score: {score}</p>
                    <p>Highest Score: {highestScore}</p>
                </div>
                <div className="high-scores">
                    <h3>High Scores</h3>
                    <ul>
                        {highScores.map((highScore) => (
                            <li key={highScore.id}>
                                <span className="player-name">{highScore.name}</span>
                                <span className="player-score">{highScore.score}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="game-container">
                {!isGameStarted && (
                    <div className="game-start">
                        <button onClick={startGame}>Play (Space)</button>
                    </div>
                )}
                {isGameStarted && !isGameOver && (
                    <div className="game-controls">
                        <button onClick={togglePause} className="pause-button" title="Press Space to Pause">
                            {isPaused ? '▶️' : '⏸️'}
                        </button>
                        <button
                            className="tutorial-button"
                            onClick={() => setShowTutorial(true)}
                            title="How to Play"
                        >
                            ❔
                        </button>
                        <AudioControl isGameStarted={isGameStarted} />
                    </div>
                )}
                {isPaused && (
                    <div className="game-paused">
                        <h2>PAUSED</h2>
                    </div>
                )}
                <div
                    className="game-board"
                    style={{
                        width: GRID_SIZE * CELL_SIZE,
                        height: GRID_SIZE * CELL_SIZE,
                    }}
                >
                    {snake.map((segment, index) => (
                        <div
                            key={index}
                            className="snake-segment"
                            style={{
                                left: segment.x * CELL_SIZE,
                                top: segment.y * CELL_SIZE,
                            }}
                        />
                    ))}
                    <div
                        className="food"
                        style={{
                            left: food.x * CELL_SIZE,
                            top: food.y * CELL_SIZE,
                        }}
                    >
                        {food.type.symbol}
                    </div>
                </div>
                {isGameOver && (
                    <div className="game-over">
                        <h2>Game Over!</h2>
                        <p>Your Score: {score}</p>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={playerName}
                            onChange={(e) => setPlayerName(e.target.value)}
                        />
                        <button onClick={saveScore}>Save Score</button>
                        <button onClick={resetGame}>Play Again</button>
                    </div>
                )}
                {showTutorial && <TutorialModal onClose={() => setShowTutorial(false)} />}
            </div>

            <div className="chat-container">
                <div className="chat-header">
                    Game Chat
                </div>
                <div className="chat-messages"
                    ref={(el) => {
                        if (el) {
                            el.scrollTop = 0; // Scroll to top thay vì scrollHeight
                        }
                    }}>
                    {messages.map((msg) => (
                        <div key={msg.id} className="message">
                            <div className="message-header">
                                <span className="message-name">{msg.name}</span>
                                <span className="message-time">{formatTime(msg.timestamp)}</span>
                            </div>
                            <div className="message-content">
                                <span className="message-text">{msg.text}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <form onSubmit={sendMessage} className="chat-input">
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                    />
                    <div className="message-input-container">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Enter your message"
                        />
                        <button
                            type="button"
                            className="emoji-button"
                            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                        >
                            😊
                        </button>
                        {showEmojiPicker && (
                            <div className="emoji-picker-container">
                                <EmojiPicker
                                    onEmojiClick={onEmojiClick}
                                    width={300}
                                    height={400}
                                />
                            </div>
                        )}
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default SnakeGame;