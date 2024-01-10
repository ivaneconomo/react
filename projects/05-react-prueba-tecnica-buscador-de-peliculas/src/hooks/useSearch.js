import { useEffect, useState, useRef } from 'react'

export function useSearch() {
	const [search, updateSearch] = useState('')
	const [error, setError] = useState(null)
	const isFirstInput = useRef(true)

	useEffect(() => {
		if (isFirstInput.current) {
			isFirstInput.current = search === ''
			return
		}

		if (search === '') {
			setError('Completa éste campo.')
			return
		}

		if (search.match(/^\d+$/)) {
			setError('No puedes buscar una película con un número.')
			return
		}

		if (search.length < 3) {
			setError('Ingresa al menos 3 caracteres.')
			return
		}

		setError(null)

	}, [search])

	return { search, updateSearch, error }
}