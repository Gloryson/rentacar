'use client'

import { cars } from '@/database/cars';
import { useRouter } from 'next/navigation';
import './BookSection.scss';



export function BookSection () {

  const router = useRouter();


  return(
    <section className='book__section'>
      <div className='container'>
        <h4>Book a car</h4>
        <form onSubmit={e => e.preventDefault()}>
          <div className='form__item'>
            <label>Select car <b>*</b></label>
            <select>
              <option>Select car</option>
              {
                cars.map(car => <option>{`${car.mark} ${car.model}`}</option>)
              }
            </select>
          </div>
          <div className='form__item'>
            <label>Pick-up <b>*</b></label>
            <select>
              <option>Select pick-up location</option>
              <option>London</option>
              <option>Paris</option>
              <option>Berlin</option>
              <option>Warsaw</option>
              <option>Copenhagen</option>
              <option>New York</option>
            </select>
          </div>
          <div className='form__item'>
            <label>Drop-off <b>*</b></label>
            <select>
              <option>Select drop-off location</option>
              <option>London</option>
              <option>Paris</option>
              <option>Berlin</option>
              <option>Warsaw</option>
              <option>Copenhagen</option>
              <option>New York</option>
            </select>
          </div>
          <div className='form__item'>
            <label>Pick-up <b>*</b></label>
            <input type='date'></input>
          </div>
          <div className='form__item'>
            <label>Drop-off <b>*</b></label>
            <input type='date'></input>
          </div>
          <div className='form__item'>
            <button onClick={(e) => router.push('/book')}>Search</button>
          </div>
        </form>
      </div>
    </section>
  )
}