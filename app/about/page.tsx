import { AboutCompanySection, BreadCrumbs, FeatureSection } from '@/components';
import { Fragment } from 'react';




export default function About () {
  return(
    <Fragment>
      <BreadCrumbs page='About Company'/>
      <AboutCompanySection />
      <FeatureSection />
    </Fragment>
  )
}