// import React, { useState } from 'react';
// import { SMTPClient } from 'emailjs';

// export const EmailForm = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');

//   const handleSendEmail = () => {
//     const client = new SMTPClient({
//       user: 'user',
//       password: 'password',
//       host: 'smtp.your-email.com',
//       ssl: true,
//     });

//     const message = {
//       text: 'Hello, this is a test email!',
//       from: `${firstName} ${lastName} <${email}>`,
//       to: 'recipient@example.com', 
//       subject: 'Testing emailjs with React',
//     };

//     client.send(message, (err, message) => {
//       if (err) {
//         console.error('Error sending email:', err);
//       } else {
//         console.log('Email sent successfully:', message);
//       }
//     });
//   };

//   return (
//     <div>
//         <div>
//             <p>Quote Summary</p>
//             <p>Quote Estimate</p>
//         </div>
//       <label>
//         First Name:
//         <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Last Name:
//         <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Mobile Number:
//         <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} />
//       </label>
//       <br />
//       <button onClick={handleSendEmail}>Send Email</button>
//     </div>
//   );
// };

