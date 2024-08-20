import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../assets/nexus.jpeg'
import slide2 from '../assets/Nexus 5.png'
import slide3 from '../assets/Welcome 3.png'

const Banner = () => {
  return (
   <>
   
   <Carousel data-bs-theme="">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
        
        />
        <Carousel.Caption>
          <h5 className='text-xs text-white'>Serving With Joy</h5>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
         
        />
        <Carousel.Caption>
          <h5 className='col text-white'>Next Gen Engineering</h5>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
         
        />
        <Carousel.Caption>
          <h5 className='text-white'>Futurestic Training</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
   </>
  )
}

export default Banner
