const date = new Date;
const year = date.getUTCFullYear();
const years = new Map ([
  [1,'first'],
  [2,'second'],
  [3,'third'],
  [4,'fourth'],
  [5,'fifth'],
]);

class Users {
  constructor(name, surname ,sex) {
    this.name = name;
    this.surname = surname;
    this.sex = sex;
  }

  getPronouns() {

   if (this.sex === 'female' ) {
      this.sex = 'her';
   } else if (this.sex === 'male') {
      this.sex = 'his';
   }
  }
};

class Students extends Users {
  constructor(name, surname, sex, admission) {
    super(name, surname, sex);
    this.admission = admission;
    this.fullName = `${this.name} ${this.surname}`;

    console.log(`${this.fullName} entered the university in ${this.admission}`);
  }

  getCourse(year) {
    let current = 0;
    current = year - this.admission;

    (current < 6) ?
      console.log(`${this.fullName} is in ${this.sex} ${years.get(current)} course`) :
      console.log(`${this.fullName} graduated university ${current} years ago`);
  }
};

const kate = new Students('Kate', 'Helton', 'female', 2018);
const mattew = new Students('Matthew', 'Perry', 'male',2019);
const rachel = new Students('Rachel', 'Green', 'female',2015);

kate.getPronouns();
kate.getCourse(year);

mattew.getPronouns();
mattew.getCourse(year);


rachel.getPronouns();
rachel.getCourse(year);

//////////////////////////////////////////////////////////////////////

const user = {
  firstName:'empty',
  surname:'empty',
  salary:'0',
  job: {
    company:'empty',
    position: 'vacant',
  },

  getFullName() {
    console.log(`${this.firstName} ${this.surname}`);
  },

  getFullJob() {
    console.log(`job ${this.job.company}: ${this.job.position}`);
  },

  getBySalary() {
    console.log(`Salary: ${this.salary} $`);
  },
};

const addNewUsers = {
  firstName:'Jack',
  surname:'Shapord',
  salary:'25000',
  job: {
    company: 'NetFlix',
    position: 'Manager, Production Finance',
  },
}

const addUser = user.getFullName.bind(addNewUsers);
addUser();

const addUserJob = user.getFullJob.bind(addNewUsers);
addUserJob();

const salaryUser = user.getBySalary.bind(addNewUsers);
salaryUser();
