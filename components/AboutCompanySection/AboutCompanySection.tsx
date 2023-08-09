import Image from 'next/image';
import './AboutCompanySection.scss';



export function AboutCompanySection () {
  return(
    <section className='about__company__section'>
      <div className='container'>
        <div className='about__image'>
          <Image fill priority src={'/backgrounds/about-background.jpg'} alt='' sizes='' />
        </div>
        <div className='about__content'>
          <h4>About Company</h4>
          <h2>You start the engine and your adventure begins</h2>
          <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
        </div>
      </div>
    </section>
  )
}