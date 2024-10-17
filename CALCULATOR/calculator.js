let buttons = document.querySelector ("button");
let display = document.querySelector ("#result");

buttons.addEventListener ("click", (e)=>{
    display.innerHTML = buttons.value;
});