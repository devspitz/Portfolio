import nodemailer from 'nodemailer';

export default async function handler(event) {
  try {
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

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (error) {
    console.error("Error sending email: " + error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: ' Failed fetching images ' }),
    };
  }
};
// const data = await event.json()
// console.log(data);
// return new Response('Hello World');

