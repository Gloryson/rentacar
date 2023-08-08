import { team } from '@/database/team';
import Image from 'next/image';
import './OurTeamSection.scss';



export function OurTeamSection () {
  return(
    <section className='our__team__section'>
      <div className='container'>
        {
          team.map(employee => {
            return(
              <div key={employee.id} className='employee__card'>
                <Image width={300} height={400} alt='' src={`/pictures/${employee.img}.jpg`}/>
                <h4>{`${employee.firstName} ${employee.lastName}`}</h4>
                <p>{employee.position}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}