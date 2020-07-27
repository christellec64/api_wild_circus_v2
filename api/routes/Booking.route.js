const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

const { USER_MAIL, PASS_MAIL } = process.env;

router.post("/", async (req, res) => {
  const { lastname, firstname, email, selectCategory, selectShow } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: USER_MAIL,
        pass: PASS_MAIL,
      },
    });

    const mail = await transporter.verify();
    const success = await transporter.sendMail({
      from: USER_MAIL,
      to: email,
      subject: `Your reservation at ${selectShow}`,
      text: "hello",
      html: `<h4>Dear ${lastname} ${firstname},</h4>
            <h4>First of all, Thank you for your reservation !</h4>
            <p><em>We remind you that all shows are started at 20:00PM.<em></p>
            <b>Summary of your reservation:</b>
            <ul>
            <li>Show : ${selectShow}</li>
            <li>Category : ${selectCategory}</li>
            </ul>
            <p>We can't wait to see you soon at Wild Circus !</p>
      `,
    });
    res.status(201).json({ mail });
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

module.exports = router;
