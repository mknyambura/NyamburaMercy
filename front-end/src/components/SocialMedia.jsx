import React from 'react'
import { BsTwitter, BsLinkedin, BsGithub, BsEnvelope } from 'react-icons/bs'

function SocialMedia() {
  return (
    <div className='social'>
        <div>
            <BsGithub/>
        </div>
        <div>
            <BsLinkedin/>
        </div>
        <div>
            <BsTwitter/>
        </div>
        <div>
            <BsEnvelope/>
        </div>
    </div>
  )
}

export default SocialMedia