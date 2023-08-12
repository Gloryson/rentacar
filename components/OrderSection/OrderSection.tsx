'use client'

import Image from 'next/image';
import { BookSection } from '@/components';
import { useState } from 'react';
import { useAppSelector } from '@/store/store';
import './OrderSection.scss';


export function OrderSection () {

  const { car } = useAppSelector(state => state.choice);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  
  return(
    <section className='order__section'>
      <div className='container'>
        <h3>Upon completing this reservation enquiry, you will receive:</h3>
        <p>Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</p>
        <BookSection />
        <div className='car__image__container'>
          <div className='spiner' style={{opacity: isLoading ? 1 : 0}}></div>
          <Image 
            fill
            priority
            src={`/pictures/${car.img}.jpg`}
            alt=''
            sizes='100%'
            onLoadingComplete={() => setIsLoading(false)}
            style={{ opacity: isLoading ? 0 : 1 }}
          />
        </div>
        <div className='personal__info__container'>
          <h4>Personal information</h4>
          <form>
            <div className='form__item'>
              <label>First Name <b>*</b></label>
              <input placeholder='John'></input>
            </div>
            <div className='form__item'>
              <label>Last Name <b>*</b></label>
              <input placeholder='Doe'></input>
            </div>
            <div className='form__item'>
              <label>Phone Number <b>*</b></label>
              <input placeholder='+491234567890'></input>
            </div>
            <div className='form__item'>
              <label>Age <b>*</b></label>
              <input placeholder='18'></input>
            </div>
            <div className='form__item'>
              <label>Email <b>*</b></label>
              <input placeholder='example@exam.ple'></input>
            </div>
            <div className='form__item'>
              <label>Address <b>*</b></label>
              <input placeholder='Plac Konesera 8'></input>
            </div>
            <div className='form__item'>
              <label>City <b>*</b></label>
              <input placeholder='Warsaw'></input>
            </div>
            <div className='form__item'>
              <label>Zip Code <b>*</b></label>
              <input placeholder='00-368'></input>
            </div>
          </form>
          <button>RESERVE NOW</button>
        </div>
      </div>
    </section>
  )
}