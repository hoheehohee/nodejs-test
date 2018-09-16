const express = require('express');
const async = require('async');
const { RTMClient, WebClient } = require('@slack/client');
const store = require('../controller/store');
// const router = express.Router();
const token = 'xoxb-4769004049-437470645846-Frj0cBRphfPItsfWDANoQl4T';
const rtm = new RTMClient(token);
const web = new WebClient(token);
rtm.start();

const conversationId = 'GCVEAUKRC';


exports.message = (data) => {
  if(!data) {
    console.log('##### null data: ')
    return;
  }else {
    const message = `
      식당: ${data.storename},
      장소: ${data.address},
      추천 메뉴: ${data.menuname},
      가격: ${data.price}
    `;
    rtm.sendMessage(message, conversationId)
    .then((res) => {
      console.log('Message sent: ', res.ts);
    })
    .catch((e) => {
      console.log('##### error: ', e);
    });
  }
}


// Log all incoming messages
rtm.on('message', (event) => {
  // Structure of `event`: <https://api.slack.com/events/message>
  const word = ['점심', '머먹지', '점심 메뉴', '메뉴 추천', '메뉴'];
  word.some((item) => {
    if(item === event.text) {
      try {
        store.storeSel();
      } catch (error) {
        console.log('##### try catch error: ', error)
      }
      // const menu = store.storeSel();
    }
  })
})


// Log all reactions
rtm.on('reaction_added', (event) => {
  console.log(`
   from ${event.user}: ${event.reaction}`);
});

rtm.on('reaction_added', (event) => {
  console.log('##### reaction_added : ', event);
});

// Send a message once the connection is ready
rtm.on('ready', (event) => {

  console.log('##### ready: ', event)
  // const conversationId = '';
  // rtm.sendMessage('Hello, world!', conversationId);
});



web.users.list().then((res) => {
  // console.log('##### res.users: ', res)
});


web.groups.list().then((res) => {
  // console.log('##### res.group: ', res)
});

web.channels.list().then((res) => {
  // Take any channel for which the bot is a member

  var channels = [];
  for (var i = 0; i < res.channels.length; i++) {
    // console.log('##### res.channels.length: ', res.channels[i].name) 
  }
  if (!channels) {
    console.log('가입된 채널이 없습니다.');
    return;
  }
  console.log('#####channels: ', channels)
});


// web.chat.postMessage({ channel: 'U26A2RZKL', text: 'Hello there' })
//   .then((res) => {
//     // `res` contains information about the posted message
//     console.log('Message sent: ', res.ts);
//   })
//   .catch(console.error);

// rtm.sendMessage('Hello there~~~~', conversationId)
//   .then((res) => {
//     // `res` contains information about the posted message
//     console.log('Message sent: ', res.ts);
//   })
//   .catch((e) => {
//     console.log('##### error: ', e);
//   });
