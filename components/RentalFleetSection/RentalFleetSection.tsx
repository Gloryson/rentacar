import Image from 'next/image';
import './RentalFleetSection.scss';



export function RentalFleetSection () {
  return(
    <section className='rental__fleet__section'>
      <div className='container'>
        <h4>Vehicle Models</h4>
        <h2>Our rental fleet</h2>
        <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
        <div className='car__pick__container'>
          <div className='names__container'>
            <button>Volkswagen</button>
            <button>Marat</button>
            <button>Gnu gnu i7</button>
          </div>
          <div className='image__container'>
            <Image fill src={'/pictures/tesla-model-x.jpg'} alt='' sizes='100%' priority={false}/>
          </div>
          <div className='properties__container'>
            <div className='price'>$45 / rent per day</div>
            <div className='properties'>
              <div>Mark</div>
              <div>Volswagen</div>
              <div>Model</div>
              <div>Golf 6</div>
              <div>Year</div>
              <div>2014</div>
              <div>Doors</div>
              <div>4/5</div>
              <div>AC</div>
              <div>Yes</div>
              <div>Transmission</div>
              <div>Manual</div>
              <div>Fuel</div>
              <div>Gasoline</div>
            </div>
            <button>RESERVE NOW</button>
          </div>
        </div>
      </div>
    </section>
  )
}