import React, { useEffect, useState } from 'react'

import Category from '../../assets/category-home.png'
import api from '../../services/api'

import { useMediaQuery } from 'react-responsive'
import { Container, CategoryImg, Image, ContainerItems, Button } from './styles'
import Carousel from 'react-elastic-carousel'

const CategoryCarousel = () => {
	const [categories, setCategories] = useState([])

	const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
	const itemsToShow = isMobile ? 2 : 4

	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 768, itemsToShow: 3 },
		{ width: 1200, itemsToShow: 4 }
	]

	useEffect(() => {
		;(async () => {
			const { data } = await api.get('categories')

			setCategories(data)
		})()
	}, [])

	return (
		<Container>
			<CategoryImg src={Category} alt="logo da categoria" />
			<Carousel itemsToShow={itemsToShow} breakPoints={breakPoints}>
				{categories &&
					categories.map((category) => (
						<ContainerItems key={category.id}>
							<Image src={category.url} alt="foto da categoria" />
							<Button>
								<span>{category.name}</span>
							</Button>
						</ContainerItems>
					))}
			</Carousel>
		</Container>
	)
}

export default CategoryCarousel
