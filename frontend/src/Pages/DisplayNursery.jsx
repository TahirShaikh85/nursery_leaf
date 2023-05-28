import React from 'react'
import img1 from '../assets/2.jpg'
import img2 from '../assets/3.jpg'
import img3 from '../assets/4.jpg'
import img4 from '../assets/5.jpg'

const DisplayNursery = () => {
  return (
    <div className='displayNursery-container '>
      <div className="container">
        <h3>Searching Nursery 👉 <span>searchText</span></h3>
        <div className="row displayNursery">
          <div className="col-md-5 nursery-details">
            <div className="details">
              <h2>Nursery Name</h2>
              <p><b>Address: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque error repellat nam alias modi sequi ex molestias, vero dolores sint consectetur quidem voluptatum corrupti fuga eos nulla ratione ipsum vitae.</p>
              <div className="call-to-action">
                <button className='btn btn-primary call-now'>Call Now <i class="fa fa-phone" aria-hidden="true"></i></button>
                <button className='btn btn-warning view-map'>View On Map <i class="fa fa-map-marker" aria-hidden="true"></i></button>
              </div>
            </div>
          </div>
          <div className="col-md-7 nursery-images">
            <div className="row images">
              <div className="col-md-4 image">
                <img src={img1} className='img-fluid' alt="" />
              </div>
              <div className="col-md-4 image">
                <img src={img2} className='img-fluid' alt="" />
              </div>
              <div className="col-md-4 image">
                <img src={img3} className='img-fluid' alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayNursery