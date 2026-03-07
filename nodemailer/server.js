const express = require("express");
const app = express();
const nodeMailer = require("nodemailer");
require("dotenv").config();
const fs = require("fs")

app.use(express.json());

let transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.emailUser,
    pass: process.env.emailPass,
  },
});

async function sendEmail(email) {
  // transporter.sendMail({
  //     from:"sharath10kcoders@gmail.com",
  //     to:"mediboyinabalajiyadav02@gmail.com",
  //     subject:"welcome new user",
  //     text:"Hi welcome to to our application"
  // }, (err)=>{
  //     if(err){
  //         return console.log(err)
  //     }
  //     console.log("mail sent successfully")
  // })
  try {
    // console.log(email)
    await transporter.sendMail({
      from: "sharath10kcoders@gmail.com",
      to: email.mailId,
      cc:"no@replay.com",
      subject: email.subject,
      html:email.html, 
      attachments:[
        {
            filename:"hello.txt",
            content:fs.readFileSync("./hell.txt","utf-8"),
            contentType:"text"
        }
      ]
      // text:"Hi welcome to to our application",
//       html: `<!DOCTYPE html>
// <html>
// <head>
//   <meta charset="UTF-8">
//   <title>Email Template</title>
// </head>

// <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:#f4f4f4;">

//   <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4; padding:20px 0;">
//     <tr>
//       <td align="center">

//         <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:6px; overflow:hidden;">
          
//           <!-- Header -->
//           <tr>
//             <td style="background:#4CAF50; color:#ffffff; padding:20px; text-align:center; font-size:24px;">
//               Your Company Name
//             </td>
//           </tr>

//           <!-- Content -->
//           <tr>
//             <td style="padding:30px; color:#333333; font-size:16px; line-height:1.6;">
              
//               <h2 style="margin-top:0;">Hello {{Name}},</h2>

//               <p>
//                 Welcome! Thank you for joining us. We are excited to have you on board.
//               </p>

//               <p>
//                 You can now access our platform and start exploring the available features and courses.
//               </p>

//               <p style="text-align:center; margin:30px 0;">
//                 <a href="#" 
//                    style="background:#4CAF50; color:#ffffff; padding:12px 25px; text-decoration:none; border-radius:4px;">
//                    Get Started
//                 </a>
//               </p>

//               <p>
//                 If you have any questions, feel free to reply to this email.
//               </p>

//               <p>
//                 Best Regards,<br>
//                 Your Team
//               </p>

//             </td>
//           </tr>

//           <!-- Footer -->
//           <tr>
//             <td style="background:#eeeeee; padding:15px; text-align:center; font-size:12px; color:#666;">
//               © 2026 Your Company. All rights reserved.
//             </td>
//           </tr>

//         </table>

//       </td>
//     </tr>
//   </table>

// </body>
// </html>`,
    });
    console.log("mail sended");
  } catch (error) {
    console.log(error);
  }
}

app.get("/", (req, res) => {
  res.send("im healthy");
});

app.post("/feedback", async (req, res) => {
  try {
    const { email, feedback } = req.body;
    const emailOptions = {
      mailId: email,
      subject: "Thanks for feedback",
      html: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Thank You for Your Feedback</title>
</head>

<body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:#f4f4f4;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:20px;">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; padding:30px; border-radius:6px;">

<tr>
<td style="font-size:22px; font-weight:bold; color:#333;">
Thank You for Your Feedback
</td>
</tr>

<tr>
<td style="padding-top:20px; font-size:16px; color:#444;">
Hello <strong>${email}</strong>,
</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>`,
    };
    await sendEmail(emailOptions);
    res.status(200).json({message:"we are successfully registered your feedback will contact shortly"})
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
});

app.listen(process.env.port, () => {
  console.log("server started at " + process.env.port);
});
