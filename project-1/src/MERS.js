process.on('message', (msg) => {
  if (msg === 'getData') {
    const data = { text: 'Salom dunyo'};
    process.send?.(data);
  }
});