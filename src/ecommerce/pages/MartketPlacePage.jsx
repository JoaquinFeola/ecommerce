import '../assets/css/marketPlace.css';
import { ProductCard } from '../components/ProductCard';
import { Products } from '../services/ProductsServices';

export const MartketPlace = () => {
  return (
    <div className="market-place-products">
      <div className="marketplace-products-container">
        {
          Products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </div>
  )
}
