import React from 'react'
import iconCart from '../assets/images/Cart.svg';
import iconSearch from '../assets/images/Search.svg';
import imageHeader from '../assets/images/header.png';
import bodyArrow from '../assets/images/body-arrow.svg';
import middleArrow from '../assets/images/middle-arrow.svg';
import headArrow from '../assets/images/Polygon 2.svg';
import leftArrow from '../assets/images/left.svg';
import star from '../assets/images/star.svg'

const Header = () => {
  return (
    <header className="container__header">
      <nav className='nav__bar'>
        <div className="logo__name">
          <img src='/src/assets/images/logo.svg' alt='Business Logo'/>
          <h2>Foo</h2>
        </div>
        <ul className="nav__items">
          <li>Home</li>
          <li>Menu</li>
          <li>Contact</li>
          <li>Shop</li>
        </ul>
        <div className="search">
          <img className='icon__lupa' src={iconSearch} alt="Icon Search" />
          <input type="text" placeholder='Search'/>
          <div className="search__car">
            <img src={iconCart} alt="Icon Cart" />
            <span>2</span>
          </div>
        </div>
      </nav>
      <div className="body__header">
        <div className="body__header-left">
          <div className="title__header">
            <h1>Fast</h1>
            <div className="title__header-right">
              <span>Food</span>
              <span>Delivery</span>
            </div>
            <div className="arrow__header">
              <img className='head__arrow' src={headArrow} alt="Head Arrow" />
              <img className='middle__arrow' src={middleArrow} alt="Body Arrow" />
              <img className='body__arrow' src={bodyArrow} alt="Body Arrow" />
            </div>
          </div>
          <div className="paragraph__header">
            <p>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium</p>
          </div>
          <div className="buttons__header">
            <button>Order Now</button>
            <div className="button_watch">
              <img src={leftArrow} alt="Left Arrow" />
              <p>Whatch video</p>
            </div>
          </div>
          <div className="rating__header">
            <div className="stars">
              <img src={star} alt="Star" />
              <img src={star} alt="Star" />
              <img src={star} alt="Star" />
              <img src={star} alt="Star" />
              <img src={star} alt="Star" />
            </div>
            <div className="text__rating">
              <p>5 star rating <span>based on 1788 reviews</span></p>
              
            </div>
          </div>
        </div>
        <div className="body__header-right">
          <img src={imageHeader} alt="Image header" />
        </div>
      </div>
    </header>
    
  )
}

export default Header