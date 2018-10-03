const nodemailer = require('nodemailer');
const FormData = require('form-data')
const axios = require('axios');
const qs = require('qs');
const fs = require('fs');

exports.send = (event) => {

  if (!event) return;

  const authEmail = null; // 보내는 사람
  const authPass = null;
  const toEmail = event.email;    // 받는 사람
  const company = event.company;  // 기업명/ 상호먕
  const name = event.name;        // 문의한 사람
  const phone = event.phone;      // 문의한 사람 전화번호
  const type = event.type;         // 이메일 발송 type(문의: 'inquire', 사례집 요청: 'request')

  const formEmail = 'yongho@vendys.co.kr';
  const vandysEmail = 'yongho@vendys.co.kr'

  let mailParams = [];
  let text = `
    기업명/상호명: ${company}
    이름: ${name}
    휴대전화번호: ${phone}
    이메일: ${toEmail}
  `
  if (type === 'inquire') {
    mailParams.push({
      from: `${formEmail}`, // sender address
      to: `${toEmail}`, // list of receivers
      subject: '[식권대장] 문의를 접수해주셔서 감사합니다.', // Subject line
      html: fs.readFileSync(__dirname + '/signup_invite.html').toString()
    });
    mailParams.push({
      from: `${formEmail}`, // sender address
      to: `${vandysEmail}`, // list of receivers
      subject: '[식권대장] 상담문의 요청이 접수 되었습니다.',
      text
    });
  } else {
    mailParams.push({
      from: `${formEmail}`, // sender address
      to: `${vandysEmail}`, // list of receivers
      subject: '[식권대장] 사례집 요청이 접수 되었습니다.',
      text: `이메일: ${toEmail}`
    });
  }
  mailParams.forEach((data, index) => {
    axios({
      method: 'post',
      url: null,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(data),
    })
    .then(function (response) {
      console.log('##### success: ')
      
      // console.log(response);
    })
    .catch(function (error) {
    });
  });
}
