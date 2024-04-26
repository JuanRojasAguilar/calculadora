const screen = document.querySelector(".screen");
const nonErasingFunction = '-' || '√' || 'sin(' || 'cos(' || 'tan(';

const changeScreen = (val) => {
  if (screen.textContent == '0') {
    screen.textContent = val;
  } else if (screen.screenContent == nonErasingFunction) {
    screen.textContent += val;
  } else {
    screen.textContent += val;
  }
}
