function calculateSum ()

{
   // Retrieve the values from the input fields
   var num1 = parseFloat(document.querySelector("#num1").value);
   var num2 = parseFloat(document.querySelector("#num2").value);
      
   // Calculate the sum
   var sum = num1 + num2;
   
   // Display the result in the inner HTML of the result element
   document.querySelector("#result").innerHTML = "Sum: " + sum;

}

document.getElementById("change-color-button").addEventListener("click", function() {
    var items = document.getElementsByClassName("item");
    for (var i = 0; i < items.length; i++) {
        items[i].style.color = "PINK";
    }
});


function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = `You chose: ${userChoice} <br> Computer chose: ${computerChoice} <br>`;

    
    if 
    (userChoice === computerChoice)
    
    {
        result += "It's a tie!";

    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    )
    
    {
        result += "You win!";

    } 
    
    else 
    
    {
        result += "Computer wins!";
    }

    document.getElementById("result").innerHTML = result;
}




