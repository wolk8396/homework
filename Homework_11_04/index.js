const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const resultOperations = document.querySelector('.result');
const sign = new Map([
  ['+', str = '+'],
  ['-', str = '-'],
  ['*', str = '*'],
  ['/', str = '/'],
  ['=', str = '='],
]);

let values1 = 0;
let values2 = 0;
let string = '';

const render = result => {
  const container = document.createElement('div');
  const resultP = document.createElement('p');
  const btn_remove =  document.createElement('button');

  resultOperations.append(container);
  container.append(resultP, btn_remove);

  resultP.innerHTML = input.value + '=' + result;

  btn_remove.onclick = () => container.remove();
};

const count = math => {
  let some = math.split(string);
  let result = 0;

  values1 = +some[0];
  values2= +(some[1]);

  const operations = new Map([
    ['+', values1 + values2],
    ['-', values1 - values2],
    ['*', values1 * values2],
    ['/', values1 / values2],
  ]);
  result = operations.get(string);

  render(result);
};

const mathSignGetStr = () => {
  let math = input.value;

  for (let i = 0; i < math.length; i++) {
    (sign.get(math[i]) !== undefined) ? string = math[i] : null;
  };
  count(math);
};

const blockInput = () => {
  let inputStr = input.value.split('');

  inputStr.forEach(item => {
    (inputStr.lastIndexOf( sign.get(item)) === inputStr.length-1) ?
      btn.setAttribute('disabled', true) :
      btn.removeAttribute('disabled');
  });
};

input.oninput = () => blockInput();

btn.onclick = () => {
  mathSignGetStr();
  input.value = '';
}
