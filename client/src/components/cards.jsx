import React from 'react'
import img1 from '../assets/images/security .jpg'
import img2 from '../assets/images/project.jpg'
import img3 from '../assets/images/delux.jpg'

function Cards() {
  return (
    <div>
    <div className='price-title'><h1>Pricing plan</h1></div>
    
     <div class="card-container">
    <div class="card basic">
      <h2 class="name">Basic</h2>
      <img src={img2} class="card-img" alt="cover-image" />
      <div class="card-body">
        <h6 class="desc"> Basic package provides website access, project parts, and select features and services to get you started.</h6>
        <div class="price-container">
          <span class="price">9.99<sup>$/yr</sup></span>
          <button class="price-btn">Buy now</button>
        </div>
      </div>
    </div>
     
    <div class="card  premium">
      <h2 class="name">Premium</h2>
      <img src={img3} class="card-img" alt="cover-image" />
      <div class="card-body">
        <h6 class="desc"> 
Elevate your experience with the Premium package, offering website access, assembled project, and exclusive features and services.</h6>
        <div class="price-container">
          <span class="price">19.99<sup>$/yr</sup></span>
          <button class="price-btn">Buy now</button>
        </div>
      </div>
    </div>

    <div class="card delux">
      <h2 class="name">Delux</h2>
      <img src={img1} class="card-img" alt="cover-image" />
      <div class="card-body">
        <h6 class="desc"> Delux package offers an all-inclusive service with premium website access, exclusive features, and onsite repairs for your convenience.</h6>
        <div class="price-container">
          <span class="price">29.99<sup>$/yr</sup></span>
          <button class="price-btn">Buy now</button>
        </div>
      </div>
    </div>

 </div>
  </div>

  )
}

export default Cards;