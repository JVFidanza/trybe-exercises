const createEmail = (name) => {
    let email = name;
    // source: https://www.w3schools.com/jsref/jsref_replace.asp
    email = email.replace(' ', '_');
    email += '@trybe.com';
    return  email;
}

const newEmployees = () => {
  const employees = {
    id1: createEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: createEmail('Luiza Drummont'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: createEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

console.log(newEmployees());