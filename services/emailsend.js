const nodemailer = require('nodemailer');
const fs = require('fs');

exports.send = (event) => {

  if (!event) return;

  const authEmail = 'postmaster@sikdae.com'; // 보내는 사람
  const authPass = '28350410e1b5c8f7ebb447f162f6ff46';
  const formEmail = 'noreply@sikdae.com';
  const vandysEmail = 'biz@vendys.co.kr';
  const toEmail = event.email;    // 받는 사람
  const company = event.company;  // 기업명/ 상호먕
  const name = event.name;        // 문의한 사람
  const phone = event.phone;      // 문의한 사람 전화번호
  const type = event.type;         // 이메일 발송 type(문의: 'inquire', 사례집 요청: 'request')


  let transporter = nodemailer.createTransport({
    host: 'smtp.mailgun.org',
    port: 465,
    secure: false,
    service: 'mailgun',
    auth: {
      user: authEmail,
      pass: authPass
    }
  });

  let mailOptions = [];
  let text = `
    기업명/상호명: ${company}
    이름: ${name}
    휴대전화번호: ${phone}
    이메일: ${toEmail}
  `
  if (type === 'inquire') {
    mailOptions.push({
      from: `${formEmail}`, // sender address
      to: `${toEmail}`, // list of receivers
      subject: '[식권대장] 문의를 접수해주셔서 감사합니다.', // Subject line
      html: fs.readFileSync(__dirname + '/signup_invite.html').toString()
    });
    mailOptions.push({
      from: `${formEmail}`, // sender address
      to: `${vandysEmail}`, // list of receivers
      subject: '[식권대장 - test] 상담문의 요청이 접수 되었습니다.',
      text
    });
  } else {
    mailOptions.push({
      from: `${formEmail}`, // sender address
      to: `${vandysEmail}`, // list of receivers
      subject: '[식권대장] 사례집 요청이 접수 되었습니다.',
      text: `이메일: ${toEmail}`
    });
  }

  mailOptions.forEach((data, index) => {
    transporter.sendMail(data, (error, info) => {
      if (error) {
        return console.log(error);
      } else {
        console.log('##### info: ', info)
      }
    });
  });
}
