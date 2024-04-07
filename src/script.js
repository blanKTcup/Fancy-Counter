const counterValueEl = document.querySelector('.counter__value');
const resetButtonEl = document.querySelector('.counter__reset-button');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const increaseButtonEl = document.querySelector('.counter__button--increase');

resetButtonEl.addEventListener('click', function() {
  const currentValue = counterValueEl.textContent;
  const currentValueAsNumber = +currentValue;
  let newValue = currentValueAsNumber;
  newValue = 0;
  
  counterValueEl.textContent = newValue;
});

decreaseButtonEl.addEventListener('click', function() {
  const currentValue = counterValueEl.textContent;
  const currentValueAsNumber = +currentValue;
  let newValue = currentValueAsNumber - 1;
  
  counterValueEl.textContent = newValue;
});

increaseButtonEl.addEventListener('click', function() {
  const currentValue = counterValueEl.textContent;
  const currentValueAsNumber = +currentValue;
  let newValue = currentValueAsNumber + 1;
  
  counterValueEl.textContent = newValue;
});