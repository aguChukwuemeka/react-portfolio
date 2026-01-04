import React from 'react'
import {navLinks} from "../constance/index.jsx";

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="inner">
                <a href="#hero" className="logo">AGU | Chukwuemeka</a>
                <nav className="desktop">
                    <ul>
                        {navLinks.map(({link, name}, index) => {
                            console.log('nav: ', name, link);
                            <li key={index} className="group">
                                <a href={link}>
                                    <span>{name}</span>Tanbcjg
                                    <span className="underline" />
                                </a>
                            </li>
                        })}
                    </ul>
                </nav>
                <a href="#Contact" className="contact-btn group">
                    <span className="inner">
                        <span>Contact me</span>
                    </span>
                </a>
            </div>
        </header>
    )
}