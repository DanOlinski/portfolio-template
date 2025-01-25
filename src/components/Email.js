import * as React from 'react';
import "./Email.scss"
import globalStates from '../hooks/globalStates';
import emailjs from '@emailjs/browser';

//The e-mail page can be accessed from 2 different links located in the header and also from a link located in the footer. From this page you can send an e-mail to the admin.
export default function Email() {
  const { content, setContent } = globalStates()

  const form = React.useRef();

  //The function below prevents an e-mail to be sent if any of the 3 input fields are missing (name, e-mail address, message)
  const sendEmail = (e) => {
    e.preventDefault();

    if(!e.target.name.value || e.target.name.value === 'Name'){
      return alert('Please fill in The name field')
    }

    else if(!e.target.email.value || e.target.email.value === 'e-mail address'){
      return alert('Please fill in The email field')
    }

    else if(!e.target.message.value || e.target.message.value === 'Message...'){
      return alert('Please fill in The message field')
    }

    //This app uses a service called emailjs, visit the website https://www.emailjs.com/ for more details on how to set up your own emailjs account
    else {

      return alert('This website is a template, check the source code in the repository to activate this feature')

      //the code below sends an e-mail using meailjs
      // emailjs
      // .sendForm('service_b6tfmg4', 'template_pdsqpxd', form.current, {
      //   publicKey: '<place your public key here>',
      // })
      // .then(
      //   () => {
      //     alert('Email Sent');
      //   },
      //   (error) => {
      //     console.log('FAILED...', error.text);
      //   },
      // );
      // setContent('email')
    }
    
  };

  //content is a state, this state determines if the e-mail button was clicked in order to display the e-mail page.
  const renderForm = () => {
   if(content === 'email'){
    return (
      <div className="email-content">

        <form ref={form} className="email-form" onSubmit={sendEmail}>
          <textarea required name='name' className="email-info">Name</textarea>
          <textarea required name='email' className="email-info">e-mail address</textarea>
          <textarea required name='message' className="email-body">Message...</textarea>
          <button type="submit" required className="submit">Submit</button>
        </form>
    </div>
    )
   }
  }
  
  return (
    <>
    {renderForm()}
    </>
  );
}