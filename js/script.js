let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button ");
let screenValue = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log("button text is", buttonText);
        if (buttonText == "X") {
            buttonText = "*";
            screen.value = buttonText;

        } else if (buttonText == "=") {

        }
    });
}