import { BreadCrumbs, ContactSection } from '@/components';
import { Fragment } from 'react';




export default function Contact () {
  return(
    <Fragment>
      <BreadCrumbs page='Contact' />
      <ContactSection />
    </Fragment>
  )
}