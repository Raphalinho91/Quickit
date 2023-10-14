import React from 'react'
import './CTA1.css'
import Forme8 from '../../../assets/Forme8.png'
import Fleche from '../../../assets/Fleche.png'

const CTA1 = () => {
  return (
    <div className="CTA1">
        <div className="content5">
            <div className="div2">
                <div className="text2">
                    <span>Built for Development and Design Teams</span>
                    <p>Subscript is built to help finance teams get more accurate revenue data, faster, way in-depth, and with a lot less effort. </p>
                </div>
                <button className="btn44">Get Early Access <img src={Fleche} alt="" /></button>
            </div>
            <div className="image4"><img src={Forme8} alt="Forme8" /></div>
        </div>
    </div>
  )
}

export default CTA1