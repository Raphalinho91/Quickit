import React from 'react'
import './Feature2.css'
import Image7 from '../../../assets/Image7.png'
import Icon7 from '../../../assets/Icon7.png'

const Feature2 = () => {
  return (
    <div className="Feature2">
        <div className="content3">
            <div className="left-side3">
                <div className="icon"><img src={Icon7} alt="" />analytics</div>
                <h1>Create, collaborate your work in 1 place</h1>
                <p>Save time and coordinate with your team and push projects forward with the tools you use every day – all within Quickit.</p>
            </div>
            <div className="image2">
                <img src={Image7} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Feature2