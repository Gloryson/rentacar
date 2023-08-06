import './ReviewSection.scss';



export function ReviewSection () {
  return(
    <section className='review__section'>
      <div className='container'>
        <h4>Reviewed by People</h4>
        <h2>Client's Reviews</h2>
        <p>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
        <div className='reviews__container'>
          <div className='review'>
            <p>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."</p>
            <div className='reviewer'>
              <h5>Hanna Hotter</h5>
              <span>New York</span>
            </div>
          </div>
          <div className='review'>
            <p>"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"</p>
            <div className='reviewer'>
              <h5>John Doe</h5>
              <span>London</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}