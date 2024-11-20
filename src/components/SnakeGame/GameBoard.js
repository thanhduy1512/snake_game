import React, { useRef, useEffect } from 'react';

const GameBoard = ({ snake, food, gridSize, cellSize }) => {
  const canvasRef = useRef(null);

  // Function to draw the game state
  const drawGame = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = gridSize * cellSize;
    canvas.height = gridSize * cellSize;

    // Set background color (similar to .game-board background color)
    ctx.fillStyle = '#808080'; // Set the background to gray
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill the entire canvas with background color

    // Draw the grid (similar to background-image in CSS)
    ctx.strokeStyle = '#666';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += cellSize) {
      for (let y = 0; y < canvas.height; y += cellSize) {
        ctx.strokeRect(x, y, cellSize, cellSize);
      }
    }

    // Draw the snake
    ctx.fillStyle = '#50fa7b';
    snake.forEach((segment) => {
      ctx.fillRect(
        segment.x * cellSize,
        segment.y * cellSize,
        cellSize,
        cellSize
      );
    });

    // Draw the food
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * cellSize, food.y * cellSize, cellSize, cellSize);

    // If food has a symbol, render it in the center
    if (food.type && food.type.symbol) {
      ctx.fillStyle = 'black';
      ctx.font = '16px sans-serif';
      const symbolWidth = ctx.measureText(food.type.symbol).width;
      const x = food.x * cellSize + (cellSize - symbolWidth) / 2;
      const y = food.y * cellSize + cellSize / 2 + 5;
      ctx.fillText(food.type.symbol, x, y);
    }
  };

  // Use requestAnimationFrame for smoother and more efficient updates
  useEffect(() => {
    const updateCanvas = () => {
      drawGame(); // Draw the game
      requestAnimationFrame(updateCanvas); // Request the next frame
    };

    // Start the animation loop
    requestAnimationFrame(updateCanvas);
  }, [snake, food, gridSize, cellSize]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        border: '2px solid #333', // Border color is #333 as per the original game board
        borderRadius: '4px',
      }}
    />
  );
};

export default GameBoard;
