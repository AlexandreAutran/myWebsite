import React from 'react'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'
import icon1 from '../../images/svg-1.svg'
import icon2 from '../../images/svg-1.svg'
import icon3 from '../../images/svg-1.svg'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={icon1} />
          <ServicesH2>Reduce expences</ServicesH2>
          <ServicesP>We are here to help you wertyuiopytreertyuiopoiuytrertyuiouytre</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon2} />
          <ServicesH2>Virtual offices</ServicesH2>
          <ServicesP>We are here to help you wertyuiopytreertyuiopoiuytrertyuiouytre</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon3} />
          <ServicesH2>Need help</ServicesH2>
          <ServicesP>We are here to help you wertyuiopytreertyuiopoiuytrertyuiouytre</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
      
    </ServicesContainer>
  )
}

export default Services
