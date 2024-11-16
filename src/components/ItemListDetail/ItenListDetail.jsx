import React, { useContext } from 'react'; 
import { useLocation, Link } from 'react-router-dom';
import { ThemeContext } from '../themetext/ThemeContext'; 
import './itemListDetail.css';

const ItemListDetail = ({ addToCart }) => {
  const location = useLocation();
  const product = location.state.product;
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`item-list-detail container my-5 ${theme}`}>
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} />
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h5>Precio: ${product.price}</h5>
          <div className="mt-3 d-flex justify-content-center">
            <button 
              className="btn btn-warning me-2" 
              onClick={() => addToCart(product)}
            >
              Agregar al carrito
            </button>
            <Link to="/" className="btn btn-secondary">
              Volver a la Tienda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListDetail;
