import React from 'react'
import './Graph1.css'
import Zone from '../../../assets/zone.png'
import Zone2 from '../../../assets/Zone2.png'
import Zone3 from '../../../assets/Zone3.png'

const Graph1 = () => {
  return (
    <div className="Graph1">
        <div className="content6">
            <div className="div4">
                <h2>Use Quickit to simplify <span>building and maintaining layouts</span></h2>
                <p>You can decide how you are working as a team first and then let the software work around you. The pace of delivery from idea to reality has exploded.</p>
            </div>
            <div className="graph">
                <div className="bars">
                    <div className="Baton1">
                        <div className="blue1"></div>
                        <div className="red1"></div>
                    </div>
                    <div className="Baton2">
                        <div className="blue1"></div>
                        <div className="red1"></div>
                    </div>
                    <div className="Baton3">
                        <div className="blue1"></div>
                        <div className="red1"></div>
                    </div>
                    <div className="Baton4">
                        <div className="blue1"></div>
                        <div className="red1"></div>
                    </div>
                    <div className="Baton5">
                        <div className="blue1"></div>
                        <div className="red1"></div>
                    </div>
                    <div className="Baton6">
                        <div className="blue1"></div>
                        <div className="red1"></div>
                    </div>
                    <div className="Baton7">
                        <div className="blue1"></div>
                        <div className="red1"></div>
                    </div>
                    <div className="Baton8">
                        <div className="blue1"></div>
                        <div className="red1"></div>
                    </div>
                    <div className="Baton9">
                        <div className="blue1"></div>
                        <div className="red1"></div>
                    </div>
                    <div className="Baton10">
                        <div className="blue1"></div>
                        <div className="red1"></div>
                    </div>
                    <div className="Baton11">
                        <div className="blue1"></div>
                        <div className="red1"></div>
                    </div>
                    <div className="Baton12">
                        <div className="blue1"></div>
                        <div className="red1"></div>
                    </div>
                </div>
                <div className="div5">
                    <div className="lines">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                        <div className="line4"></div>
                        <div className="line5"></div>
                        <div className="line6"></div>
                        <div className="line7"></div>
                    </div>
                    <div className="timeline">
                        <div className="month1">Jan 2020</div>
                        <div className="month2">Feb 2020</div>
                        <div className="month3">Mar 2020</div>
                        <div className="month4">Apr 2020</div>
                        <div className="month5">May 2020</div>
                        <div className="month6">Jun 2020</div>
                        <div className="month7">Jul 2020</div>
                        <div className="month8">Aug 2020</div>
                        <div className="month9">Sep 2020</div>
                        <div className="month10">Oct 2020</div>
                        <div className="month11">Nov 2020</div>
                        <div className="month12">Dec 2020</div>
                    </div>
                </div>
                <div className="legend">
                    <div className="title1"><div className="point1"></div>Figma</div>
                    <div className="title2"><div className="point2"></div>Sketch</div>
                    <div className="title3"><div className="point3"></div>Task</div>
                </div>
                <div className="zone"><img src={Zone} alt="" /></div>
                <div className="zone2"><img src={Zone2} alt="" /></div>
                <div className="zone3"><img src={Zone3} alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default Graph1