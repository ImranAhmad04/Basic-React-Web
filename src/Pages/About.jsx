import React from 'react'
import img from "./img/img1.jpg"
export default function About() {
  return (
      <div className="About row" id='About'>
        <div className="margin">
        </div>
        <div className="col-md-6">
          <img src={img} className='img' alt="img is not supported" />
        </div>
        <div className="col-md-6">
          <h3>Its imran ahmad</h3>
          <p>from bangladesh Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum maxime laborum a eos nulla dignissimos unde labore aut. Laborum amet rem eum autem nihil ipsam quia aperiam perferendis nesciunt voluptatibus!</p>
          <b>we will show some projects for convience you.</b>
        </div>
      </div>
  )
}
