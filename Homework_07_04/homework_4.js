const input_to = document.querySelector('.to');
const input_from = document.querySelector('.from');
const btnCheck = document.querySelector('.findList');
const containerList = document.querySelector('.container-list');

const createTodos = () => {
  const start = +input_from.value;
  const end = +input_to.value;

  for (let i = start; i < end; i++) {
    fetch('https://jsonplaceholder.typicode.com/todos/'+ i)
      .then(response => response.json())
      .then(result => {
       render(result);
    });
  }
}

const render = result => {
  const div = document.createElement('div');
  const p = document.createElement('p');
  const btn = document.createElement('button');

  div.className = 'container';
  p.className ='information';
  btn.className ='remove_elements';
  div.append(p, btn);
  containerList.append(div);
  btn.innerHTML = 'X';
  p.innerHTML = Object.values(result);

  btn.onclick = () => div.remove();
}

btnCheck.onclick = () => createTodos();
