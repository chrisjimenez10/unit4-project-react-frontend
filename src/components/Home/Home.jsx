import Beverages from "../Beverages/Beverages";
import { useState, useEffect } from "react";
import './Home.css';

const Home = () => {

  

  return (
    <>
<div className="container">
    <h1>Welcome to Dev Foods</h1>
</div>


<div className="container">
  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolorem praesentium ea ullam sapiente ut veniam et incidunt. Alias, cumque. Explicabo quidem eius vero doloribus esse numquam facere itaque rerum.</h3>
</div>

<div className="container" style={{ display: 'flex', justifyContent: 'space-between',gap:'10px' }}>
  <div>
        <img src="src/assets/beverage.png" alt="food" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <div>
        <img src="src/assets/meat.png" alt="food" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <div>
        <img src="src/assets/produce.png" alt="food" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <div>
        <img src="src/assets/snack.png" alt="food" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
      <div className="container" style={{ 
  height: '120%', 
  width: '120%', 
  backgroundImage: `url('src/assets/meal.png')`, 
  backgroundSize: 'cover', 
  backgroundPosition: 'center' 
}}>
<div className="Specials"> 
      <h1>Celebrate Dads Everywhere!</h1>
      <p>Get 10% off all meats this Father's Day weekend!</p>
      </div>
      </div>

      <div className="wrapper">
       <h1>Our Products</h1>
       
      </div>
      
      </>
  )
}

export default Home;