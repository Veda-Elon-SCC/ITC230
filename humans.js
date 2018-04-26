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

function get(firstName) {
       return humans.find(function(human) {
         return human.firstName.toLowerCase() == firstName.toLowerCase();
       });
    };

console.log(get('maryanne'));

function del(){
  humans.splice(2, 1);

  }
};

console.log(del());
