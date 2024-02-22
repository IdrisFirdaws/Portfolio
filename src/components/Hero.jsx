import React from 'react'
import '../styles/hero.css'

export default function hero() {
    return (
        <div className="heroBg">
            <section className='section heroContainer'>
                <div className='heroTexts'>
                    <h1 className='heroTitle'>Hi, I'm Firdaws Idris O.</h1>
                    <p className='heroDecs'>I'm a front-end developer passionate about learning, writing, documenting and building projects that benefit developers and the world at large.</p>
                    <a className='heroContact' href="mailto:firzasi.fi@gmail.com">
                        <img src="assets/icon/email.png" alt="" className='icon' />
                        <span>Send me an Email</span>
                    </a>
                </div>

                <img className='heroImg' src="assets/hero-img.jpg" alt="me" />

                <div className="heroToplur"></div>
                <div className="heroBottomlur"></div>
            </section>
        </div>
    )
}
