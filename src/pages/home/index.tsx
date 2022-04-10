import React, { useState, useRef, useLayoutEffect, useCallback } from 'react';
import Navbar from '../../components/nav';
import Sidebar from '../../components/sidebar';
import HeroSection from '../../components/hero';
import { Container, ContentContainer, TestimonialsContainer } from './styles';
import HistorySection from '../../components/history';
// import InfoSection from '../../components/info';
// import {homeObjOne} from '../../components/info/data';
import Testimonials from '../../components/testimonials';

type Props = {};

const Home = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, doShow] = useState(false);

  const toggle = () => {
    setIsOpen(prevState => !prevState);
  };

  const scrollRef = useRef<HTMLInputElement>(null);

  const topPops = scrollRef?.current?.getBoundingClientRect()?.top;

  const onScroll = useCallback(() => {
    const scrollProps = window.scrollY + window.innerHeight;

    if (topPops as any < scrollProps) {
      console.log('yay, peguei scroll');
    }

  }, [topPops]);

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return (
    <>
      <Container>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle}/>
      </Container>
      <ContentContainer>
        <div className='hero-container'>
          <HeroSection />
        </div>
        <div className='summary-container' id="nossa-historia">
          <HistorySection />
        </div>
        <div className='info-container'>
          {/* <InfoSection homeObjOne={homeObjOne} /> */}
        </div>
      </ContentContainer>
      <TestimonialsContainer animate={"true"}  id="depoimentos" ref={scrollRef}>
        <Testimonials />
      </TestimonialsContainer>
    </>
  )
}

export default Home;