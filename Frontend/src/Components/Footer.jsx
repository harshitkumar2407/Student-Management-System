import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="leftContainer child">
            <Link to="/" className='link'> <p>Welcome to Acet</p> </Link>
            
            <p>Term & Condations</p>
            <p>Refund and CanCellation</p>
            <p>Privacy Policy</p>
        </div>
        <div className="middleContainer child">
            <p>AICTE APPROVAL LETTER</p>
            <p>Acctedition Status</p>
            <p>Mendatory Discolosures</p>
            <p>AICTE Feedback</p>
            <p>Grievance Redressal Portal</p>
        </div>
        <div className="rightContainer child">
            <h3>Reach Us</h3>
            <p>ALIGARH COLLEGE OF ENGINEERING AND TECHNOLOGY 3 KM FROM SASNI GATE, MATHURA ROAD, ALIGARH-202001 <br />
            E-MAIL : mail@acetup.org <br />
            Mobile No. : +91 9568200010,62,63,64,65,71,77</p>
        </div>
    </div>
  )
}

export default Footer