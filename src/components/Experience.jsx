import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Timeline } from 'antd';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import { content } from '../Content';
import { TbDiscountCheck } from 'react-icons/tb';
import { BsCalendar2Date } from 'react-icons/bs';

// Import images
import icoc from '../assets/logos/icoc.png';
import novaliches from '../assets/logos/novaliches.png';
import haccp from '../assets/logos/haccp.jpg';
import englishLogo from '../assets/logos/english.avif';
import cpcLogo from '../assets/logos/cpc.jpeg';

const TimeWork = ({ props, style }) => {
  const { company, role, endDate } = props;
  return (
    <div className={style}>
      <div
        data-aos="fade-right"
        data-aos-duration="900"
        data-aos-delay="200"
        className="mr-24 w-full text-center text-neutral-700 leading-loose"
      >
        <p className="font-semibold text-[#2DADA2]">{company}</p>
        <div className="flex flex-col gap-y-2">
          {role &&
            role.map((element, index) => (
              <div key={index} className="flex justify-center items-center">
                <span className="mr-2">
                  <TbDiscountCheck size={20} color={'#2CAAA0'} />
                </span>
                <p>{element}</p>
              </div>
            ))}
          <div className="flex justify-center items-center">
            <div className="mr-2">
              <BsCalendar2Date size={20} color={'#2CAAA0'} />
            </div>
            <span className="font-bold text-neutral-700">{endDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const SwiperCart = ({ company, style }) => {
  return (
    <div className={style}>
      <div
        data-aos="zoom-out"
        data-aos-duration="900"
        data-aos-delay="200"
        className="w-fit ml-20"
      >
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper hover:-translate-y-5 duration-300 w-60 h-80"
        >
          {company.length &&
            company.map((element, index) => (
              <SwiperSlide
                key={index}
                className="outline-none outline-offset-0 hover:transition-all hover:duration-500 hover:outline outline-2 hover:outline-[#2CAAA0] shadow-lg shadow-cyan-500/50"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '18px',
                  fontSize: '22px',
                  fontWeight: 'bold',
                  color: '#fff',
                }}
              >
                <img
                  className="object-cover object-center w-full h-full cursor-pointer transition-opacity duration-500"
                  src={element.imageUrl}
                  alt={element.alt}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

const DotCustom = ({ logo, customStyle = '' }) => {
  return (
    <div className={twMerge('w-20 h-20', customStyle)}>
      <img
        className="object-fill rounded-full"
        src={logo.imageUrl}
        alt={logo.alt}
      />
    </div>
  );
};

function Experiences() {
  return (
    <section id="exp">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          Experiences
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          What i did
        </h4>
        <br />
        <div className="grid place-items-center pt-14">
          <Timeline
            mode={`${window.innerWidth < 500 ? 'left' : 'alternate'}`}
            items={[
              {
                label: (
                  <TimeWork props={content.WorkTimeLine.cpc} style={'pl-8'} />
                ),
                dot: (
                  <div className="-ml-16">
                    <DotCustom
                      customStyle="ml-14 w-16 h-16"
                      logo={{
                        imageUrl: cpcLogo,
                        alt: 'cpc',
                      }}
                    />
                  </div>
                ),
                children: (
                  <SwiperCart company={content.Carts.cpc} style={'mr-52'} />
                ),
                style: {
                  marginBottom: '580px',
                },
              },
              {
                label: (
                  <TimeWork props={content.WorkTimeLine.icoc} style={'pr-8'} />
                ),
                dot: (
                  <DotCustom
                    logo={{
                      imageUrl: icoc,
                      alt: 'icoc',
                    }}
                  />
                ),
                children: <SwiperCart company={content.Carts.icoc} />,
                style: {
                  marginBottom: '70px',
                  width: `${window.innerWidth < 1650 ? '850px' : '900px'}`,
                },
              },
              {
                label: (
                  <TimeWork
                    props={content.WorkTimeLine.novaliches}
                    style={'pl-8'}
                  />
                ),
                dot: (
                  <div className="ml-2">
                    <DotCustom
                      logo={{
                        imageUrl: novaliches,
                        alt: 'novaliches',
                      }}
                    />
                  </div>
                ),
                children: (
                  <SwiperCart
                    // className="mr-5"
                    company={content.Carts.novaliches}
                    style={'mr-52'}
                  />
                ),
                style: {
                  marginBottom: '70px',
                },
              },
              {
                label: <TimeWork props={content.WorkTimeLine.haccp} />,
                dot: (
                  <DotCustom
                    logo={{
                      imageUrl: haccp,
                      alt: 'haccp',
                    }}
                  />
                ),
                children: <SwiperCart company={content.Carts.haccp} />,
                style: {
                  marginBottom: '70px',
                },
              },
              {
                label: <TimeWork props={content.WorkTimeLine.englishCenter} />,
                dot: (
                  <DotCustom
                    logo={{
                      imageUrl: englishLogo,
                      alt: 'english',
                    }}
                  />
                ),
                children: <SwiperCart company={content.Carts.englishCenter} />,
                style: {
                  marginBottom: '70px',
                },
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default Experiences;
