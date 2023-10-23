import * as res from 'express/lib/response';
export const sendEmail = {req, res} => {
  try {
    Transporter.sendEmail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(400).send({ msg: 'Error', payload: error});
      } else {
        console.log("Message sent: %s" + info.response);
      }
    
    })
}