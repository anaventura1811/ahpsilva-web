import React from 'react';
import { Button } from '../hero/styles';
import { InfoRow, InfoContainer, InfoWrapper, Column1, Column2, TopLine, TextWrapper, Heading, Subtitle, BtnWrap, Img, ImgWrap } from './styles';

type Props = {
  homeObjOne: {
    id: string,
    lightBg: boolean,
    lightText: boolean,
    lightTextDesc: boolean,
    topLine: string,
    headline: string,
    description: string,
    buttonLabel: string,
    imgStart: boolean,
    img: string,
    alt: string,
    dark: boolean,
    primary: boolean,
    darkText: boolean,
  }
};

const InfoSection = (props: Props) => {
  const { homeObjOne } = props;
  const { id, lightBg, lightText, dark, description, img, alt, primary, darkText, headline, topLine, lightTextDesc,imgStart, buttonLabel } = homeObjOne;

  return (
    <>
      <InfoContainer id={id} lightBg={lightBg}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>
                  {headline}
                </Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    dark={dark}
                    primary={primary}
                    to="home"
                    big={true}
                    fontBig={true}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection;