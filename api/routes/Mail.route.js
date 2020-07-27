const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

const { USER_MAIL, PASS_MAIL } = process.env;

router.post("/", async (req, res) => {
  const { lastname, firstname, email, subject, message } = req.body;
  try {
    const smtpTransport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: USER_MAIL,
        pass: PASS_MAIL,
      },
    });

    const mail = await smtpTransport.verify();

    await smtpTransport.sendMail({
      from: `${lastname} ${firstname} ${email}`,
      to: `"Wild Circus" <${USER_MAIL}>`,
      subject: subject,
      text: message,
      html: `<h4>You recieved a mail from ${lastname} ${firstname} (${email}):</h4>
            <h4>Subject : ${subject}</h4>
            <p>${message}</p>
      `,
    });
    res.status(201).json({ mail });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
