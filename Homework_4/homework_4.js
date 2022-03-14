const checkTypeId = document.querySelector('.checkId');
const btn_checkId = document.querySelector('.btnCheckId');
const wrapper = document.querySelector('.wrapper');
let todos =[];

fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(result => {
    todos = result;
  });

const render  = () => {
  const number = checkTypeId.value;

  const filterArray = todos.filter((item , i) => item.id == number);

  const filterDate = filterArray.reduce((acc, item) => [...acc,  item.completed, item.id] ,[]);

  filterDate.forEach(item => {
    const container = document.createElement('div');
    const todos_title = document.createElement('p');
    const todos_id =document.createElement('p');
    const delete_btn = document.createElement('button');

    delete_btn.className = 'btn_delete';
    todos_id.className = 'id_todos';
    container.className = 'container_todos';
    todos_title.className ='text_todos';

    container.append(todos_id, todos_title,  delete_btn);

    delete_btn.innerHTML= 'x';
    todos_id.innerHTML= 'id:' + filterDate[1];

      if (item === false) {
        wrapper.append(container);
        todos_title.innerHTML = 'completed';
        todos_title.classList.remove('active')
      } else  if (item === true) {
        wrapper.append(container);
        todos_title.innerHTML = 'active';
        todos_title.classList.add('active')
      }
      delete_btn.onclick = () => container.remove();
  });
}

btn_checkId.addEventListener('click', () => render ());

const blockInput = () => {
  if (checkTypeId.value !== '' && checkTypeId.value <= 200 && checkTypeId.value !== '0') {
    btn_checkId.removeAttribute('disabled');
  } else {
    btn_checkId.setAttribute('disabled', true);
  }
}

checkTypeId.oninput = () => {
  blockInput();
}
blockInput();
