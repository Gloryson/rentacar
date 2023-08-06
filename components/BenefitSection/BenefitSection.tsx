import './BenefitSection.scss';



export function BenefitSection () {
  return(
    <section className='benefit__section'>
      <div className='container'>
        <div className='benefit__content'>
          <h4>Why Choose Us</h4>
          <h1>Best valued deals you will ever find</h1>
          <p>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
          <button>Find details</button>
        </div>
        <div className='benefit__features__container'>
          <div className='benefit__feature'>
            <h3>Cross Country Drive</h3>
            <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
          </div>
          <div className='benefit__feature'>
            <h3>All Inclusive Pricing</h3>
            <p>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
          </div>
          <div className='benefit__feature'>
            <h3>No Hidden Charges</h3>
            <p>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
          </div>
        </div>
      </div>
    </section>
  )
}