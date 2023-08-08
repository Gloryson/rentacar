import { BreadCrumbs, OurTeamSection } from '@/components';
import { Fragment } from 'react';



export default function OurTeam () {
  return(
    <Fragment>
      <BreadCrumbs page='Our team'/>
      <OurTeamSection />
    </Fragment>
  )
}