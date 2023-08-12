'use client'

import { cars } from '@/database/cars';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setCar, setDropCity, setDropDate, setPickCity, setPickDate } from '@/store/choiceSlice';
import './BookSection.scss';



export function BookSection () {

  const choice = useAppSelector(state => state.choice);
  const dispatch = useAppDispatch();
  const router = useRouter();


  return(
    <section className='book__section'>
      <div className='container'>
        <h4>Book a car</h4>
        <form onSubmit={e => e.preventDefault()}>
          <div className='form__item'>
            <label>Select car <b>*</b></label>
            <select 
              value={`${choice.car.mark} ${choice.car.model}`}
              onChange={(e) => {
                const selectedCar = cars.find(item => item.mark === e.target.value.split(' ')[0]);
                if (selectedCar) dispatch(setCar(selectedCar));
              }}
            >
              {
                cars.map(option => <option key={`o${option.id}n`}> {`${option.mark} ${option.model}`} </option>)
              }
            </select>
          </div>
          <div className='form__item'>
            <label>Pick-up <b>*</b></label>
            <select
              value={choice.pickCity}
              onChange={(e) => dispatch(setPickCity(e.target.value))}
            >
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
            <select
              value={choice.dropCity}
              onChange={(e) => dispatch(setDropCity(e.target.value))}
            >
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
            <input type='date'
              value={choice.pickDate}
              onChange={(e) => dispatch(setPickDate(e.target.value))}
            />
          </div>
          <div className='form__item'>
            <label>Drop-off <b>*</b></label>
            <input type='date'
              value={choice.dropDate}
              onChange={(e) => dispatch(setDropDate(e.target.value))}
            />
          </div>
          <div className='form__item'>
            <button onClick={(e) => router.push('/book')}>Search</button>
          </div>
        </form>
      </div>
    </section>
  )
}