const apn = require('apn');
const options = {
  gateway: "gateway.sandbox.push.apple.com",
  cert: __dirname+'/pem/cert.pem',
  key: __dirname +'/pem/key.pem',
  production: true
}
const apnConnection = new apn.Connection(options);

exports.push = (message) => {
  const token = null;
  const myDevice = new apn.Device(token);
  const note = new apn.Notification();
  note.alert = message;
  apnConnection.pushNotification(note, myDevice);

};