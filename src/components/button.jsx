import React from 'react'

export default function Button({text, className, id}) {
    console.log('w-id', id)

    return (
        <a className={`${className ?? ''} cta-wrapper`}
        // onClick={(e) => {
        //     e.preventDefault();
        //     const target = document.getElementById('counter');
        //     if(target && id) {
        //         const offset = window.innerHeight * 0.5;
        //         const top = target.getBoundingClientRect().top + window.screenY - offset;
        //         window.scrollTo({top, behavior: 'smooth'})
        //     }
        // }}
        >
            <div className="cta-button group">
                <div className="bg-circle"/>
                <span className="text">{text}</span>
                <div className="arrow-wrapper">
                    <img src="images/arrow-down.svg" alt="arrow"/>
                </div>
            </div>
        </a>
    )
}
