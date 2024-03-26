import React from 'react'
import '../styles/contact.css'
import Email from './Email'

export default function contact() {
    return (
        <section id='contact' className='section contactContainer'>
            <div className="title">contact
                <div className="titleCircle"></div>
                <div className="titleCircle"></div>
                <div className="titleCircle"></div>
            </div>

            <div className="contactWrapper">
                <div className="contactLeft">
                    <div className="contactText">
                        <p>Send me an email</p>
                        <Email />
                    </div>
                </div>

                <ul className='contactRight'>
                    <li className='contactLinks'>
                        <img src="assets/icon/email.png" alt="" className='icon' />
                        <a href="mailto:firzasi.fi@gmail.com" className='contactLinkItem'>
                            <p>Firzasi.fi@gmail.com</p>
                        </a>
                    </li>

                    <li className='contactLinks'>
                        <img src="assets/icon/linkedin.png" alt="" className='icon' />
                        <a href="https://www.linkedin.com/in/firdaws-idris" className='contactLinkItem'>
                            <p>LinkedIn.com/Firdaws-Idris</p>
                        </a>
                    </li>

                    <li className='contactLinks'>
                        <img src="assets/icon/github.png" alt="" className='icon' />
                        <a href="https://github.com/IdrisFirdaws" className='contactLinkItem'>
                            <p>Github.com/IdrisFirdaws</p>
                        </a>
                    </li>

                </ul>
            </div>
            <div className="contactToplur"></div>
            <div className="contactBottomlur"></div>
        </section>
    )
}
