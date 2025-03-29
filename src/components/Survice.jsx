import React from 'react'
import '../css/Survice.css'

function Survice(props) {
  return (
    <div>
        <div className="survice-content">
            <div className="icon-div">
                <img className='icon-img' src={props.img} alt="" />
            </div>
            <div className="detail-div">
               <h1>{props.title}</h1>
               <p>{props.detail}</p>
            </div>
        </div>
    </div>
  )
}

export default Survice