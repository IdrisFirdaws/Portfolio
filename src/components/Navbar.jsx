import React, { useState, useEffect } from 'react'
import '../styles/navbar.css'

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };


    return (
        <div className={`navbarContainer ${scrolling ? 'navBg' : ''}`}>

            <h2 className="navbarBrand"><a href="#">Firdaws.io</a></h2>

            <div className='navMenu'>
                <div onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? (
                        <img src="assets/icon/close.png" alt="" className='navbarButton' />
                    ) : (
                        <img src="assets/icon/menu.png" alt="" className='navbarButton' />
                    )}
                </div>
            </div>


            <ul className={`navMenuItems ${menuOpen ? 'navMenuItemsOpen' : ''}`} onClick={() => setMenuOpen(false)}>
                <li className='nav'>
                    <a href="#about">About</a>
                </li>
                <li className='nav'>
                    <a href="#skill">Skills</a>
                </li>
                <li className='nav'>
                    <a href="#project">Projects</a>
                </li>
                <li className='nav'>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
