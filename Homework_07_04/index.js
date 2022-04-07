const toDosTable = document.querySelector('.table');
const list = document.querySelectorAll('.list');

const BUSINESS_ENTITY_STATUSES = [
  {
    title: 'Not Validated',
    validated: 'not_validated'
  },
  {
    title: 'Valid',
    validated: 'validated'
  },
  {
    title: 'Validation Failed KYC',
    validated: 'validation_failed_kyc'
  },
  {
    title: 'Validation Failed OFAC',
    validated: 'validation_failed_ofac'
  },
  {
    title: 'Validation Failed Credit',
    validated: 'validation_failed_credit'
  },
  {
    title: 'Validation Failed KYC Credit',
    validated: 'validation_failed_kyc_credit'
  }
];

const PAYMENT_PLANS = [
  {
    id: 'gdh5h5151515h2t',
    planName: 'Standart',
  },
  {
    id: '5f515v1515f6',
    planName: 'Low'
  },
  {
    id: '5f515v1515f5',
    planName: 'Max'
  }
]

const businessEntities = [
  {
    city: "Edmonton",
    createdAt: "2022-03-28T13:41:06Z",
    id: "51se5eg15ser153515es3rg",
    merchantId: "",
    name: "Alex Inc",
    planId: "gdh5h5151515h2t",
    state: "US-AK",
    status: "not_validated",
  },
  {
    city: "Camptown",
    createdAt: "2022-03-28T13:41:06Z",
    id: "srt3b881srt618618srt618t",
    merchantId: "",
    name: "Alex Inc 2",
    planId: "gdh5h5151515h2t",
    state: "US-AK",
    status: "validated",
  },
  {
    city: "Chicago",
    createdAt: "2022-03-28T13:41:06Z",
    id: "srth351srth15trh13",
    merchantId: "",
    name: "Mego Inc",
    planId: "5f515v1515f6",
    state: "US-AK",
    status: "validation_failed_ofac",
  },
  {
    city: "California",
    cratedAt: "2022-03-28T13:41:06Z",
    id: "srth7htsr1trsh424212strh",
    merchantId: "",
    name: "Nick Inc",
    planId: "5f515v1515f5",
    state: "US-AK",
    status: "validated",
  },
]

let getInformation = '';
let selector = [];
let usersId = [];
let empty = [];
let renderTodos = [];

const findValidated = () => {
  const someItem = BUSINESS_ENTITY_STATUSES.filter(item => item.validated ===  getInformation);
  console.log(someItem, getInformation);
  const dateItem = Object.entries(someItem).map(([key, value]) => value.validated).join('');

  findUser(dateItem);
};

function findUser (dateItem) {
  const dateFuckingUser = businessEntities.filter(item => item.status === dateItem);
  console.log(dateItem, dateFuckingUser);
  usersId = Object.entries(dateFuckingUser).map(([key, value]) => value.planId);
  console.log('get id', usersId);
  selector = dateFuckingUser;
};

function fundPayment () {
  usersId.forEach(itemId => {
    PAYMENT_PLANS.forEach(item =>  (item.id === itemId) ? empty.push(item) : []);
  });
};

function joinArrayTogether () {
  empty.forEach(element => {
    const joinArray = selector.map((item, i) => ({...item, ...empty[i]}));
    renderTodos = joinArray;
    console.log('render',renderTodos);
  });
};

function render () {

  renderTodos.forEach(item => {
    let tr = document.createElement('tr')
    let nameUser = document.createElement('td');
    let location = document.createElement('td');
    let id = document.createElement('td');
    let status = document.createElement('td');
    let planName = document.createElement('td');
  
    toDosTable.append(tr);
    tr.append(nameUser, location, id, status, planName);
   
    nameUser.innerHTML= item.name;
    location.innerHTML = item.city;
    planName.innerHTML = item.planName;
    id.innerHTML = item.id;
    status.innerHTML = item.status;
  });
};

list.forEach(list => {
  list.onclick = event => {
    getInformation = event.target.textContent
    empty = [];
    findUser();
    findValidated();
    fundPayment();
    joinArrayTogether();
    render();
  };
});
