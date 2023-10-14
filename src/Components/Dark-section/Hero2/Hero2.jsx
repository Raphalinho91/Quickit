import React from 'react'
import './Hero2.css'
import Image1 from '../../../assets/Image1.png'
import Image2 from '../../../assets/Image2.png'
import Image3 from '../../../assets/Image3.png'
import Image4 from '../../../assets/Image4.png'
import Play from '../../../assets/Play.png'

const Hero2 = () => {
  return (
    <div className="Hero2">
        <div className="left-side">
            <span>Welcome to the Future of Landings</span>
            <p>Create screens right in your Figma. Connect different blocks and create awesome landings. Yes, it just takes a few minutes!</p>
            <div className="buttons">
                <button className='btn2'>Request a Demo</button>
                <button className='btn3'><img src={Play} alt="Play" />Watch video</button>
            </div>
        </div>
        <div className="Images">
            <div className="Image1"><img src={Image1} alt="Image1" /></div>
            <div className="Image2"><img src={Image2} alt="Image2" /></div>
            <div className="Image3"><img src={Image3} alt="Image3" /></div>
            <div className="Image4"><img src={Image4} alt="Image4" /></div>
        </div>
    </div>
  )
}

export default Hero2