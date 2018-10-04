const apn = require('apn');
const options = {
  gateway: "gateway.sandbox.push.apple.com",
  cert: __dirname+'/pem/cert.pem',
  key: __dirname +'/pem//key.pem',
  production: true
}
const apnConnection = new apn.Connection(options);

exports.push = (message) => {
  const token = 'df9184e933a7f9993c69bb515f3f4d84d545c16064cc1566c72247a2bec52457'
  const myDevice = new apn.Device(token);

  const note = new apn.Notification();
  note.badge = 3;
  note.alert = message;
  note.payload = { 'message': '안녕하세요' };
  apnConnection.pushNotification(note, myDevice);

};