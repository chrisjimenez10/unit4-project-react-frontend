
import { useState, useEffect } from "react";
import './Home.css';

const Home = () => {

  

  return (
    <>
<div className="container">
    <h1>Welcome to Dev Foods</h1>
</div>


<div className="container">
  <h3>Hey there, code wizard! Welcome to Dev Foods, the grocery store built by developers, for developers. We’ve debugged your hunger and compiled the freshest groceries straight to your cart. Whether you’re a full-stack snacker or a front-end foodie, we’ve got everything to keep your code clean and your stomach happy. Need a break from that infinite loop? Grab a basket, put on your best debugging face, and git commit to some seriously tasty food. At Dev Foods, we turn food cravings into feature releases! Happy shopping, and may your forks be ever in your favor!</h3>
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
       <h1>Our Most Popular Products</h1>
      
       
      </div>
      
      </>
  )
}

export default Home;