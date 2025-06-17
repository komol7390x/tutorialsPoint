process.on('message', (msg) => {
    console.log(`Otaga xabar keldi: ${msg}`);
    process.send('Xabarni oldi!');
})