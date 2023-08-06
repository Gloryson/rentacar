import { Banner, BenefitSection, BookSection, FeatureSection, MainSection, ReviewSection } from '@/components';
import { Fragment } from 'react';


export default function Home () {
  return (
    <Fragment>
      <MainSection />
      <BookSection />
      <FeatureSection />
      <Banner />
      <BenefitSection />
      <ReviewSection />
    </Fragment>
  )
}
