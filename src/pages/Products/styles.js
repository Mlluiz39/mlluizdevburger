import styled from 'styled-components'

export const Container = styled.div``

export const ProductsImg = styled.img`
	width: 100%;

	@media (min-width: 768px) {
		width: 100%;
	}
`
export const CategoriesMenu = styled.div`
	display: flex;
	justify-content: center;
	gap: 50px;
	margin-bottom: 20px;

	@media (max-width: 768px) {
		display: flex;
		width: 50px;
		margin: 0 auto;
		gap: 10px;
	}
`

export const CategoryButton = styled.button`
	background: none;
	border: none;
	border-bottom: ${(props) =>
		props.isActiveCategory ? '2px solid #9758a4' : 'none'};
	color: ${(props) => (props.isActiveCategory ? '#9758a4' : '#9a9a9d')};
	font-size: 17px;
	line-height: 20px;
	cursor: pointer;

	@media (max-width: 768px) {
		font-size: 12px;
		line-height: 16px;
	}
`
