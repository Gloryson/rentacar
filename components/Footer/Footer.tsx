import Link from 'next/link';
import './Footer.scss';



export function Footer () {
  return(
    <footer>
      <div className='container'>
        <div className='content__container'>
          <h4>CAR Rental</h4>
          <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
          <Link href={'tel:1234567890'} className='phone'>(123) 456 7890</Link>
          <Link href={'mailto:rentacar@rentacar.com'} className='email'>rentacar@rentacar.com</Link>
          <p>Design by Largo Gloryson</p>
        </div>
        <div className='content__container'>
          <h4>COMPANY</h4>
          <Link href={'/'}>New York</Link>
          <Link href={'/'}>Careers</Link>
          <Link href={'/'}>Mobile</Link>
          <Link href={'/'}>Blog</Link>
          <Link href={'/'}>How we work</Link>
        </div>
        <div className='content__container'>
          <h4>WORKING HOURS</h4>
          <p>Mon - Fri: 9:00AM - 9:00PM</p>
          <p>Sat: 9:00AM - 19:00PM</p>
          <p>Sun: Closed</p>
        </div>
        <div className='content__container'>
          <h4>SUBSCRIPTION</h4>
          <p>Subscribe your Email address for latest news & updates.</p>
          <input type="text" placeholder={'Enter Email Address'} />
          <button>Submit</button>
        </div>
      </div>
    </footer>
  )
}