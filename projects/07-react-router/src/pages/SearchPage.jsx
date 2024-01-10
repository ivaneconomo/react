import { useEffect } from 'react'

export default function SearchPage ({ routeParams }) {
	useEffect(() => {
		document.title = `Has buscado ${routeParams.query}`
	}, [routeParams.query])

	return (
		<h1>Buscando: {routeParams.query}</h1>
	) 
}