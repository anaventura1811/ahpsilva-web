import React, { useState } from 'react';
import Navbar from '../../components/nav';
import Sidebar from '../../components/sidebar';
import HeroSection from '../../components/hero';
import { Container, ContentContainer } from './styles';
import HistorySection from '../../components/history';
import InfoSection from '../../components/info';
import {homeObjOne} from '../../components/info/data';

type Props = {};

const Home = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(prevState => !prevState);
  }

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
          <InfoSection homeObjOne={homeObjOne} />
        </div>
      </ContentContainer>
    </>
  )
}

export default Home;