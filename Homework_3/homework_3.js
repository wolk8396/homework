const bet_keyboard = document.querySelectorAll('.btn');
let result = document.getElementById('inputVal');
const bet_reset = document.querySelector('.btn_reset');

const numbers = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];
const mathematicalOperations = ['/', '*', '-', '+'];

let firstValue ='';
let secondValue = '';
let signMathematicalOperations ='';
let endOperation = false;

const reset = () => {
  endOperation = false;
  firstValue ='';
  secondValue = '';
  signMathematicalOperations ='';
  result.innerHTML = 0;
}

bet_reset.addEventListener('click', () => reset());

bet_keyboard.forEach(itemBtn => {
  itemBtn.addEventListener('click', () => {
    const btnValue = itemBtn.textContent;

    if (numbers.includes(btnValue)) {
      if (secondValue  === '' && signMathematicalOperations === '') {
        firstValue += btnValue;
        result.innerHTML = firstValue;

      } else if (secondValue!== '' && endOperation ) {
        secondValue =  btnValue;
        result.innerHTML = secondValue;

      } else  if (signMathematicalOperations !== '') {
        secondValue += btnValue ;
        result.innerHTML = secondValue; 
      }

    } else if (mathematicalOperations.includes(btnValue)) {
      signMathematicalOperations = btnValue;
      result.innerHTML = signMathematicalOperations;
    }

    console.log(firstValue, signMathematicalOperations, secondValue );

    if (btnValue === '=') {
      switch (signMathematicalOperations) {
        case '+':
          firstValue = ( +firstValue) + ( +secondValue);
          break;
        case '-':
          firstValue  =(+firstValue) - (+secondValue);
          break;
        case '*':
          firstValue  = (+firstValue) * (+secondValue);
          break;
        case '/':
          firstValue  = (+firstValue) / (+secondValue);
          break;
      }
      result.innerHTML = firstValue;
      endOperation = true;
    }
  })
});

reset();
