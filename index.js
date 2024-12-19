let theImages = [1,2,3,4,5,6];
theImages[0] = './images/dice1.png'
theImages[1] = './images/dice2.png'
theImages[2] = './images/dice3.png'
theImages[3] = './images/dice4.png'
theImages[4] = './images/dice5.png'
theImages[5] = './images/dice6.png'

var p = theImages.length;

    var wichImage = Math.floor((Math.random())*6) + 1;


    var firstImageSrc="images/dice"+ wichImage +".png";
    document.querySelector(".img1").setAttribute("src",firstImageSrc);

    var wichImage1 = Math.floor((Math.random())*6) + 1;

    var firstImageSrc="images/dice"+ wichImage1 +".png";

    document.querySelector(".img2").setAttribute("src",firstImageSrc);

if (wichImage > wichImage1){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}else if(wichImage1 > wichImage){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}








