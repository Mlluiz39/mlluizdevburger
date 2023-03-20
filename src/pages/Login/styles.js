import styled from 'styled-components';

import Hamburger from '../../assets/hamburger-login.svg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background: #373737;

  @media (width: 600px) {
    background-image: none;
  }
`;
export const ContainerImage = styled.div`
  flex: 1;
  background: url(${Hamburger}) no-repeat;

  @media (max-width: 600px) {
		display: none;
	}
`;
export const ContainerItens = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    margin-top: 100px;
    margin-bottom: 17px;
    color: #fff;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
  }

  form {
    margin: 0 10px;

    @media (max-width: 600px) {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;

  margin-bottom: 25px;

  color: #ffffff;
`;
export const Input = styled.input`
  width: 391.42px;
  height: 38.32px;
  margin: 5px 0;
  background: #ffffff;
  border-radius: 5px;
  outline: none;
  border: ${(props) => (props.error ? '2px solid #cc1717;' : 'none')};
  padding: 0 10px;
`;

export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  margin-top: 2px;
  color: #ff0000;
`;

export const SignInLink = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;

  a {
    cursor: pointer;
    text-decoration: underline;
    font-weight: 300;
    color: #ffffff;
  }
`;
