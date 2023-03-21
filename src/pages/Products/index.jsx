import React, { useState, useEffect } from 'react'

import ProductsLogo from '../../assets/hamburger-products.svg'

import {
	Container,
	ProductsImg,
	CategoryButton,
	CategoriesMenu
} from './styles'

import api from '../../services/api'

const Products = () => {
	const [categories, setCategories] = useState([])
	const [activeCategory, setActiveCategory] = useState([])

	useEffect(() => {
		async function loaderCategories() {
			const { data } = await api.get('categories')

			const newCategories = [{ id: 0, name: 'Todas' }, ...data]

			setCategories(newCategories)

      console.log(newCategories)
		}

		loaderCategories()
	}, [])

	return (
		<Container>
			<ProductsImg src={ProductsLogo} alt="logo da home de produtos" />
			<CategoriesMenu>
				{categories &&
					categories.map((category) => (
						<div key={category.id}>
							<CategoryButton
								type="button"
								key={category.id}
								isActiveCategory={activeCategory === category.id}
								onClick={() => setActiveCategory(category.id)}
							>
								{category.name}
							</CategoryButton>
						</div>
					))}
			</CategoriesMenu>
		</Container>
	)
}

export default Products
