import { useState } from 'react';
import {HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, Button, ArrowForward, ArrowRight, VideoBg } from './styles';
import Video from '../../assets/video/city.mp4';

type Props = {};

const HeroSection = (props: Props) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} />
      </HeroBg>
      <HeroContent>
        <HeroH1>Há <span>15 anos</span> entregando justiça ao cidadão</HeroH1>
        <HeroP>
          O desafio, a complexidade e a aparente dificuldade da causa despertam a excelência técnica a ser alcançada pelo nosso trabalho. 
          O que acaba por promover, consequentemente, a almejada obtenção dos melhores resultados previstos em nosso ordenamento jurídico, como forma de entregar justiça àqueles que dela necessitam!
        </HeroP>
        <HeroBtnWrapper>

          <Button
            to="nossa-historia"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary={true}
            dark={true}
            big={true}
            fontBig={true}
          >
            Conheça nossa história
            { hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection