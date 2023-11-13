import React, { useState, useEffect } from 'react'

export default function Contact() {

    const [formData, setformData] = useState('')
    const [formName, setformName] = useState('')
    const [formEmail, setformEmail] = useState('')
    const [formPhone, setformPhone] = useState('')
    const [formMsg, setformMsg] = useState('')

    useEffect(() => {
        console.log(`The persons name is ${formName}`)
    }, [formName])

    return (
        <>
            <div id="contact">

                <h1>Contact</h1>
                <h2>Devora Kogan</h2>
                <a href="tel:2168674782">Call</a>

                <a href="mailto:spitzdev@gmail.com">Email</a>

                <form className='contactForm'>
                    <input type='text' value={formName} name="name" />
                    <label for="name">Name</label>
                    <input type='text' value={formEmail} name="email" />
                    <label for="email">Email</label>
                    <input type='text' value={formPhone} name="phone" />
                    <label for="phone">Phone</label>
                    <input type='textfield' value={formMsg} name="msg" />
                    <label for="msg">Message</label>
                    <button onClick={() => setformData(formData + 1)}>Send</button>
                    <div className='response'>Thank you, {formName} for reaching out. <br /> Looking forward to being in touch with you, Devorah</div>
                </form>
                <div className='clear'></div>

            </div>
        </>
    )
}