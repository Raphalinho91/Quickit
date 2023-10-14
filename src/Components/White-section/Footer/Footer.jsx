import React from 'react'
import './Footer.css'
import Forme9 from '../../../assets/Forme9.png'
import Icon9 from '../../../assets/Icon9.png'
import Icon10 from '../../../assets/Icon10.png'
import Icon11 from '../../../assets/Icon11.png'
import Icon12 from '../../../assets/Icon12.png'

const Footer = () => {
  return (
    <div className="Footer">
        <img src={Forme9} alt="" className='Forme9'/>
        <div className="top-div">
            <div className="div8">
                <div className="flexbox">
                        <h1>Product</h1>
                        <div className="flex1">
                            <span>Analytics</span>
                            <span>Features</span>
                            <span>Pricing</span>
                            <span>Security</span>
                            <span>Plans</span>
                        </div>
                </div>
                <div className="flexbox">
                        <h1>Solutions</h1>
                        <div className="flex1">
                            <span>Design Faster</span>
                            <span>Figma Prototypes</span>
                            <span>Sketch Mockups</span>
                            <span>Ready-made Templates</span>
                        </div>
                </div>
                <div className="flexbox"> 
                        <h1>Resources</h1>
                        <div className="flex1">
                            <span>Blog</span>
                            <span>Video Series</span>
                            <span>Podcast</span>
                            <span>Customers</span>
                            <span>Ebooks</span>
                        </div>
                </div>
                <div className="flexbox"> 
                        <h1>About company</h1>
                        <div className="flex1">
                            <span>About Us</span>
                            <span>Contact Us</span>
                            <span>Careers</span>
                        </div>
                </div>
            </div>
        </div>
        <div className="bottom-div">
            <div className="div9">
                <div className="side-left">
                    <span>© Quickit 2022 All rights reserved</span>
                    <div className="links1">
                        <h1>Privacy Policy</h1>
                        <h2>Terms of Service</h2>
                    </div>
                </div>
                <div className="side-right1">
                    <div className="img11"><img src={Icon11} alt="" /></div>
                    <div className="img11"><img src={Icon9} alt="" /></div>
                    <div className="img11"><img src={Icon10} alt="" /></div>
                    <div className="img11"><img src={Icon12} alt="" /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer