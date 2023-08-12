import { BookSection, BreadCrumbs } from '@/components';
import { Fragment } from 'react';




export default function Book () {
  return(
    <Fragment>
      <BreadCrumbs page='Book a car'/>
      <BookSection />
    </Fragment>
  )
}