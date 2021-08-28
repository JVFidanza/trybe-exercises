// setTimeout(() => {
//     console.log('Comprar parafusos') // Comprar parafusos
//     console.log('Adicionar ao estoque') // Adicionar ao estoque
// }, 2000);

// console.log('1 - Receber roda'); // 1 - Receber roda
// console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
// console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro  


// const getPlanet = () => {
//     const mars = {
//       name: "Mars",
//       distanceFromSun: {
//         value: 227900000,
//         measurementUnit: "kilometers",
//       },
//     };
//     setTimeout(() => console.log("Returned planet: ", mars), 4000);
//   };
  
//   getPlanet(); // imprime Marte depois de 4 segundos


const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => {
    return setTimeout(() => console.log(`Mars temperature is: ${getMarsTemperature()} degree Celsius`), messageDelay);

}

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo