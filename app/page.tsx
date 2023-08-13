'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react';


export default function App () {

  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  }, [])

  return(
    <section className='empty__screen'>
      <div className='container' style={{ height: '100vh' }}>
        <div className='spiner'></div>
      </div>
    </section>
  )
}
