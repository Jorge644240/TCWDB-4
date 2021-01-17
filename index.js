let randonNumber1 = Math.ceil(Math.random() * 6);
let randonNumber2 = Math.ceil(Math.random() * 6);
console.log(randonNumber1);
console.log(randonNumber2);
document.querySelector(".img1").setAttribute("src", "images/dice"+randonNumber1+".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+randonNumber2+".png");
let h1 = document.querySelector("h1");
if (randonNumber1 === randonNumber2)
{
    h1.innerHTML = "Draw!";
}
else if (randonNumber1 > randonNumber2)
{
    h1.innerHTML = "Player 1 Wins!";
}
else
{
    h1.innerHTML = "Player 2 Wins!";
}