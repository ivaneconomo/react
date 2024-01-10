import './Filters.css'
import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
	const { filters, setFilters } = useFilters()

	const minPriceFilterId = useId()
	const categoryFilterId = useId()

	const handleChangeMinPrice = (event) => {
		const newPrice = event.target.value
		setFilters(prevState => ({
			... prevState,
			minPrice: newPrice
		}))
	}

	const handleChangeCategory = (event) => {
		const newCategory = event.target.value
		setFilters(prevState => ({
			... prevState,
			category: newCategory
		}))
	}

	return (
		<section className='filters'>
			<div>
				<label htmlFor={minPriceFilterId}>Price</label>
				<input 
					type="range"
					id={minPriceFilterId}
					min='0'
					max='1749'
					onChange={handleChangeMinPrice}
					value={filters.minPrice}
				/>
				<span>$ {filters.minPrice}</span>
			</div>

			<div>
				<label htmlFor={categoryFilterId}>Categoría</label>
				<select name="categorías" id={categoryFilterId} onChange={handleChangeCategory} value={filters.category}>
					<option value="all">Todas</option>
					<option value="laptops">Laptops</option>
					<option value="smartphones">Smartphones</option>
				</select>
			</div>
		</section>
	)
}