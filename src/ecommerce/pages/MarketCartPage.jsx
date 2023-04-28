import { useContext } from 'react';
import '../assets/css/marketCart.css';
import { EcommerceContext } from '../../context';
import { Link, useNavigate } from 'react-router-dom';
import { ProductInCartCard } from '../components/ProductInCartCard';

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
  const totalCartPrice = ProductsCart.map((product) => product.price);
  const navigate = useNavigate();
  const finalizePurchase = () => {
    navigate('/finalizePurchase');
  }
  return (
    <div className='cart-page'>
      {
        (ProductsCart.length === 0) && <Message />
      }
      <div className="market-cart-container">
        <div className="cart-content">
          {
            ProductsCart.map((product) => (
              <ProductInCartCard
                product={product}
                key={product.id}
              />
            ))
          }
        </div>
        <div className="pay-methods"></div>
        {
          (ProductsCart.length === 0)
            ? null
            : (
              <>
                <div className="total-purchase">
                  <div className="total">
                    <p>Total:</p>
                    <div className="total-purchase-title-container">
                      <h3>
                        €: {totalCartPrice.reduce((prev, current) => prev + current, 0)}
                      </h3>
                    </div>
                  </div>
                  <div className="finish-purchase">
                    <button onClick={finalizePurchase} className='btn-finalizar'>Finalizar compra</button>
                  </div>
                </div>
              </>
            )
        }
      </div>
    </div>
  )
}
