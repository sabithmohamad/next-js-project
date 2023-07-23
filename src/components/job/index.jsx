import React, { useEffect } from 'react';
import { FooterFour, FooterThree, HeaderSix, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import Cta from '../common/cta/cta';
import JobArea from './job-area';


const Job = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb title={'Collax Job List'} />
      <JobArea/>
      <Cta/>
      <FooterFour />
    </Wrapper>
  );
};

export default Job;