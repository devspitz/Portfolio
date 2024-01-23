import nodemailer from 'nodemailer';

export default async function handler(event) {
  const data = await event.json()
  const { name, phone, email, message } = data;

  const messageString = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;


  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN
    }
  });

  let mailOptions = {
    from: 'spitzdev@gmail.com',
    to: 'spitzdev@gmail.com',
    subject: 'New Contact Request',
    text: messageString
  };


  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });

  // const data = await event.json()
  // console.log(data);
  // return new Response('Hello World');
}

