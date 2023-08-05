import './BookSection.scss';



export function BookSection () {
  return(
    <section className='book__section'>
      <div className='container'>
        <h4>Book a car</h4>
        <form>
          <div className='form__item__container'>
            <label>Select car <b>*</b></label>
            <select>
              <option>Select car</option>
            </select>
          </div>
          <div className='form__item__container'>
            <label>Pick-up <b>*</b></label>
            <select>
              <option>Select pick-up location</option>
              <option>London</option>
              <option>Paris</option>
              <option>Berlin</option>
              <option>Warsaw</option>
              <option>Copenhagen</option>
            </select>
          </div>
          <div className='form__item__container'>
            <label>Drop-off <b>*</b></label>
            <select>
              <option>Select drop-off location</option>
              <option>London</option>
              <option>Paris</option>
              <option>Berlin</option>
              <option>Warsaw</option>
              <option>Copenhagen</option>
            </select>
          </div>
          <div className='form__item__container'>
            <label>Pick-up <b>*</b></label>
            <input type='date'></input>
          </div>
          <div className='form__item__container'>
            <label>Drop-off <b>*</b></label>
            <input type='date'></input>
          </div>
          <div className='form__item__container'>
            <button>Search</button>
          </div>
        </form>
      </div>
    </section>
  )
}