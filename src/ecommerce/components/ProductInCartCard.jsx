import '../assets/css/inCartProductCard.css';


export const ProductInCartCard = ({ product }) => {
  return (
    <div className="product-incart-card">
        <div className="img-container">
          <img className='product-incart-img' src={ `/assets/products_images/${product.image}.webp`} alt="" />
        </div>
        <div className="actions-bar">
            <button className="btn-add">-</button>
            <span className="amount-text">{ product.amount }</span>
            <button className="btn-substract">+</button>
        </div>
        <div className="product-price-delete">
          <span className='price-text'>$ { product.price }</span>
        </div>
        <button className="delete-btn bx bx-trash"></button>
    </div>
  )
}
