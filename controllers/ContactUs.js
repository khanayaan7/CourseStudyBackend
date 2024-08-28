
const nodemailer = require("nodemailer");
require("dotenv").config();


exports.ContactUs=async(req,res)=>{
    try{
        const {firstname,lastname,message}=req.body;
        console.log(firstname,lastname,message)
        
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_PASS,
            }
          })
 
          let info = await transporter.sendMail({
            from: `${firstname} ${lastname}`, // sender address
            to: `khanayaan777777@gmail.com`, 
            subject: `Contact Us Page`, 
            html: `Message for You From CourseStudy Website: ${message}`, // plain text body
          });
          res.json({
            success:true
          })
    } catch(error){
        res.json({
            success:false,
            message:error.message,
            note:"Error Contacting"
        })
    }
}

