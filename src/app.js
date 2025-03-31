/*    Tic-Tac-Toe 
    Operates by user loading page:
    - user must choose to play with someone or against the computer.
    - user must choose letter to play - The other player/computer is automatically assigned the other letter.
    - when player clicks on tile that players letter is assigned to the tile 
      - Tiles assigned a letter cannot be changed until board is reset.
    - The game should announce winner when someone has three letters in a row in any direction of the board
    - Pressing the reset clears the board and allows player one to change their letter.
    - X always goes first
         

*/





const state = {
  'playerOneLetter': "",
  'playerTwoLetter':"",
  'playComputer': false,
  'currentPlayer': "",
  'isWinner': false
}

// Board
const btnOne = document.getElementById("btn-1");
const btnTwo = document.getElementById("btn-2");
const btnThree = document.getElementById("btn-3");
const btnFour = document.getElementById("btn-4");
const btnFive = document.getElementById("btn-5");
const btnSix = document.getElementById("btn-6");
const btnSeven = document.getElementById("btn-7");
const btnEight = document.getElementById("btn-8");
const btnNine = document.getElementById("btn-9");
const btnBoardReset = document.getElementById("btnReset");
const boardButtons = [btnOne, btnTwo, btnThree, btnFour, btnFive, btnSix, btnSeven, btnEight, btnNine];

const MAX_TURNS = 9;
const turnCount = 0;

function SwitchTurn() { 
  state.currentPlayer === 'x' ? state.currentPlayer = 'y' : state.currentPlayer = 'x';
  turnCount++;
  if (turnCount >= MAX_TURNS && !isWinner) {
    alert('CAT has this GAME!');
  }
  btnBoardReset.setAttribute('visible', )
}


btnOne.addEventListener("click", () => {
  btnOne.innerText = state.currentPlayer;
})


