const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const sendGridMail = async (data) => {
  const email = { ...data, from: "valitskaya2012@gmail.com" };
  await sgMail.send(email);
  return true;
};

module.exports = sendGridMail;
