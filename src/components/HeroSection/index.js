import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import { Button } from '../ButtonElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

const onHover = () => {
  setHover(!hover)
}

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='/video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Ecocoricoo</HeroH1>
        <HeroP> Les meilleurs produits, près de chez vous avec 0 déchets et 0 CO2</HeroP>
        <HeroBtnWrapper>
          <Button 
            to="signup" 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary= "true"
            dark= "true"
             >
            C'est Parti {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection