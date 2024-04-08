const counterEl = document.querySelector('.counter');
const counterTitleEl = document.querySelector('.counter__title');
const counterValueEl = document.querySelector('.counter__value');
const resetButtonEl = document.querySelector('.counter__reset-button');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const increaseButtonEl = document.querySelector('.counter__button--increase');

function decrementCounter() {
  const currentValue = counterValueEl.textContent;
  const currentValueAsNumber = +currentValue;
  let newValue = currentValueAsNumber - 1;

  if (newValue < 0) {
    newValue = 0;
  } 

  counterValueEl.textContent = newValue;
}

decreaseButtonEl.addEventListener('click', decrementCounter);

function incrementCounter() {
  const currentValue = counterValueEl.textContent;
  const currentValueAsNumber = +currentValue;
  let newValue = currentValueAsNumber + 1

  if (newValue > 5) {
    newValue = 5;
    counterTitleEl.innerHTML = 'LIMIT! BUY <b>PRO</b> FOR >5';
    counterEl.classList.add('counter--limit');
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }

  counterValueEl.textContent = newValue;
}

increaseButtonEl.addEventListener('click', incrementCounter);

function resetButton() {
  counterValueEl.textContent = 0;
  counterEl.classList.remove('counter--limit');
  counterTitleEl.textContent = 'Fancy Counter';
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;
}

resetButtonEl.addEventListener('click', resetButton);

node.addEventListener('keydown', function(event) {
  const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
  if (key == "Up") {
    incrementCounter();
  } else if (key == "Down") {
    decrementCounter();
  } else if (key == "r") {

  }
});

