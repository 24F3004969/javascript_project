// Get URL parameters for width and height (default 50x30)
const urlParams = new URLSearchParams(window.location.search);
let width = parseInt(urlParams.get('width')) || 50;
let height = parseInt(urlParams.get('height')) || 30;
const cellSize = 15; // Size of each cell in pixels

const canvas = document.getElementById('game-canvas');
canvas.width = width * cellSize;
canvas.height = height * cellSize;
const ctx = canvas.getContext('2d');

const scoreEl = document.getElementById('score');
const lengthEl = document.getElementById('length');
const gameOverEl = document.getElementById('game-over');
const finalScoreEl = document.getElementById('final-score');

let snake = [];
let foodX, foodY;
let direction = 'right'; // current direction
let pendingDirection = 'right'; // to prevent instant reverse
let score = 0;
let snakeLength = 3;
let gameRunning = true;
let gameInterval;

function initSnake() {
    snake = [];
    const startX = Math.floor(width / 2);
    const startY = Math.floor(height / 2);
    snake.push({x: startX, y: startY});
    snake.push({x: startX, y: startY});
    snake.push({x: startX, y: startY});
}

function placeFood() {
    do {
        foodX = Math.floor(Math.random() * (width - 2)) + 1;
        foodY = Math.floor(Math.random() * (height - 2)) + 1;
    } while (snake.some(part => part.x === foodX && part.y === foodY));
}

function draw() {
    console.log(window)
    // Clear canvas
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw walls (border)
    ctx.fillStyle = 'cyan';
    ctx.fillRect(0, 0, canvas.width, cellSize); // top
    ctx.fillRect(0, 0, cellSize, canvas.height); // left
    ctx.fillRect(0, canvas.height - cellSize, canvas.width, cellSize); // bottom
    ctx.fillRect(canvas.width - cellSize, 0, cellSize, canvas.height); // right

    // Draw food
    ctx.fillStyle = 'red';
    ctx.fillRect(foodX * cellSize, foodY * cellSize, cellSize, cellSize);

    // Draw snake
    ctx.fillStyle = 'green';
    snake.forEach(part => {
        ctx.fillRect(part.x * cellSize, part.y * cellSize, cellSize, cellSize);
    });
}

function move() {
    // Update direction if valid
    if (
        (pendingDirection === 'up' && direction !== 'down') ||
        (pendingDirection === 'down' && direction !== 'up') ||
        (pendingDirection === 'left' && direction !== 'right') ||
        (pendingDirection === 'right' && direction !== 'left')
    ) {
        direction = pendingDirection;
    }

    // Move body
    for (let i = snake.length - 1; i > 0; i--) {
        snake[i].x = snake[i - 1].x;
        snake[i].y = snake[i - 1].y;
    }

    // Move head
    const head = snake[0];
    if (direction === 'up') {
        head.y -= 1;
        if (head.y <= 0) head.y = height - 1;
    } else if (direction === 'down') {
        head.y += 1;
        if (head.y >= height) head.y = 1;
    } else if (direction === 'left') {
        head.x -= 1;
        if (head.x <= 0) head.x = width - 1;
    } else if (direction === 'right') {
        head.x += 1;
        if (head.x >= width) head.x = 1;
    }

    // Check food collision
    if (head.x === foodX && head.y === foodY) {
        snake.push({x: 0, y: 0}); // temporary tail
        placeFood();
        score += 8;
        snakeLength += 1;
        updateInfo();
    }

    // Check self collision
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            gameOver();
            return;
        }
    }

    draw();
}

function updateInfo() {
    scoreEl.textContent = score;
    lengthEl.textContent = snakeLength;
}

function gameOver() {
    clearInterval(gameInterval);
    gameRunning = false;
    finalScoreEl.textContent = `Score: ${score}`;
    gameOverEl.style.display = 'block';
}

function resetGame() {
    initSnake();
    placeFood();
    direction = 'right';
    pendingDirection = 'right';
    score = 0;
    snakeLength = 3;
    updateInfo();
    gameRunning = true;
    gameOverEl.style.display = 'none';
    draw();
    gameInterval = setInterval(move, 100);
}

// Keyboard controls
document.addEventListener('keydown', e => {
    if (!gameRunning) {
        if (e.code === 'Space') {
            resetGame();
        }
        return;
    }

    switch (e.code) {
        case 'ArrowUp':
        case 'KeyW':
            pendingDirection = 'up';
            break;
        case 'ArrowDown':
        case 'KeyS':
            pendingDirection = 'down';
            break;
        case 'ArrowLeft':
        case 'KeyA':
            pendingDirection = 'left';
            break;
        case 'ArrowRight':
        case 'KeyD':
            pendingDirection = 'right';
            break;
        case 'Escape':
            gameOver();
            break;
    }
});

// Start game
resetGame();