import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaInstagram, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';
import { ThemeContext } from '../themetext/ThemeContext';
import '../footer/Footer.css';

const Footer = () => {
  const { theme } = useContext(ThemeContext); 

  return (
    <footer 
      className="pt-5 pb-4"
      style={{
        backgroundColor: theme === 'dark' ? '#f1faee' : '#333',
        color: theme === 'dark' ? '#333' : '#f1faee'
      }}
    >
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Mi E-commerce</h5>
            <p>Explora nuestros productos y encuentra las mejores ofertas. Calidad y confianza en cada compra.</p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Enlaces</h5>
            <p><a href="/shop" className="text-decoration-none" style={{ color: theme === 'dark' ? '#333' : '#f1faee' }}>Shop</a></p>
            <p><a href="/historia" className="text-decoration-none" style={{ color: theme === 'dark' ? '#333' : '#f1faee' }}>Historia</a></p>
            <p><a href="/clips" className="text-decoration-none" style={{ color: theme === 'dark' ? '#333' : '#f1faee' }}>Clips</a></p>
            <p><a href="/contacto" className="text-decoration-none" style={{ color: theme === 'dark' ? '#333' : '#f1faee' }}>Contacto</a></p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Métodos de Pago</h5>
            <p><FaCcVisa /> Visa</p>
            <p><FaCcMastercard /> Mastercard</p>
            <p><FaCcPaypal /> PayPal</p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Contacto</h5>
            <p><i className="fas fa-home mr-3"></i> 1250 Av. La Plata, Buenos Aires, Argentina</p>
            <p><i className="fas fa-envelope mr-3"></i> takenthundra@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> +123 456 7890</p>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>© {new Date().getFullYear()} ⟦MarketThundra⟧. Todos los derechos reservados.</p>
          </div>
          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a href="https://facebook.com" className="btn btn-outline-light btn-floating m-1">
                    <FaFacebook />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://twitter.com" className="btn btn-outline-light btn-floating m-1">
                    <FaTwitter />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://instagram.com" className="btn btn-outline-light btn-floating m-1">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
