import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import Button from '../../components/Button'

import Logo from '../../assets/logo.svg'
import api from '../../services/api'

import { toast } from 'react-toastify'
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
	const schema = Yup.object().shape({
		name: Yup.string('O  seu nome é obrigatório!').required(
			'O nome é obrigatório!'
		),
		email: Yup.string()
			.email('Digite um email valido!')
			.required('O email é obrigatório!'),
		password: Yup.string()
			.required('A senha é obrigatória!')
			.min(8, 'No mínimo 8 caracteres!'),
		confirmPassword: Yup.string()
			.required('A senha é obrigatória!')
			.oneOf([Yup.ref('password')], 'As senhas devem ser iguais!')
	})

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(schema)
	})

	const onSubmit = async (dataClient) => {
		try {
			const { status } = await api.post('users', dataClient, {
				validateStatus: () => true
			})

			if (status === 200 || status === 201) {
				toast.success('Cadastro realizado com sucesso!')
			} else if (status === 409) {
				toast.error('Email já cadastrado! Faça o login!')
			} else {
				throw new Error()
			}
		} catch (error) {
			toast.error('Falha no sistema! Tente Novamente mais tarde!')
		}
	}

	return (
		<Container>
			<ContainerImage />
			<ContainerItens>
				<img src={Logo} alt="logo" />

				<h1>Cadastre-se</h1>

				<form noValidate onSubmit={handleSubmit(onSubmit)}>
					<div>
						<Label error={errors.name?.message}>Nome</Label>

						<Input
							type="text"
							{...register('name')}
							error={errors.name?.message}
							placeholder="Digite seu nome"
						/>
						<ErrorMessage>{errors.name?.message}</ErrorMessage>
					</div>
					<div>
						<Label error={errors.email?.message}>Email </Label>
						<Input
							type="email"
							{...register('email')}
							error={errors.email?.message}
							placeholder="Digite seu email"
						/>
						<ErrorMessage>{errors.email?.message}</ErrorMessage>

						<Label>Senha </Label>
						<Input
							type="password"
							{...register('password')}
							error={errors.password?.message}
							placeholder="Digite sua senha"
						/>
						<ErrorMessage>{errors.password?.message}</ErrorMessage>
					</div>
					<div>
						<Label>Confirmar Senha </Label>
						<Input
							type="password"
							{...register('confirmPassword')}
							error={errors.confirmPassword?.message}
							placeholder="Digite sua senha"
						/>
						<ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
					</div>

					<Button type="submit" style={{ marginBottom: 25, marginTop: 25 }}>
						Cadastrar
					</Button>

					<SignInLink>
						Já possui conta ? <Link to="/login">Entrar</Link>
					</SignInLink>
				</form>
			</ContainerItens>
		</Container>
	)
}

export default login
