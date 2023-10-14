import React from 'react'
import './Posts1.css'
import Vector1 from '../../../assets/Vector1.png'
import Vector2 from '../../../assets/Vector2.png'
import Vector3 from '../../../assets/Vector3.png'
import Fleche1 from '../../../assets/Fleche1.png'
import Postes1 from '../../../assets/Postes1.png'
import Postes2 from '../../../assets/Postes2.png'
import Postes3 from '../../../assets/Postes3.png'

const Posts1 = () => {
  return (
    <div className="Posts1">
      <div className="content7">
        <div className="div7">
          <span>Read our resources</span>
          <div className="link"><h2>View Resources <img src={Fleche1} alt="" /></h2></div>
        </div>
        <div className="posts">
          <div className="poste1">
            <img src={Postes1} alt="" className='Postes1'/>
            <div className="para">
              <div className="link1"><img src={Vector1} alt="" /><h1>Video</h1></div>
              <h2>Quickit: What you probably didn’t know</h2>
              <div className="link2"><h3>Read Article <img src={Fleche1} alt="" /></h3></div>
            </div>
          </div>
          <div className="poste1">
            <img src={Postes2} alt="" className='Postes1'/>
            <div className="para">
              <div className="link1"><img src={Vector2} alt="" /><h1>Article</h1></div>
              <h2>The guide to product analytics</h2>
              <div className="link2"><h3>Read Article <img src={Fleche1} alt="" /></h3></div>
            </div>
          </div>
          <div className="poste1">
            <img src={Postes3} alt="" className='Postes1'/>
            <div className="para">
              <div className="link1"><img src={Vector3} alt="" /><h1>Blog</h1></div>
              <h2>Using data for successful decision making</h2>
              <div className="link2"><h3>Read Post <img src={Fleche1} alt="" /></h3></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts1