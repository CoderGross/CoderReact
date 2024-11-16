import React, { useContext } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTrashAlt } from 'react-icons/fa';
import { ThemeContext } from '../themetext/ThemeContext';

const CartSummary = ({ cartItems, onEmptyCart, onCheckout, removeItem }) => {
    const { theme } = useContext(ThemeContext); 
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const isDarkTheme = theme === 'dark';

    return (
        <div 
            className="cart-summary p-4 rounded shadow"
            style={{
                backgroundColor: isDarkTheme ? '#f1faee' : '#333',
                color: isDarkTheme ? '#333' : '#f1faee',
                marginBottom: '20px'
            }}
        > 
            <h3 
                className="text-center mb-4"
                style={{ color: isDarkTheme ? '#333' : '#f1faee' }}
            >
                Resumen del Carrito
            </h3>
            <div className="cart-items">
                {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                        <div 
                            key={index} 
                            className="cart-item d-flex align-items-center mb-3 p-2 border-bottom"
                            style={{ borderColor: isDarkTheme ? '#ccc' : '#555' }}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="cart-item-image me-3"
                                style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                            />
                            <div className="flex-grow-1">
                                <h5 
                                    className="cart-item-name m-0" 
                                    style={{ color: isDarkTheme ? '#333' : '#f1faee' }}
                                >
                                    {item.name}
                                </h5>
                                <p 
                                    className="cart-item-price m-0" 
                                    style={{ color: isDarkTheme ? '#333' : '#f1faee' }}
                                >
                                    ${item.price.toFixed(2)} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                                </p>
                            </div>
                            <button
                                className={`btn btn-link ${isDarkTheme ? 'text-danger' : 'text-light'}`}
                                onClick={() => removeItem(item.id)}
                                aria-label={`Eliminar ${item.name}`}
                            >
                                <FaTrashAlt size={20} />
                            </button>
                        </div>
                    ))
                ) : (
                    <p 
                        className="text-center"
                        style={{ color: isDarkTheme ? '#333' : '#f1faee' }}
                    >
                        No hay productos en el carrito.
                    </p>
                )}
            </div>
            
            <div 
                className="cart-total mt-3 d-flex justify-content-between"
                style={{ color: isDarkTheme ? '#333' : '#f1faee' }}
            >
                <h4>Total: ${totalPrice.toFixed(2)}</h4>
            </div>

            <div className="cart-actions mt-4 d-flex justify-content-between">
                <button 
                    onClick={onEmptyCart} 
                    className={`btn ${isDarkTheme ? 'btn-danger' : 'btn-secondary'}`}
                >
                    Vaciar Carrito
                </button>
                <button 
                    onClick={onCheckout} 
                    className={`btn ${isDarkTheme ? 'btn-success' : 'btn-light'}`}
                >
                    Realizar Compra
                </button>
            </div>
        </div>
    );
};

export default CartSummary;
