import './Footer.css'
import { useContext } from 'react'
import { FiltersContext } from '../context/filters'
import { useCart } from '../hooks/useCart'
import { IS_DEVELOPMENT } from '../config.js'

export function Footer() {
  const { filters } = useContext(FiltersContext)
  const { cart } = useCart()

  return (
    <footer className='footer'>
      {!IS_DEVELOPMENT ? (
        <>
          {JSON.stringify(cart, null, 2)}
          <br />
          {JSON.stringify(filters, null, 2)}
        </>
      ) : (
        <>
					<h4>
            Prueba técnica de React ⚛️ -<span>@midudev</span>
          </h4>
          <h5>Shopping Cart con useContext & useReducer</h5>
        </>
      )}
    </footer>
  )
}
