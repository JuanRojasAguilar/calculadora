const numberButton = document.querySelector(".number");
let screen = document.querySelector(".screen");
const initialState = {
  screen: 0,
  isFirstNum: true,
  openBracket: false,
  openingNumber: true,
  operation: "",
};

let state = {
  screen: screen.textContent,
  isFirstNum: true,
  openBracket: false,
  openingNumber: true,
  operation: "",
};

const clickNumber = (buttonNumber) => {
  console.log(buttonNumber);
  if (state.isFirstNum == true || state.isFirstNum == true) {
    if (buttonNumber != 0) {
      screen.textContent = buttonNumber;
      state.isFirstNum = false;
      state.operation += `${buttonNumber}`;
    }
  } else {
    screen.textContent += buttonNumber;
    state.operation += `${buttonNumber}`;
  }
  console.log(screen.textContent);
};

const clickAction = (action) => {
  switch (action) {
    case "sin(":
      if (state.isFirstNum === true) {
        state.isFirstNum = false;
        screen.textContent = action;
      } else {
        screen.textContent += action;
      }
      state.operation += "Math.sin(";
      break;
    case "cos(":
      if (state.isFirstNum === true) {
        state.isFirstNum = false;
        screen.textContent = action;
      } else {
        screen.textContent += action;
      }
      state.operation += "Math.cos(";
      break;
    case "tan(":
      if (state.isFirstNum === true) {
        state.isFirstNum = false;
        screen.textContent = action;
      } else {
        screen.textContent += action;
      }
      state.operation += "Math.tan(";
      break;
    case "^":
      if (state.isFirstNum === true) {
        state.isFirstNum = false;
        screen.textContent = action;
      } else {
        screen.textContent += action;
      }
      state.operation += "**";
      break;
    case "root":
      if (state.isFirstNum === true) {
        state.isFirstNum = false;
        screen.textContent = `(√`;
      } else {
        screen.textContent += `(√`;
      }
      state.operation += "Math.sqrt(";
      break;

    default:
      if (state.isFirstNum === true) {
        state.isFirstNum = false;
        screen.textContent = action;
      } else {
        screen.textContent += action;
      }
      state.operation += action;
      break;
  }
};

const clearScreen = () => {
  screen.textContent = initialState.screen;
  state.isFirstNum = initialState.isFirstNum;
  state.openBracket = initialState.openBracket;
  state.operation = initialState.operation;
  console.log(state);
};

const equal = () => {
  try {
    console.log(state.operation);
    const res = eval(state.operation);
    screen.textContent = res;
  } catch (e) {
    screen.textContent = "Syntax Error";
  }
};
