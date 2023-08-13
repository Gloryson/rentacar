import { Banner, BenefitSection, BookSection, FeatureSection, MainSection, RentalFleetSection, ReviewSection } from '@/components';
import { Fragment } from 'react';


export default function Home () {
  return (
    <Fragment>
      <MainSection />
      <BookSection />
      <FeatureSection />
      <RentalFleetSection />
      <Banner />
      <BenefitSection />
      <ReviewSection />
    </Fragment>
  )
}