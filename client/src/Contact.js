import React, { useState, useEffect } from 'react';
// import { Turnstile } from '@turnstile/turnstile-react';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formName, setformName] = useState('')
    const [formEmail, setformEmail] = useState('')
    const [formPhone, setformPhone] = useState('')
    const [formMsg, setformMsg] = useState('')
    const [userName, setUserName] = useState('')



    useEffect(() => {
        setUserName(formName);
    }, [isSubmitting])

    useEffect(() => {
        setUserName(formName);
        // Make an HTTP request to the serverless function endpoint
        fetch('/.netlify/functions/hello-world/hello-world', {
            method: 'POST',
            body: JSON.stringify(userName),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json()) // Parse the JSON response
            .then(data => {
                // Use the data from the serverless function to show a message on your frontend
                const message = data.message;
                // For example, you could update a DOM element with the message
                document.getElementById('message-container').innerText = message;
            })
            .catch(error => {
                // Handle any errors that occur during the fetch
                console.error('Error:', error);
            });
    }, [isSubmitting])

    //  window.onloadTurnstileCallback = function () {
    //      turnstile.render('#example-container', {
    //          sitekey: 'Y0x4AAAAAAAOC94YjmxxeTBzs',
    //          callback: function (token) {
    //              console.log(`Challenge Success ${token}`);
    //          },
    //      });
    //  }; 
    //  const handleTurnstileSubmit = (token) => {
    //      console.log('Turnstile token:', token);

    //  } 



    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await fetch('http://localhost:3001/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formName,
                    email: formEmail,
                    phone: formPhone,
                    message: formMsg
                }),
                mode: 'cors'
            });

            setformName('');
            setformPhone('');
            setformEmail('');
            setformMsg('');
        } catch (error) {
            console.error(error);
        } finally {
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

                        <a href="tel:2168674782" className='btn'><i className="fa-solid fa-phone"></i> Call / Message</a>

                        <a href="mailto:spitzdev@gmail.com" className='btn'><i className="fa-solid fa-envelope"></i> Email</a>

                        <a href="https://www.linkedin.com/in/devora-kogan-spitz-a8b54a206/" target='_blank' rel="noreferrer" className='btn'>
                            <i className="fa-brands fa-linkedin"></i> LinkedIn</a>
                    </div>
                    {isSubmitting ? <div className='response'>
                        Thank you {userName} for reaching out! <br /> Looking forward to being in touch with you, <br />Devorah
                    </div> :
                        <form className='contactForm' onSubmit={handleSubmit}>

                            <label htmlFor="name">Name</label>
                            <input type='text' value={formName} name="name" onChange={e => setformName(e.target.value)} />

                            <label htmlFor="email">Email</label>
                            <input type='text' value={formEmail} name="email" onChange={e => setformEmail(e.target.value)} />

                            <label htmlFor="phone">Phone</label>
                            <input type='text' value={formPhone} name="phone" onChange={e => setformPhone(e.target.value)} />

                            <label htmlFor="msg">Message</label>
                            <input type='textfield' value={formMsg} name="msg" onChange={e => setformMsg(e.target.value)} />
                            {/*<Turnstile sitekey="0x4AAAAAAAOC94YjmxxeTBzs" callback={handleTurnstileSubmit}  >  */}                        />
                            <button className='btn'>Send <i className="fa-solid fa-arrow-right"></i></button>
                        </form>
                    }



                </div>
            </div>
        </>
    )
}