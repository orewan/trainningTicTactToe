
// Open and close the Form where the player choose
function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }



// Set the player and the Computer

document.getElementById('popupForm').addEventListener('submit',function(event){
  event.preventDefault();
});



document.getElementById('submit').onclick = function(event) {

    let selected = document.querySelector('input[type=radio][name=Human]:checked');
    alert(selected.value);
    let player = selected.value;
    console.log(player);
    alert(player);
    



    let selectedComputer = document.querySelector('input[type=radio][name=Computer]:checked');
    let computer = selectedComputer.value;
    
    startTheGame(player,computer);
    event.preventDefault;
}


// Set the choice  of the player and close tthe form then open the board game
function startTheGame(choiceOfTheplayer,choiceOfTheComputer){
  if(choiceOfTheplayer === "X" && choiceOfTheComputer === "Easy"){
    alert("The player choose X and Computer: Easy");
    console.log("The player choose X and Computer: Easy")
    closeForm();
  //  displayBoard();
    createBoard();
  }
  if(choiceOfTheplayer === "O" && choiceOfTheComputer === "Easy"){
    alert("The player choose O and Computer: Easy");
    closeForm();
  //  displayBoard();
    createBoard();
  }
  
  if(choiceOfTheplayer === "X" && choiceOfTheComputer === "Hard"){
    alert("The player choose X and Computer: Hard");
    closeForm();
  //  displayBoard();
    createBoard();
  }
  if(choiceOfTheplayer === "O" && choiceOfTheComputer === "Hard"){
    alert("The player choose O and Computer: Hard");
    closeForm();
  //  displayBoard();
    createBoard();
  }
  
}


// Function Board Game and Tic Tac Toe Information about the player
const gameBoard = document.querySelector("#gameBoard");
const infoDisplay = document.querySelector("#infoOfTheplayer");



// function to Display Board
/*
function displayBoard(){
  document.getElementById("gameBoard").style.display = "block";
}
*/

// Cells (Empty Array - 9 cases)

const arrayCells = ["","","","","","","","",""];

// Variable of the Circle And variable of the Cross

let go = "circle";
infoDisplay.textContent = "Circle goes first";



function createBoard(){
  
 
  
  arrayCells.forEach((theCell,index) => {
     
      const cellElement = document.createElement('div');
      cellElement.classList.add('square');

      // Add the index
      cellElement.id = index
      // Add the "O" and "X"
      cellElement.addEventListener('click', addTheSign)

      gameBoard.append(cellElement);
      
  })

 
}


function addTheSign(e){
  const signDisplay = document.createElement('div');
  signDisplay.classList.add(go);
  e.target.append(signDisplay);
  
 
  go = go === "circle" ? "cross" : "circle"
  infoDisplay.textContent = "it's turn of " + go; 
  
  e.target.removeEventListener('click', addTheSign);
  
  checkTheWinner();
  
  //Circle then Cross
  /* Loop 
  if(go = go === "circle"){
    go = go === "cross";
    infoDisplay.textContent = "it's turn of " + go;
    e.target.removeEventListener('click', addTheSign);
    
  }
  else{
    go = go === "circle" ;
    infoDisplay.textContent = "it's turn of " + go; 
    e.target.removeEventListener('click', addTheSign);
    
  }
  */
  
}


function checkTheWinner(){

  const allSquares = document.querySelectorAll('.square');


  const winningCombos = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ]


  winningCombos.forEach( array =>{
    
    const circleWins = array.every(cell =>
      allSquares[cell].firstChild?.classList.contains('circle'))

    if(circleWins){
      infoDisplay.textContent = " Player with Circle wins, Congratulations ! ";
      allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
      return    
    }
  
})
   
  winningCombos.forEach( array =>{
    
    const crossWins = array.every(cell =>
    allSquares[cell].firstChild?.classList.contains('cross'))

    if(crossWins){
      infoDisplay.textContent = " Player with Cross wins, Congratulations ! ";
      allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
      return
  }
  
})



}








/*
document.getElementById("submit").onclick = function(){


let radios = document.getElementsByName('Human');



   for (let choiceHuman of radios ){
        if(choiceHuman.checked){
        alert(choiceHuman.value)
        console.log(choiceHuman.value)
        let player = radios;
        console.log("the player 1 : " + player);
        alert("the player 1 : " + player);
        return player;

        }
        console.log("the player 2 : " + player);
        alert("the player 2: " + player);
        return player;
    }
    console.log("the player 3 : " + player);
    alert("the player 3 : " + player);
        return player;
  }
 */

 
//console.log(player);

/*
let valueForm =document.getElementById("popupForm");
console.log(valueForm);

valueForm.addEventListener("submit", (event)=>{
  const choiceOfThePlayer = new FormData(popupForm);
 let output = "";

  for(const entry of choiceOfThePlayer){
    console.log(`${output}`);
    //alert(`${output}${entry[0]}=${entry[1]}`);

    event.preventDefault();
  }
  console.log(choiceOfThePlayer.values())
  }


  
)
*/






/* Create a square with Y inside  
let x = document.getElementById("divText");
x.className = "cross";
x.innerText = "Y";

divText.appendChild(x);
----------------
The CSS
----------------
.cross{
    height: 50px;
    width: 50px;
    border: 3px black solid;
    background-color: aquamarine;
    text-align: center;
    
}
----------------
the HTML
----------------
<h1> Le nouveu Jeu </h1>
<div id="divText"></div>


*/