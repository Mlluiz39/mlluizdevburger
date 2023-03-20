import styled from 'styled-components'

export const Container = styled.div`
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 35px;
	padding: 35px 0;

	.rec.rec-arrow {
		background-color: #9758a6;
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
		color: #efefef;
	}

	.rec.rec-arrow:hover {
		border: 2px solid #9758a6;
		background-color: #efefef;
		color: #9758a6;
	}

	.rec.rec-arrow:disabled {
		border: none;
		background-color: #bebebf;
		color: #fff;
	}
`

export const OfferImg = styled.img`
	@media (max-width: 768px) {
		width: 50%;
	}
`

export const ContainerItems = styled.div`
	display: flex;
	flex-direction: column;

	border-radius: 10px;

	p {
		margin-top: 16px;
		font-style: normal;
		font-size: 18px;
		font-weight: bold;
		line-height: 120%;

		color: #494949;
	}

	span {
		margin-top: 8px;
		margin-bottom: 16px;
		font-style: normal;
		font-size: 16px;
		font-weight: bold;
		line-height: 120%;

		color: #212121;
	}
`

export const Image = styled.img`
	width: 282px;
	height: 283px;
	border-radius: 10px;

	@media (max-width: 768px) {
		width: 180px;
		height: 180px;
	}
`

export const Button = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 21px 48px;
	gap: 10px;

	width: 283.4px;
	height: 66px;

	background: #9758a6;
	box-shadow: 0px 5px 10px rgba(151, 88, 166, 0.22),
		0px 20px 40px rgba(151, 88, 166, 0.24);

	border: none;
	border-radius: 8px;

	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 100%;

	text-align: center;

	span {
		color: #fff;
    margin: 0 auto;
	}

	cursor: pointer;

	&:hover {
		opacity: 0.8;
	}

	&:active {
		opacity: 0.6;
	}

	@media (max-width: 768px) {
		width: 180px;

    

		span {
			color: #fff;
      font-size: 16px;
      margin: 0 auto;
      
  		}
	}
`
