const HID = require('node-hid');
const devices = HID.devices();
let symbolDevices = []

devices.forEach((device) => {
  if (device.vendorId === parseInt('0x05e0', 16)) {
    console.log('##### device: ', device)
    try {
      const hid = HID.HID(device.vendorId, device.productId);
      console.log('##### hid: ', hid)
      symbolDevices.push(hid);
      console.log('##### hid: ', hid)
    } catch (error) {
      console.log('##### error: ', error)
    }
  };
})

console.log('##### symbolDevices: ', symbolDevices)

