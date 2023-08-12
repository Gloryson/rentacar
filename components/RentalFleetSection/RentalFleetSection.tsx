'use client'

import Image from 'next/image';
import { useState } from 'react';
import { cars } from '@/database/cars';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setCar } from '@/store/choiceSlice';
import './RentalFleetSection.scss';



export function RentalFleetSection () {

  const { car } = useAppSelector(state => state.choice);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const router = useRouter();


  return(
    <section className='rental__fleet__section'>
      <div className='container'>
        <h4>Vehicle Models</h4>
        <h2>Our rental fleet</h2>
        <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
        <div className='car__pick__container'>
          <div className='names__container'>
            {
              cars.map(curr => {
                return(
                  <button
                    key={curr.id}
                    className={curr.id === car.id ? 'selected' : ''}
                    onClick={() => {
                      if (car.id !== curr.id) {
                        dispatch(setCar(curr));
                        setIsLoading(true);
                      }
                    }}
                  >
                    {`${curr.mark} ${curr.model}`}
                  </button>
                )
              })
            }
          </div>
          <div className='image__container'>
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
          <div className='properties__container'>
            <div className='price'>{`$${car.price}`} / rent per day</div>
            <div className='properties'>
              <div>Mark</div>
              <div>{car.mark}</div>
              <div>Model</div>
              <div>{car.model}</div>
              <div>Year</div>
              <div>{car.year}</div>
              <div>Doors</div>
              <div>{car.doors}</div>
              <div>AC</div>
              <div>{car.ac}</div>
              <div>Transmission</div>
              <div>{car.transmission}</div>
              <div>Fuel</div>
              <div>{car.fuel}</div>
            </div>
            <button onClick={() => router.push('/book')}>RESERVE NOW</button>
          </div>
        </div>
      </div>
    </section>
  )
}