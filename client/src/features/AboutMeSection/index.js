import React from 'react'
import "./index.scss"
import aboutMeImage from "../../assets/icons/aboutmeImage.png"

const AboutMeSection = () => {
    return (
        <div className='about-container'>
            <div className='about-content-wrapper'>
                <div className='about-content-left'>
                    <div className='about-content-left-title'>
                        About me
                    </div>
                    <div className='about-content-left-content'>
                        <div className='p-tag'>
                            {"<p>"}
                        </div>
                        <div className='content'>
                            <div className='content-hello'>
                                Hello!
                            </div>
                            <div>
                                My name is Sinan and I specialize in web developement that utilizes HTML, CSS, JS, and REACT etc.
                                I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.
                                When I'm not coding, I am writing bolgs, reading, or picking up some new hands-on art project like photography.
                                I like to have my perspective and belief systems challenged so that I see the world through new eyes.
                            </div>
                        </div>
                        <div className='p-tag'>
                            {"</p>"}
                        </div>
                    </div>
                </div>
                <div className='about-content-right'>
                    <img src={aboutMeImage} alt="about me image"/>
                </div>
            </div>
        </div>
    )
}

export default AboutMeSection;