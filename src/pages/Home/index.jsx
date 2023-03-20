import React from 'react'

import BackgroundHome from '../../assets/hamburger.svg'
import CategoryCarousel from '../../components/CategoryCarousel'
import OffersCarousel from '../../components/OffersCarousel '

import { Container, HomeImg } from './styles'

const index = () => {
	return (
		<Container>
			<HomeImg src={BackgroundHome} alt="logo da home" />
			<CategoryCarousel />
			<OffersCarousel />
		</Container>
	)
}

export default index
