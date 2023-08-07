import React from 'react'
import emruzImage from './img/emruz.jpg'; // Relative path to the image in the public folder
import img1 from './img/img1.jpg'; 
import img2 from './img/img2.jpg'; 
// import img3 from './img/img3.jpg'; 
export default function Projects() {
  return (
    <div>
      <h1>Our Projects</h1>
      <div className="projects" id='Projects'>
        <div className="projects-item">
          <h3>First Projects</h3>
          <img className='img' src={emruzImage} alt="asdf" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, voluptatem esse sunt blanditiis quos rem iusto numquam quo quae ducimus ad libero minima illum iure perspiciatis repudiandae nostrum consequatur! Ipsam!</p>
          <button className='btn'>Browse Feture</button>
        </div>

        <div className="projects-item">
          <h3>First Projects</h3>
          <img className='img' src={img1} alt="asdf" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, voluptatem esse sunt blanditiis quos rem iusto numquam quo quae ducimus ad libero minima illum iure perspiciatis repudiandae nostrum consequatur! Ipsam!</p>
          <button className='btn'>Browse Feture</button>
        </div>
        <div className="projects-item">
          <h3>First Projects</h3>
          <img className='img' src={img2} alt="asdf" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, voluptatem esse sunt blanditiis quos rem iusto numquam quo quae ducimus ad libero minima illum iure perspiciatis repudiandae nostrum consequatur! Ipsam!</p>
          <button className='btn'>Browse Feture</button>
        </div>
        <div className="projects-item">
          <h3>First Projects</h3>
          <img className='img' src={img2} alt="asdf" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, voluptatem esse sunt blanditiis quos rem iusto numquam quo quae ducimus ad libero minima illum iure perspiciatis repudiandae nostrum consequatur! Ipsam!</p>
          <button className='btn'>Browse Feture</button>
        </div>
        <div className="projects-item">
          <h3>First Projects</h3>
          <img className='img' src={img1} alt="asdf" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, voluptatem esse sunt blanditiis quos rem iusto numquam quo quae ducimus ad libero minima illum iure perspiciatis repudiandae nostrum consequatur! Ipsam!</p>
          <button className='btn'>Browse Feture</button>
        </div>
        <div className="projects-item">
          <h3>First Projects</h3>
          <img className='img' src={img2} alt="asdf" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, voluptatem esse sunt blanditiis quos rem iusto numquam quo quae ducimus ad libero minima illum iure perspiciatis repudiandae nostrum consequatur! Ipsam!</p>
          <button className='btn'>Browse Feture</button>
        </div>
      </div>
    </div>
  )
}
