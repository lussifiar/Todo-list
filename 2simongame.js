let heading1=document.querySelector('H3');
console.dir(heading1);
let level=0;
let gamestr=false;

document.addEventListener("keypress",action);
function action(event){
    if(gamestr==false){
     level++;
    heading1.innerText=`level up:${level}`;
    gamestr=true;   
     btmflash(); 
    }
    // btmflash(); 
}

function flash(a){
    a.classList.add("f");
    setTimeout(function()
{
    a.classList.remove("f");
}, 250)}

function btmflash(){
    let btm=["green","red","blue","yellow"];
    let randomindex=Math.floor(Math.random()*3);
    let color=btm[randomindex];
    let btmcolor=document.querySelector(`.${color}`);
    flash(btmcolor);
}