'use client'

import Link from 'next/link';
import { useState } from 'react';
import './NavBar.scss';



export function NavBar () {

  const [isVisible, setIsVisible] = useState<boolean>(false);

  
  return(
    <nav>
      <div className='container'>

        <div className='logo'></div>

        <div className={`nav-links__container  ${isVisible ? 'visible' : ''}`}>
          <Link href={'/home'} onClick={() => setIsVisible(false)}>Home</Link>
          <Link href={'/about'} onClick={() => setIsVisible(false)}>About</Link>
          <Link href={'/car-models'} onClick={() => setIsVisible(false)}>Car Models</Link>
          <Link href={'/reviews'} onClick={() => setIsVisible(false)}>Reviews</Link>
          <Link href={'/our-team'} onClick={() => setIsVisible(false)}>Our Team</Link>
          <Link href={'/contact'} onClick={() => setIsVisible(false)}>Contact</Link>
        </div>

        <div className='auth__container'>
          <Link href={'/home'}>Sign In</Link>
          <button>Register</button>
        </div>

        <div 
          className='burger__button'
          style={{ backgroundImage: `url(svg/${isVisible ? 'cross' : 'menu-burger'}.svg)` }}
          onClick={() => setIsVisible(visible => !visible)}
        ></div>

      </div>
    </nav>
  )
}