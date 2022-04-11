import React, { useState, useRef, useLayoutEffect, useCallback, useEffect } from 'react';
import Navbar from '../../components/nav';
import Sidebar from '../../components/sidebar';
import HeroSection from '../../components/hero';
import { Container, ContentContainer, TestimonialsContainer } from './styles';
import HistorySection from '../../components/history';
// import InfoSection from '../../components/info';
// import {homeObjOne} from '../../components/info/data';
import Testimonials from '../../components/testimonials';
import ContactSection from '../../components/contact';

type Props = {};

const Home = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, doShow] = useState('');
  const [scrollNav, setScrollNav] = useState('');

  const changeNav = () => {
    if (window.scrollY >= 80 && window.scrollY <= 714) {
      setScrollNav('gray');
    } else if (window.scrollY > 714) {
      setScrollNav('blue');
    } else {
      setScrollNav('');
    }
  };


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
    window.addEventListener('scroll', changeNav);

    return () => window.removeEventListener('scroll', changeNav);
  }, []);

  return (
    <>
      <Container scrollNav={scrollNav}>
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
      <ContactSection />
    </>
  )
}

export default Home;