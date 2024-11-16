import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Buscador.css';

const FiltroBusqueda = ({ products, setFilteredProducts }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);

        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(value)
        );

        setFilteredProducts(filtered);
    };

    return (
        <div className="filtro-busqueda mb-4 d-flex justify-content-center">
            <div className="input-group modern-input-group">
                <span className="input-group-text modern-icon">
                    <i className="bi bi-search"></i>
                </span>
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="form-control modern-input"
                />
            </div>
        </div>
    );
};

export default FiltroBusqueda;
