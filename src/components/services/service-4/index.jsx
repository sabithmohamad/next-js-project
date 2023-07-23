import React, { useEffect } from 'react';
import { FooterFour, FooterThree, HeaderSix, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import CtaTwo from '../../common/cta/cta-2';
import CaseArea from '../../common/recent-case-studies';
import TestimonialArea from '../../homes/home-4/testimonial-area';
import ServicesItems from './services-items';


const ServiceFour = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb title={'Service 04'} />
      <ServicesItems/>
      <CaseArea padd={'pt-130'} />
      <TestimonialArea style_2={true}/>
      <CtaTwo/>
      <FooterFour />
    </Wrapper>
  );
};

export default ServiceFour;