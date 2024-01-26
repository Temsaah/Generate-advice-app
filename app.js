let adviceNumber = document.getElementById("advice-number");

let title = document.getElementById("advice");

let button = document.getElementById("btn");

let dice = document.getElementById("dice");

getAdvice();

async function getAdvice() {
  let httpResp = await fetch("https://api.adviceslip.com/advice");
  let data = await httpResp.json();
  adviceNumber.innerHTML = `ADVICE <span>#${data.slip.id}</span>`;
  title.innerHTML = `“${data.slip.advice}”`;
}

button.onclick = function (e) {
  getAdvice();
  dice.classList.remove("fa-dice-five");
  dice.innerHTML = 2;
  button.setAttribute("disabled", "disabled");
  function countDown() {
    if (dice.innerHTML == 0) {
      dice.innerHTML = "";
      dice.classList.add("fa-dice-five");
      button.removeAttribute("disabled");
      clearInterval(counter);
    } else {
      dice.innerHTML -= 1;
    }
  }
  let counter = setInterval(countDown, 1000);
};
