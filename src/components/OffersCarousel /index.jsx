import React, { useEffect, useState } from 'react'

import Offers from '../../assets/offers.svg'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'

import { useMediaQuery } from 'react-responsive'
import { Container, OfferImg, Image, ContainerItems, Button } from './styles'
import Carousel from 'react-elastic-carousel'

const OffersCarousel = () => {
	const [offers, setOffers] = useState([])

	const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
	const itemsToShow = isMobile ? 2 : 4

	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 768, itemsToShow: 3 },
		{ width: 1200, itemsToShow: 4 }
	]

	useEffect(() => {
		;(async () => {
			const { data } = await api.get('products')

			const filteredData = data
				.filter((product) => product.offer)
				.map((product) => {
					return {
						...product,
						formatPrice: formatCurrency(product.price)
					}
				})

			setOffers(filteredData)
		})()
	}, [])

	return (
		<Container>
			<OfferImg src={Offers} alt="logo das ofertas" />
			<Carousel itemsToShow={itemsToShow} breakPoints={breakPoints}>
				{offers &&
					offers.map((product) => (
						<ContainerItems key={product.id}>
							<Image src={product.url} alt="foto das ofertas" />

							<p>{product.name}</p>

							{/* <span>{formatCurrency(product.price)}</span> */}
							{/*  aqui caso precise usar em grandes aplicações*/}

							<span>{product.formatPrice}</span>

							<Button>
								<span>Peça agora</span>
							</Button>
						</ContainerItems>
					))}
			</Carousel>
		</Container>
	)
}

export default OffersCarousel
