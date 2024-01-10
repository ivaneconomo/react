import { useState } from 'react';

export function useSortMovies() {
	const [sort, setSort] = useState(false)

	const sortMovies = () => {
		setSort(!sort)
	}

	return { sort, sortMovies }
}