import './FeatureSection.scss';



export function FeatureSection () {
  return(
    <section className='feature__section'>
      <div className='container'>
        <h4>Plan your trip now</h4>
        <h2>Quick & easy car rental</h2>
        <div className='features__container'>
          <div className='feature'>
            <h3>Select Car</h3>
            <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
          </div>
          <div className='feature'>
            <h3>Contact Operator</h3>
            <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
          </div>
          <div className='feature'>
            <h3>Let's Drive</h3>
            <p>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
          </div>
        </div>
      </div>
    </section>
  )
}