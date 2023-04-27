import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate()
  const onCardClick = () => {
    navigate(`/products/${product.id}`)
  };
  const [isHover, setIsHover] = useState(false);
  const onCardHover = (typeOfFocus) => {
    if (!typeOfFocus) return;
    if (typeOfFocus === 'enter') return setIsHover(true);
    if (typeOfFocus === 'leave') return setIsHover(false);
  }

  return (
    <div
      className="product-card"
      onClick={onCardClick}
      onMouseEnter={() => onCardHover('enter')}
      onMouseLeave={() => onCardHover('leave')}
    >
      <LazyLoadImage
        effect="blur"
        src={product.image}
        className="product-card-image"
        alt={product.name}
      >
      </LazyLoadImage>
      <div className="product__card-body">
        <h3>$ {product.price}</h3>
        {
          (isHover)
          && (
            <h4 className="card-title animate__animated animate__fadeIn">{product.name}</h4>
          )
        }
      </div>
    </div>
  )
}
