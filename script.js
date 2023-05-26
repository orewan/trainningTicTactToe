function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }

  function openForm() {
    document.getElementById("popupForm").style.display = "none";
  }





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


function startTheGame(choiceOfTheplayer,choiceOfTheComputer){
  if(choiceOfTheplayer === "X" && choiceOfTheComputer === "Easy"){
    alert("The player choose X and Computer: Easy");
    console.log("The player choose X and Computer: Easy")
  }
  if(choiceOfTheplayer === "O" && choiceOfTheComputer === "Easy"){
    alert("The player choose O and Computer: Easy");
  }
  
  if(choiceOfTheplayer === "X" && choiceOfTheComputer === "Hard"){
    alert("The player choose X and Computer: Hard");
  }
  if(choiceOfTheplayer === "O" && choiceOfTheComputer === "Hard"){
    alert("The player choose O and Computer: Hard");
  }
  
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