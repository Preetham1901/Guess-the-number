var y = Math.floor(math.random() * 10 + 1);

var x=document.getElementById("guessField").value;
  
if(x==y)
{
    alert("CONGRATUALTIONS!!!" +playername+" YOU GUESSED IT RIGHT IN "
    + guess + "GUESS ");
    guess= 1;
}

else if(x > y)
{
    guess++;
    alert("OPPS SORRY!! TRY A SMALLER NUMBER");
}
else
{
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER")
}

function playagain(){
    y=Math.floor(math.random() * 10 + 1);
}
