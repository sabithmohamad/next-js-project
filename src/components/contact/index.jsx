import React, { useEffect } from 'react';
import { FooterFour, FooterThree, HeaderSix, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ContactArea from './contact-area';


const Contact = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb title={'Contact'} />
      <ContactArea/>
      <FooterFour />
    </Wrapper>
  );
};

export default Contact;