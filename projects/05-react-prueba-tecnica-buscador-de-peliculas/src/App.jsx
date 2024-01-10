import { useCallback } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { useSortMovies } from './hooks/useSortMovies'
import debounce from 'just-debounce-it'

function App() {
	const { search, updateSearch, error } = useSearch()
	const { sort, sortMovies } = useSortMovies()
	const { movies, getMovies, loading } = useMovies({ search, sort })

	const debouncedGetMovies = useCallback(
    debounce(search => {
      console.log('search', search)
      getMovies({ search })
    }, 300)
    , [getMovies]
  )

	const handleSubmit = (event) => {
		event.preventDefault()
		getMovies({ search })
	}

	const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

	const handleSort = () => {
		sortMovies()
	}

  return (
    <div className='page'>
      <header>
				<h1>Buscador de películas</h1>
				<form className='form' onSubmit={handleSubmit}>
					<input
						style={
							{
								border: '1px solid transparent',
								borderColor: error ? 'red' : 'transparent'
							}
						}
						value={search}
						onChange={handleChange}
						name='search'
						type="text"
						placeholder='Avengers, Star Wars, The Matrix, ...'
					/>

					<input id='sortMovies' type="checkbox" checked={sort} onChange={handleSort} />
					<label htmlFor="sortMovies" className='sortCheck'>Ordenar</label>

					<button type='submit'>Buscar</button>
				</form>
				{error && <p style={{color: 'red'}}>{error}</p>}
			</header>

			<main>
				{
					loading
						? <p>Cargando ...</p>
						: <Movies movies={movies} />
				}
			</main>
    </div>
  )
}

export default App
