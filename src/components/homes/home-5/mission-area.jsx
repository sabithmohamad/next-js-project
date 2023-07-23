import React from 'react';
import { HighlightThree } from '../../../svg';

const SvgHighlight = () => (<svg width="201" height="12" viewBox="0 0 201 12" fill="none" 
xmlns="http://www.w3.org/2000/svg"> <path d="M0 0L201 12H0V0Z" fill="#FFDC60" />
</svg>)

const contents = {
  shapes: [
    'mission-shape-5.1.png',
    'mission-shape-5.6.png',
    'mission-shape-5.3.png',
  ],
  tabs: [
    { active: true, id: 'mission', title: 'Our Mission' },
    { id: 'vision', title: 'Our Mission' },
    { id: 'value', title: 'Our Value' },
  ],
  tab_contents: [
    {
      show: true, id: 'mission',
      title: <> Turning Hopes <span className="tp-section-highlight"> into <SvgHighlight /> </span>  Global Success</>,
      text_1: <>The objective of LGR Study Abroad  
      <br /> is to empower students by offering complete assistance and support</>,
      text_2: <>allowing them to turn their ambitions of studying abroad into actual worldwide success. Through foreign education options, they try to assist students achieve academic success, personal growth, and professional progress.</>
    },
    {
      id: 'vision',
      title: <>Developing <span className="tp-section-highlight"> Tomorrow's <HighlightThree /> </span>
        Global Leaders</>,
      text_1: <>LGR Study Abroad sees a future in which students become global leaders with a profound awareness of varied cultures <br /> global views, and a desire to make a positive difference in a globalised society.</>,
      text_2: <> Our aim is to develop the next generation of leaders capable of addressing global issues and making the world a better place.</>
    },
    {
      id: 'value',
      title: <>Empathy <span className="tp-section-highlight"> Excellence
        <HighlightThree /> </span> and Lifelong Learning</>,
      text_1: <>LGR Study Abroad's strategy and service delivery are guided by key beliefs <br /> They prioritise empathy, understanding students' individual needs and objectives, and giving personalised help.</>,
      text_2: <> We aim for excellence in all aspects of their business to provide the best possible counsel and services. Furthermore, they value lifelong learning, always increasing their expertise and staying current on changing educational trends in order to better serve their pupils.</>
    },
  ],
  img:'/assets/img/mission/collage.png'
}

const { shapes, tabs, tab_contents,img } = contents;

const MissionArea = () => {
  return (
    <div className="tp-mission-area pt-130 p-relative">
      {shapes.map((s, i) => (
        <div key={i} className={`bp-mission-shape-${i+1} d-none d-lg-block`}>
          <img src={`/assets/img/mission/${s}`} alt=""/>
        </div>
      ))}
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-11 wow tpfadeLeft" data-wow-duration=".5s" data-wow-delay=".7s">
            <div className="tp-mission-tab-section pb-10">
              <nav>
                <div className="nav tp-mission-tab" id="nav-tab" role="tablist">
                  {tabs.map((tab) => (
                  <button key={tab.id} className={`nav-links ${tab.active?'active':''}`} id={`nav-${tab.id}-tab`} data-bs-toggle="tab" data-bs-target={`#${tab.id}`} type="button" role="tab" aria-controls={`nav-${tab.id}-tab`} aria-selected={tab.active?'true':'false'} tabIndex='-1'><span>{tab.title}</span></button>
                  ))}
                </div>
              </nav>
            </div>
            <div className="tab-content" id="nav-tabContent">
              {tab_contents.map((item) => {
                const {id,text_1,text_2,title,show} = item;
                return <div key={id} className={`tab-pane fade ${show?'show active':''}`} id={id} 
                role="tabpanel" aria-labelledby={`nav-${id}-tab`}>
                <div className="tpmission">
                  <div className="tpmission__content">
                    <h2 className="tp-mission-title">{title}</h2>
                    <p className="pb-20">{text_1}</p>
                    <p>{text_2}</p>
                  </div>
                </div>
              </div>
              })}
            </div>
          </div>
          <div className="col-xl-6 col-lg-5 col-md-12 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
            <div className="tp-mission-img">
              <img src={img} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionArea;
