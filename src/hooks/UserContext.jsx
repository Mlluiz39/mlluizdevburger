import React, { createContext, useContext, useEffect, useState } from 'react'

//colocar o nome do contexto em maiúsculo
const UserContext = createContext({})

//criar um hook para usar o contexto
export const UserProvider = ({ children }) => {
	const [userData, setUserData] = useState({})

	const putUserData = async (userValue) => {
		setUserData(userValue)

		localStorage.setItem('mlluizDevBurger:user', JSON.stringify(userValue))
	}

	//fazer uma função para pegar os dados do usuário no localStorage

	useEffect(() => {
		/*
    (async () => {  aqui vai os dados  })() é uma função auto executável
    para pegar os dados do usuário no localStorage
    */
		;(async () => {
			const userInfo = localStorage.getItem('mlluizDevBurger:user')
			if (userInfo) {
				setUserData(JSON.parse(userInfo))
			}
		})()
	}, [])

	return (
		<UserContext.Provider value={{ putUserData, userData }}>
			{children}
		</UserContext.Provider>
	)
}

//exportar o contexto e o provider e criando um hook para usar o contexto
export const useUser = () => {
	const context = useContext(UserContext)
	if (!context) {
		throw new Error('useUser must be used within a UserProvider')
	}
	return context
}
