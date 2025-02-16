import React from 'react'
import "./index.scss"

const IntroLeftComponent = ({ introLeftComponentData }) => {
  return (
    <div className='intro-left-container'>
        <div className='intro-left-wrapper'>
            <div className='intro-left-top-wrapper'>
                <div className='intro-left-image'>
                    <img src={introLeftComponentData?.imageUrl} alt="vishnu's photo" className='dev-image'/>
                </div>
                <div className='name-designation-wrapper'>
                    <div className='name-txt'>
                        {introLeftComponentData?.name}
                    </div>
                    <div className='designation-txt'>
                        {introLeftComponentData?.jobTitle}
                    </div>
                </div>
            </div>
            <div className='intro-left-bottom-wrapper'>
                <div className='intro-left-bottom-item'>
                    <div className='intro-left-icon'>
                        <img src={introLeftComponentData?.mail?.icon} alt={introLeftComponentData?.mail?.altText}/>
                    </div>
                    <div className='intro-left-bottom-content'>
                        {introLeftComponentData?.mail?.content}
                    </div>
                </div>
                <div className='intro-left-bottom-item'>
                    <div className='intro-left-icon'>
                        <img src={introLeftComponentData?.location?.icon} alt={introLeftComponentData?.location?.altText}/>
                    </div>
                    <div className='intro-left-bottom-content'>
                        {introLeftComponentData?.location?.content}
                    </div>
                </div>

                <div className='intro-left-bottom-item'>
                    <div className='intro-left-icon'>
                        <img src={introLeftComponentData?.jobType?.icon} alt={introLeftComponentData?.jobType?.altText}/>
                    </div>
                    <div className='intro-left-bottom-content'>
                        {introLeftComponentData?.jobType?.content}
                    </div>
                </div>
                <div className='intro-left-bottom-item'>
                    <div className='intro-left-icon'>
                        <img src={introLeftComponentData?.website?.icon} alt={introLeftComponentData?.website?.altText}/>
                    </div>
                    <div className='intro-left-bottom-content'>
                        {introLeftComponentData?.website?.content}
                    </div>
                </div>
                <div className='skills-container'>
                    {introLeftComponentData?.skills?.map((skill) => {
                        return <div className='skill-txt'>
                                {skill}
                            </div>
                    })}
                </div>
            </div>
        </div>
        <div className='download-csv-btn'>
            <div className='download-csv-txt'>{introLeftComponentData?.cvUrl?.content}</div>
            <img src={introLeftComponentData?.cvUrl?.icon} alt={introLeftComponentData?.cvUrl?.altText} className='download-icon'/>
        </div>
    </div>
  )
}

export default IntroLeftComponent;