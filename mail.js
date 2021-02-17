// ANCHOR -- Require Modules
const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

// ANCHOR -- Set Authorization For MailGun Use
const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  },
};

// ANCHOR -- Create Transporter Using Mailgun
const transporter = nodemailer.createTransport(mailGun(auth));

// ANCHOR -- Send Mail --
const sendEmail = (email, subject, text, cb) => {
  // set mail options in an object called 'mailOptions'
  // *nodemailer*
  const mailOptions = {
    from: email,
    to: "jake.thomas.nichols@gmail.com",
    subject: subject,
    text: text,
  };

  // Finally Send Email
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

// ANCHOR -- Export --
module.exports = sendEmail;
