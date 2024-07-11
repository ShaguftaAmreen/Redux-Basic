import React from 'react'

export const Home = (props) => {
  console.log("props",props)
    return (
      <div>
        <div className='add-to-cart'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmYKv5ClA0UETyaDh4Zc8-ARqX60GW2aXD_w&s'/>
        </div>
        <h1>Home Component</h1>
        <div className='cart-wrapper'>
            <div className='img-wrapper item'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWa3i5kpQ-_d-ig4DuHQlkZ9KQoQ_ZOVjqA&sss'/>
            </div>
            <div className='text-wrapper item'>
                <span>I-Phone</span>
                <span>Price : $1000.00</span>
            </div>
            <div className='btn-wrapper item'>
                <button onClick={props.addToCartHandler({price:1000,name:"i phone 11"})}>Add to cart</button>
            </div>
            
            </div>
      </div>
    );
  };
