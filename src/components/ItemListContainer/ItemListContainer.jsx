import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import fennec from "../assets/fennec.jpg";
import Octane from "../assets/octane.jpg";
import dominus from "../assets/dominus.jpg";
import rocketLeague from "../assets/nissan.jpg";
import breakaway from "../assets/porsche.jpg";
import trailblazer from "../assets/rayo.jpg";
import '../Card/card.css';
import FiltroBusqueda from '../FiltroBusqueda/FiltroBusqueda';
import { ThemeContext } from '../themetext/ThemeContext'; 

const ItemListContainer = ({ addToCart }) => {
    const products = [
        { id: 1, name: 'Fennec', description: 'Este es un auto icónico que destaca por su diseño aerodinámico y su velocidad excepcional. Es todo lo que buscas.', price: 20000, image: fennec },
        { id: 2, name: 'Octane', description: 'Un vehículo con tecnología avanzada y un diseño moderno. Llevará tus expectativas al máximo nivel.', price: 25000, image: Octane },
        { id: 3, name: 'Dominus', description: 'Este auto combina confort y eficiencia en un solo combo, no te pierdas esta oportunidad!', price: 30000, image: dominus },
        { id: 4, name: 'Nissan', description: 'Un auto diseñado para el rendimiento y la velocidad en el campo de juego.', price: 27000, image: rocketLeague },
        { id: 5, name: 'Porsche', description: 'Con un diseño elegante y potente, este auto es perfecto para cualquier conductor.', price: 32000, image: breakaway },
        { id: 6, name: 'Rayo', description: 'Un vehículo robusto que combina durabilidad con estilo.', price: 29000, image: trailblazer },
    ];

    const [filteredProducts, setFilteredProducts] = useState(products);
    const { theme } = useContext(ThemeContext); 

    return (
        <div className="item-list-container container">
            <h2>Productos</h2>
            <FiltroBusqueda products={products} setFilteredProducts={setFilteredProducts} />
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {filteredProducts.map((product) => (
                    <div className="col d-flex align-items-stretch" key={product.id}>
                        <div className="card flex-fill"
                            style={{
                                backgroundColor: theme === 'dark' ? '#f1faee' : '#333',
                                color: theme === 'dark' ? '#333' : '#f1faee', 
                            }}
                        >
                            <img src={product.image} className="card-img-top" alt={product.name} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <button onClick={() => addToCart(product)} className="btn btn-dark">Comprar</button>
                                <Link to="/item-detail" state={{ product }} className="btn btn-success ms-2">Ver Detalle</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;
