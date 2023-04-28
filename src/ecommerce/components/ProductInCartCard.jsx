import { useContext } from 'react';
import '../assets/css/inCartProductCard.css';
import { EcommerceContext } from '../../context';


export const ProductInCartCard = ({ product }) => {
  
  const { onProductRemove, onProductAddAmount, onProductSubstractAmount } = useContext(EcommerceContext);
  return (
    <div className="product-incart-card">
      <div className="img-container">
        <img className='product-incart-img' src={`/assets/products_images/${product.image}.webp`} alt="" />
      </div>
      <h4 className='product-name'>{ product.name }</h4>
      <div className="cont">
        <div className="actions-bar">
          <button className="btn-add" onClick={()=> onProductSubstractAmount(product) }>-</button>
          <span className="amount-text">{product.amount}</span>
          <button className="btn-substract" onClick={() => onProductAddAmount(product)}>+</button>
        </div>
        <div className="product-price-delete">
          <span className='price-text'>$ {product.price}</span>
        </div>
      </div>
      <button className="delete-btn bx bx-trash" onClick={() => onProductRemove(product)} ></button>
    </div>
  )
}
