// Parent'dan xabar olish
process.on('message', (data) => {
    console.log('Parent yubordi:', data);

    // Javob yuborish
    process.send({ javob: 'Assalomu alaykum, parent!' });
});
  