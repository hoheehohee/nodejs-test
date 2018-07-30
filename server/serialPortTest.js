const SerialPort = require('serialport');
const port = new SerialPort('/dev/cu.SLAB_USBtoUART');

port.on('open', () => {
  console.log('##### : Prot Opened');
});

port.write('main screen true on', (err) => {
  if(err) { return console.log('##### Error: ', err.message) };
  console.log('##### : message written');
});

port.on('data', (data) => {
  console.log('##### data: ', data.toString());
});