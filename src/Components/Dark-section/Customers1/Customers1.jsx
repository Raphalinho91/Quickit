import React from 'react'
import './Customers1.css'
import Icon1 from '../../../assets/Icon1.png'
import Icon2 from '../../../assets/Icon2.png'
import Icon3 from '../../../assets/Icon3.png'
import Icon4 from '../../../assets/Icon4.png'
import Icon5 from '../../../assets/Icon5.png'
import Icon6 from '../../../assets/Icon6.png'

const Customers1 = () => {
  return (
    <div className="Customers1">
        <span>Trusted by the fastest growing companies</span>
        <div className="logos">
            <div className="row-1">
                <div className="box1"><img src={Icon1} alt="" />Figma</div>
                <div className="box2"><img src={Icon2} alt="" /> Sketch</div>
                <div className="box3"><img src={Icon3} alt="" /> Pinterest</div>
            </div>
            <div className="row-2">
                <div className="box4"><img src={Icon4} alt="" /> Dribbble</div>
                <div className="box5"><img src={Icon5} alt="" /> Behance</div>
                <div className="box6"><img src={Icon6} alt="" /> Github</div>
            </div>
        </div>
    </div>
  )
}

export default Customers1