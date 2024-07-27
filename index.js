const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let board = Array(9).fill(null);

cells.forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});

function handleCellClick(e) {
  const index = e.target.dataset.index;
  
  if (board[index] || checkWinner()) {
    return;
  }
  
  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;
  
  if (checkWinner()) {
    setTimeout(() => alert(`${currentPlayer} wins!`), 100);
  } else if (board.every(cell => cell)) {
    setTimeout(() => alert('It\'s a draw!'), 100);
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWinner() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  return winningCombos.some(combo => {
    return combo.every(index => board[index] === currentPlayer);
  });
}
