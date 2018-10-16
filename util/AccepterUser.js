const eUser = require('./JSON/employee.json');

exports.user = (aUser) => {
  const { accepters } = aUser;
  const { user } = eUser;
  const object = {};

  accepters.forEach((item) => {
    const id = item.id;
    const signId = item.signId;
    object[id] = signId;
  });
  const map = new Map(Object.entries(object));
  // console.log('##### object: ', object);
  // console.log('##### map: ', map);

  // user.forEach((item) => {
  //   const id = item.id;
  //   if(map.get(id)) {
  //     console.log('##### item.signid: ', item.signid);
  //     map.delete(id);
  //   }
  // });

  return map;
}