import React from 'react'
import './Feature3.css'
import Image8 from '../../../assets/Image8.png'

const Feature3 = () => {
  return (
    <div className="Feature3">
        <div className="content4">
            <div className="text">
                <h1>key benefits</h1>
                <h2>Your business will reach <span>unprecedented heights</span></h2>
            </div>
            <div className="div">
                <div className="image3"><img src={Image8} alt="" /></div>
                <div className="right-side">
                    <div className="box11">
                        <h1>Be Organized</h1>
                        <span>Every team has a unique process for shipping software. Use an out-of-the-box workflow, or create one to match the way your team works.</span>
                        <div className="barre1"></div>
                    </div>
                    <div className="box12">
                        <div className="barre2"></div>
                        <h1>Stay Focused</h1>
                        <span>Estimations help your team become more accurate and efficient. Use story points, hours, t-shirt sizes, or your own estimation technique.</span>
                    </div>
                    <div className="box13">
                        <div className="barre3"></div>
                        <h1>Get in Sync</h1>
                        <span>Order user stories, issues, and bugs in your product backlog with simple drag and drop prioritization. Ensure stories that deliver the most customer value.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature3