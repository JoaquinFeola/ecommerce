import { useContext } from 'react';
import '../assets/css/marketCart.css';
import { EcommerceContext } from '../../context';
import { Link } from 'react-router-dom';

const Message = () => {
  return (
    <div className='message'>
      <img src="/assets/empty-cart.svg" className='empty-cart' alt="carrito de compras vacio" />
      <h3 className='void-cart-text'>Tu carrito esta vacío</h3>
      <p>Aún no tienes artículos en tu carrito de compra.</p>
      <Link to={"/"}>Ir al listado de productos</Link>
    </div>
  )
}
export const MarketCartPage = () => {
  const { ProductsCart } = useContext(EcommerceContext);

  return (
    <>
      {
        (ProductsCart.length === 0) && <Message />
      }
      <div className="market-cart-container">
        <div className="cart-content"></div>
        <div className="pay-methods"></div>
        <div className="total-purchase"></div>
      </div>
    </>
  )
}
