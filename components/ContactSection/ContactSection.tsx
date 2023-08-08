import Link from 'next/link';
import './ContactSection.scss';



export function ContactSection () {
  return(
    <section className='contact__section'>
      <div className='container'>
        <div className='contact__content'>
          <h2>Need additional information?</h2>
          <p>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
          <Link href='tel:1234567890' className='phone'>(123) 456 7890</Link>
          <Link href='mailto:rentacar@rentacar.com' className='email'>rentacar@rentacar.com</Link>
          <Link href='https://goo.gl/maps/tyMTPKcd4fDZ3yKQ9' className='map' target='blank'>Warsaw, Poland</Link>
        </div>
        <form>
          <div className='form__item'>
              <label>Full name <b>*</b></label>
              <input type='name' placeholder='John Doe'></input>
            </div>
            <div className='form__item'>
              <label>Email <b>*</b></label>
              <input type='email' placeholder='example@exam.ple'></input>
            </div>
            <div className='form__item'>
              <label>Tell us about it <b>*</b></label>
              <textarea rows={10} placeholder='Write here...'></textarea>
            </div>
            <div className='form__item'>
              <button>Send Message</button>
            </div>
        </form>
      </div>
    </section>
  )
}