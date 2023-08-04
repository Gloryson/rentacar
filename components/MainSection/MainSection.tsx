import './MainSection.scss';



export function MainSection () {
  return(
    <main>
      <div className='main__shape__background'></div>
      <div className='container'>
        <div className='main__content'>
          <h4>Plan your trip now</h4>
          <h1>Save <span>big</span> with our car rental</h1>
          <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
          <div className='main__buttons__container'>
            <button>Book ride</button>
            <button className='second-button'>Learn more</button>
          </div>
        </div>
        <div className='main__car__image'></div>
      </div>
    </main>
  )
}