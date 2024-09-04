 nodemailer= require( "nodemailer");

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
  tls: {
    rejectUnauthorized: false
}
});

const mailOptions = {
  from: email,
  to: email,
};
module.exports={mailOptions,transporter}