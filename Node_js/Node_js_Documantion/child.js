process.on('message', (msg) => {
    console.log(`Ota yubordi: ${msg}`);
    process.send('Xabarni oldi!');
})