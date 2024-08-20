import React from 'react'
import'./Contact.css'

const Contact = () => {
        const [result, setResult] = React.useState("");
      
        const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "7fb10588-77a8-4e02-8f45-fb56b67dd0c4");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
      
          if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
          } else {
            console.log("Error", data);
            setResult(data.message);
          }
        };
  return (
    <div className='contact'>
        <div className="contact-col">
        <h1 className="text-5xl  font-bold text-gray-900 mb-4 ">Contact  Us</h1>
            <h3>Send us a message </h3>
            <p>Feel free to reach out through contact form or final our contact information below. your feedback,questions and suggestion are important to as we strive to provide exceptional service to our  Community</p>
            <ul>
                <li>Contact@nexusinfo.in</li>
                <li>8778993293</li>
                <li className='font-semibold italic'>Coimbatore</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type='text' name='name' placeholder='Enter your Name' required/>

            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your mobile' required/>

            <label>Write your message</label>
          <textarea name='message'  rows="6" placeholder='Enter Your Message'></textarea>
          <button type='submit' className='subbtn'>Submit Now</button>
          </form>
          <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact
 