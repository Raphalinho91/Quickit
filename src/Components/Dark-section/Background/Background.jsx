import React from 'react'
import './Background.css'
import Forme1 from '../../../assets/Forme1.png'
import Forme2 from '../../../assets/Forme2.png'
import Forme11 from '../../../assets/Forme1-1.png'
import Forme12 from '../../../assets/Forme12.png'
import Forme22 from '../../../assets/Forme22.png'

const Background = () => {
  return (
    <div className="dark-section">
      <div className="background">
        <div className="Forme1">
          <img src={Forme1} alt="Forme1" />
        </div>
        <div className="Forme2">
          <img src={Forme2} alt="Forme2" />
        </div>
        <div className="Forme1-1">
          <img src={Forme11} alt="" />
        </div>
        <div className="Forme1-2">
          <img src={Forme12} alt="" />
        </div>
        <div className="Forme22">
          <img src={Forme22} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Background