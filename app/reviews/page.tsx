import { BreadCrumbs, ReviewSection } from '@/components';
import { Fragment } from 'react';




export default function ReviewsPage () {
  return(
    <Fragment>
      <BreadCrumbs page='Reviews' />
      <ReviewSection />
    </Fragment>
  )
}