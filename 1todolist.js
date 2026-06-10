let input=document.querySelector('input');
let heading=document.querySelector('h1');
let buttom=document.querySelector('button');
let ul=document.querySelector('ul');

buttom.addEventListener('click',action);
function action(event){
    let li=document.createElement('li');
    li.innerText=input.value;
    ul.appendChild(li);
    input.value="";
    let buttom1=document.createElement('button');
    buttom1.innerText="delete";
    buttom1.classList.add("delete");
    li.appendChild(buttom1);
    buttom1.addEventListener('click',action2);
    function action2(event){
        let c=buttom1.parentElement;
       c.remove();
    }
}
