const mercedesModels = [
  {
    model: 'C-Class',
    color: 'white',
    year: 2021,
    price: 45000,
    bodyType: 'sedan',
  },
  {
    model: 'E-Class',
    color: 'black',
    year: 2022,
    price: 60000,
    bodyType: 'sedan',
  },
  {
    model: 'G-Class',
    color: 'gray',
    year: 2023,
    price: 150000,
    bodyType: 'SUV',
  },
  {
    model: 'GLC',
    color: 'blue',
    year: 2020,
    price: 55000,
    bodyType: 'crossover',
  },
  {
    model: 'AMG GT',
    color: 'red',
    year: 2023,
    price: 130000,
    bodyType: 'coupe',
  },
];

// -------------------------------------------------------------

mers_process.on('message', (msg) => {
  if (msg === 'key') {
    console.log('Child: exiting.');
    process.exit(0);
  }
  if (typeof msg === 'string') {
    const result = msg.toUpperCase();
    process.send?.(mercedesModels);
  }
});