import React, { useState } from 'react';
import Navbar from '../../components/nav';
import Sidebar from '../../components/sidebar';
import { Container, ContentContainer } from './styles';

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
          {/* <HeroSection /> */}
        </div>
      </ContentContainer>
    </>
  )
}

export default Home;