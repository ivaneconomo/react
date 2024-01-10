import './Cart.css'
import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import { useCart } from '../hooks/useCart.jsx'

function CartItem({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - $ {price}
      </div>
      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export function Cart() {
  const cartCheckBox = useId()
  const { cart, addToCart, clearCart } = useCart()

  return (
    <>
      <label htmlFor={cartCheckBox} className='cart-button'>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckBox} hidden />

      <aside className='cart'>
        <ul>
					{cart.map(product => (
						<CartItem
							key={product.id}
							addToCart={() => addToCart(product)}
							{...product}
						/>
					))}
				</ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
