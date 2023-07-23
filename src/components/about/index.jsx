import React, { useEffect } from 'react';
import { FooterFour, FooterThree, HeaderSix, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import CtaTwo from '../common/cta/cta-2';
import AboutArea from './about-area';
import FeatureArea from './feature-area';
import ServicesArea from './services-area';
import TeamArea from './team-area';

const About = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb title={'About Collax'} />
      <AboutArea/>
      <ServicesArea/>
      <FeatureArea/>
      <TeamArea/>
      <CtaTwo/>
      <FooterFour />
    </Wrapper>
  );
};

export default About;