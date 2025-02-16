import React from 'react'
import "./index.scss"
import mailIcon from "../../assets/icons/mailIcon.svg"

const IntroRightComponent = () => {
  return (
    <div className='intro-right-container'>
        <div className='intro-right-wrapper-left'>
            <div className='top-wrapper'>
                <div className='top-h-opening-tag'>
                    {'<h>'}
                </div>
                <div className='top-content-h-closing-tag'>
                    <div className='top-content'>
                        Hey
                    </div>
                    <div className='top-middle-content'>
                        <span>I’m</span> <span className='sub-part'>Vishnu Vardhan Raju</span>,
                    </div>
                    <div className='top-last-content'>
                        <span className='top-content'>
                            Full-stack developer
                        </span>
                        <span className='top-h-opening-tag'>
                            {'<h/>'}
                        </span>
                    </div>
                </div>
            </div>
            <div className='bottom-wrapper'>
                <div className='p-tag'>
                    {'<p>'}
                </div>
                <div className='desc-txt'>
                    I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done,
                </div>
                <div className='p-tag'>
                    {'</p>'}
                </div>
                <div className='talk-cta-wrapper'>
                    <div className='talk-txt'>
                        let’s talk
                    </div>
                    <div className='main-btn'>
                        <img src={mailIcon} alt="mail Icon" className='mail-icon-image'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='intro-right-wrapper-right'>
            <div className='intro-right-topic'>
                <div className='topic-number'>
                    4
                </div>
                <div className='topic-content'>
                    Programming Language
                </div>
            </div>
            <div className='intro-right-topic'>
                <div className='topic-number'>
                    6
                </div>
                <div className='topic-content'>
                    Development Tools
                </div>
            </div>
            <div className='intro-right-topic'>
                <div className='topic-number'>
                    8
                </div>
                <div className='topic-content'>
                    Years of Experience
                </div>
            </div>
        </div>
    </div>
  )
}

export default IntroRightComponent