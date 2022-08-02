

let screen = document.getElementById("screen");
// console.log(screen);
let screenValue = "";
let buttonTxt = "";


let buttons = document.querySelectorAll("button");

for (const item of buttons) {
    item.addEventListener("click", (e) => {
        buttonTxt = e.target.innerText;
        //  console.log(buttonTxt);

        if (buttonTxt == "C") {
            screen.value = "";
            screenValue = "";
        }
        else if (buttonTxt == '=') {
            let result = eval(screenValue);
            screen.value = result;
        }

        else {
            screenValue += buttonTxt;
            screen.value = screenValue;
        }
    })
}