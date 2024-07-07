const nodemailr = require("nodemailer");

let tranporter = nodemailr.createTransport({
    service:"gmail",
    host:"smpt.gmail.com",
    secure: false,
    port:587,
    auth:{
        user: process.env.user_email,
        pass: process.env.pass_key
    }
})

const sendMailRegistration = async (to, content,subject)=>{
    const MailOption = await tranporter.sendMail({
        from: `Resunova <${process.env.user_email}>`,
        to:to,
        subject:subject,
        html:content
    })
    return MailOption
}

module.exports.sendResumePDf = async (to, name, pdfBuffer)=>{
    const mailOption = await tranporter.sendMail({
        from: `Resunova <${process.env.user_email}>`,
        to: to,
        subject: "Your Resume",
        html: `<div>
        <img src="https://i.pinimg.com/736x/46/b8/59/46b859188fcedf524746e395e52d6279.jpg" alt="e-learning" width="150"/>
        <p>Hello ${name},</p>
            <p>Find your Resume below which we have attached in the form of pdf.</p>
            <p>
            Regards,
            <br/>
            Resunova Team</p>
        </div>`,
        attachments:[
            {
                filename: "resume.pdf",
                content: pdfBuffer
            }
        ]
    })
    return mailOption
}

module.exports.registrationsuccess = async (name, email)=>{
    const subject = "Registration confirmation"
    const content = `<div>
        <img src="https://i.pinimg.com/736x/46/b8/59/46b859188fcedf524746e395e52d6279.jpg" alt="e-learning" width="150"/>
        <p>Hello ${name},</p>
            <p>Thank You registring with <b>Resunova</b>. We are exited to have you as a new member of our community
            .</p>
            <p>
            Regards,
            <br/>
            Resunova Team</p>
        </div>`
    const mailData = await sendMailRegistration(email,content,subject);
    return {success: true, message: "Email sent successfully"}
}