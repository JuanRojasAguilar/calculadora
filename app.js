const numberButton = document.querySelector(".number");
const screen = document.querySelector(".screen");

const clickNumber = (buttonNumber) => {
  console.log(buttonNumber);
  screen.textContent = buttonNumber;
}

