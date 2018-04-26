var humans = [
  { firstName : "John", lastName : "Smith", born : 1970},
  { firstName : "Mary", lastName : "Smith", born : 1972},
  { firstName : "Johnathan", lastName : "Smith", born : 2000},
  { firstName : "Maryanne", lastName : "Smith", born : 2002},
  { firstName : "Pat", lastName : "Smith", born : 2004}
];

function getAll() {
       return humans;
    };

console.log(getAll());

function getOne() {
       return humans[3];
    };

console.log(getOne());

function get() {
       return humans[3].firstName + ' ' + humans[3].lastName + ', born: ' + humans[3].born;
    };

console.log(get());
