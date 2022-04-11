import { AboutContainer, ImageContainer, Logo, TextWrapper, Topline } from './styles';
import image from '../../assets/images/building-blocks.svg';
import logo from '../../assets/logo/AntonioPereira-01.png';


type Props = {};

const About = (props: Props) => {

  return (
    <AboutContainer>
      <Logo to="/">
        <img src={logo} alt={"Logo do site AHP Silva"}/>
      </Logo>
      <TextWrapper>

        <Topline>Em construção... </Topline>
      </TextWrapper>

      <ImageContainer>
        <img src={image} alt={"Building blocks"}/>
      </ImageContainer>
    </AboutContainer>
  );
}

export default About;