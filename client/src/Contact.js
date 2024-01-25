import React, { useState, useEffect } from 'react';
// import { Turnstile } from '@turnstile/turnstile-react';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formName, setFormName] = useState('')
    const [formEmail, setFormEmail] = useState('')
    const [formPhone, setFormPhone] = useState('')
    const [formMsg, setFormMsg] = useState('')
    const [userName, setUserName] = useState('')



    //  window.onloadTurnstileCallback = function () {
    //      turnstile.render('#example-container', {
    //          sitekey: 'Y0x4AAAAAAAOC94YjmxxeTBzs',
    //          callback: function (token) {
    //              console.log(`Challenge Success ${token}`);
    //          },
    //      });
    //  }; <Turnstile sitekey="0x4AAAAAAAOC94YjmxxeTBzs" callback={handleTurnstileSubmit}  >
    //  const handleTurnstileSubmit = (token) => {
    //      console.log('Turnstile token:', token);

    //  } 



    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await fetch('/.netlify/functions/index', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    name: formName,
                    email: formEmail,
                    phone: formPhone,
                    message: formMsg
                }),
            });

        } catch (error) {
            console.error(error);
        } finally {
            setFormName('');
            setFormPhone('');
            setFormEmail('');
            setFormMsg('');
            setIsSubmitting(false);
        }
    }



    return (
        <>
            <div id="message-container">
            </div>
            <div id="contact">

                <h1>Contact</h1>
                <div className='contactFlex'>
                    <div className='contactButtons'>
                        <h2>Let's talk :)</h2>
                        <p>Devorah Kogan</p>

                        <a href="tel:2168674782" className='btn'><i className="fa-solid fa-phone"></i> 216-867-4782</a>

                        <a href="mailto:spitzdev@gmail.com" className='btn'><i className="fa-solid fa-envelope"></i> Email</a>

                        <a href="https://www.linkedin.com/in/devorah-kogan-spitz-a8b54a206" target='_blank' rel="noreferrer" className='btn'>
                            <i className="fa-brands fa-linkedin"></i> LinkedIn</a>
                    </div>
                    {isSubmitting ? <div className='response'>
                        Thank you {userName} for reaching out! <br /> Looking forward to being in touch with you, <br />Devorah
                    </div> :
                        <form className='contactForm' onSubmit={handleSubmit}>

                            <label htmlFor="name">Name</label>
                            <input type='text' required value={formName} name="name" onChange={e => setFormName(e.target.value)} />

                            <label htmlFor="email">Email</label>
                            <input type='text' required value={formEmail} name="email" onChange={e => setFormEmail(e.target.value)} />

                            <label htmlFor="phone">Phone</label>
                            <input type='text' value={formPhone} name="phone" onChange={e => setFormPhone(e.target.value)} />

                            <label htmlFor="msg">Message</label>
                            <input type='textfield' required value={formMsg} name="msg" onChange={e => setFormMsg(e.target.value)} />
                            <button className='btn'>Send <i className="fa-solid fa-arrow-right"></i></button>
                        </form>
                    }



                </div>
            </div>
        </>
    )
}
