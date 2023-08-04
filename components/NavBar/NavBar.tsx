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
          <Link href={'/'}>Home</Link>
          <Link href={'/'}>About</Link>
          <Link href={'/'}>Car Models</Link>
          <Link href={'/'}>Reviews</Link>
          <Link href={'/'}>Our Team</Link>
          <Link href={'/'}>Contact</Link>
        </div>

        <div className='auth__container'>
          <Link href={'/'}>Sign In</Link>
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