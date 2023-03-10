import React from 'react'

import BackgroundHome from '../../assets/home-logo.png'
import CategoryCarousel from '../../components/CategoryCarousel'

import { Container, HomeImg } from './styles'


const index = () => {
  return (
    <Container>
      <HomeImg src={BackgroundHome} alt="logo da home" />
     <CategoryCarousel />
    </Container>
  )
}

export default index