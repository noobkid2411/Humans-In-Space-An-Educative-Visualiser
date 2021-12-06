const numStars =100;
var speed = 0.002;
const spinner = document.createElement("div");
const main = document.getElementById("main");
const list = document.getElementById("dynamic-txts");
var width = document.body.clientWidth;
var height = document.body.clientHeight;
window.addEventListener("resize",function(){
    width = document.body.clientWidth; 
    height = document.body.clientHeight;
})
// creating an empty array
var Stars = new Array();
// initializing the array with Star objects
for (let i = numStars;i>0;i--){
Stars.push(new Object());
}
for (let i = numStars-1;i>=0;i--){
   
   Stars[i].div = document.createElement("div");
   Stars[i].div.classList.add("stars");

    random(i);
    updatePosition(i);
    main.appendChild(Stars[i].div);
}
function random(i){
    Stars[i].x = Math.random()*width -width/2;   // assigns x value of star from -width/2 to width/2
    if (Stars[i].x >-20 && Stars[i].x <20){
        Stars[i].x += 100;
    }
    Stars[i].y = Math.random()*height -height/2;
    if (Stars[i].y >-20 && Stars[i].y <20){
        Stars[i].y += 100;
    }
    Stars[i].z = 1;
    Stars[i].speed = 5+ Math.random()*5;
}
function updatePosition(i){
Stars[i].div.style.left =  Stars[i].px+"px";
Stars[i].div.style.top =  Stars[i].py + "px";
Stars[i].div.style.opacity = map_range(Stars[i].z,0.1,1,1.5,0);
}
var myInterval = setInterval(function(){
    
    for (let i = numStars-1;i>=0;i--){
        Stars[i].z -= speed*Stars[i].speed;
        Stars[i].px = Stars[i].x/Stars[i].z + width/2 ;
        Stars[i].py = Stars[i].y/Stars[i].z  + height/2;
        if (Stars[i].py >= height ||Stars[i].px >= width||Stars[i].z <0){
           random(i);
        }
 updatePosition(i);

}
},20
);
function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
var snd = new Audio("sounds/theme.mp3");

var button = document.getElementById("button");
var heading = document.getElementById("heading");
button.addEventListener("click",function(){
    button.remove();
    heading.remove();
    spinner.classList.add("spinning-loader");
    main.appendChild(spinner);
    snd.play();
    var increaseInterval = setInterval(function(){
        speed += 0.00005;
        
        if(speed>0.006){
            main.classList.add("white-background");
            setTimeout(end,10500);
            clearInterval(increaseInterval);
            return;
        }
    },100);

// clearInterval(myInterval);
// Stars.sort(function(a, b){return a.x - b.x;});
// var i = numStars-1;
// var deleteInterval = setInterval(function(){
//     Stars[i].div.remove();
//     if(i==0){
//         clearInterval(deleteInterval);
//         return;
//     }
//     i--;
// },100);


});
function end(){
    clearInterval(myInterval);
    main.classList.remove("white-background");
    setTimeout(typing,2100);
    for(let i = numStars-1;i>=0;i--){
                Stars[i].div.remove();
            }
    spinner.remove();
   
}
function typing(){
    main.classList.add("typing-body");
    list.classList.remove("not-visible");
    setTimeout(function(){
        window.open("home.html","_self");
    },20000);
}