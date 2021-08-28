const bla = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index, names) => {
  names[index] = name.toUpperCase();
};

bla.forEach(convertToUpperCase);
console.log(bla); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]