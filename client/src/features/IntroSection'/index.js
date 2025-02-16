import React from 'react'
import IntroLeftComponent from '../../components/IntroLeftComponent'
import IntroRightComponent from '../../components/IntroRightComponent'
import "./index.scss"

const IntroSection = ({ introComponentData }) => {
  return (
    <div className='intro-section-container'>
        <div className='intro-section-title'>
            Developer
        </div>
        <div className='intro-section-wrapper'>
            <IntroLeftComponent introLeftComponentData={introComponentData?.introLeftComponentData || {}} />
            <IntroRightComponent/>
        </div>
    </div>
  )
}

export default IntroSection