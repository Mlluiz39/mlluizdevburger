import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

import { useUser } from '../../hooks/UserContext'
import Button from '../../components/Button'
import { toast } from 'react-toastify'

import Logo from '../../assets/logo.svg'
import api from '../../services/api'
import {
	Container,
	ContainerImage,
	ContainerItens,
	Label,
	Input,
	ErrorMessage,
	SignInLink
} from './styles'

function login() {
	const history = useHistory()
	const { putUserData } = useUser()

	const schema = Yup.object().shape({
		email: Yup.string()
			.email('Digite um email valido!')
			.required('O email é obrigatório!'),
		password: Yup.string()
			.required('A senha é obrigatória!')
			.min(8, 'No mínimo 8 caracteres!')
	})

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(schema)
	})

	const onSubmit = async (dataClient) => {
		const { data } = await toast.promise(api.post('sessions', dataClient), {
			pending: 'Consultando seu dados...',
			success: 'Seja bem vindo(a)',
			error: 'Verifique seus dados'
		})

		putUserData(data)

		setTimeout(() => {
			history.push('/')
		}, 1000)
	}

	return (
		<Container>
			<ContainerImage />
			<ContainerItens>
				<img src={Logo} alt="logo" />

				<h1>Login</h1>

				<form noValidate onSubmit={handleSubmit(onSubmit)}>
					<Label>
						Email
						<Input
							type="email"
							{...register('email')}
							error={errors.email?.message}
							placeholder="Digite seu email"
						/>
						<ErrorMessage>{errors.email?.message}</ErrorMessage>
					</Label>

					<Label>
						Senha
						<Input
							type="password"
							{...register('password')}
							error={errors.password?.message}
							placeholder="Digite sua senha"
						/>
						<ErrorMessage>{errors.password?.message}</ErrorMessage>
					</Label>

					<Button type="submit" style={{ marginBottom: 30, marginTop: 65 }}>
						Entrar
					</Button>

					<SignInLink>
						Não tem uma conta ? <Link to="/cadastro">Cadastre-se</Link>
					</SignInLink>
				</form>
			</ContainerItens>
		</Container>
	)
}

export default login
