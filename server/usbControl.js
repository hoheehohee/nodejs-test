const HID = require('node-hid');
const devices = HID.devices();
let symbolDevices = []

devices.forEach((device) => {
    // console.log('##### device: ', device)
  if (device.vendorId === parseInt('0x05e0', 16)) {
    try {
      const hid = new HID.HID(device.vendorId, device.productId);
      symbolDevices.push(hid);
    } catch (error) {
    }
  };
})
symbolDevices[0].on("data", (data) => {
  console.log('##### data1: ', data);
});
symbolDevices[0].read(((err, data) => {
  console.log('##### data2: ', data);
  console.log('##### err: ', err)
}));

console.log('##### symbolDevices: ', symbolDevices);

