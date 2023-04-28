import { useParams } from "react-router-dom";
import { getProductsById } from "../helpers/getProductsById";
import '../assets/css/marketProductPage.css';
import { useContext } from "react";
import { EcommerceContext } from "../../context";

export const MarketProductPage = () => {

  const { productId } = useParams();
  const product = getProductsById(productId) || {};
  const { onProductAddToCart, ProductsCart } = useContext(EcommerceContext);
  const isExist = ProductsCart.findIndex((producto) => producto.id === product.id);

  return (
    <div className="product-card-page">

      <img
        src={`/assets/products_images/${product.image}.webp`}
        className="product-page-image animate__animated animate__fadeInLeft"
        alt={product.name}
      
      />

      <div className="product-info animate__animated animate__fadeInRight">
        <div className="page-info">
          <h4 className="product-name-text">{product.name}</h4>
          <h3 className="product-price-text">$ {product.price}</h3>
        </div>
        <div className="purchase-options">
          <p className="text-shipping">
            <i className="bi bi-truck"></i>
            <span>Envío gratis a todo el país</span>
          </p>
          <p className="official-shop">Tienda oficial de: <span>{product.brand}</span></p>
          <p className="product-stock-disponible">Stock disponible</p>
          <p className="text">
            Cantidad: <b>{product.amount} unidad </b>
            <span className="text-muted">
              ({product.stock} disponibles)
            </span>
          </p>
          <div className="actions">
            <button className="buy-btn">
              Comprar ahora
            </button>
            <button className="buy-btn" onClick={ () => onProductAddToCart(product) }>
              <i className="bi bi-
              cart"></i>
              {
                  (isExist === -1) // is false?
                    ? 'Agregar al carrito' 
                    : 'Agregado'
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
