'use client'

import { useCallback, useEffect, useState } from 'react';
import './ScrollToTopButton.scss';



export function ScrollToTopButton () {

  const [position, setPosition] = useState<number>(0);

  const listenScroll = useCallback(() => {
    setPosition(document.documentElement.scrollTop);
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', listenScroll);
    return () => window.removeEventListener('scroll', listenScroll);
  }, [])
  

  return position > 1000 ? (
    <div
      className='scroll__to__top__button'
      onClick={() => scrollTo(0, 0)}
    >
      &#9650;
    </div>
  ) : (
    <></>
  )
}