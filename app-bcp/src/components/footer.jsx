// components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <h3 className="h5 fw-semibold mb-4">BCP Online</h3>
            <p className="text-light">Tu banco digital de confianza en el Perú</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="h6 fw-semibold mb-3">Productos</h4>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Cuentas de Ahorro</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Tarjetas de Crédito</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Préstamos</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="h6 fw-semibold mb-3">Servicios</h4>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Banca Digital</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Transferencias</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Pagos</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="h6 fw-semibold mb-3">Contacto</h4>
            <p className="text-light mb-2">📞 (01) 311-9898</p>
            <p className="text-light mb-2">🌐 www.viabcp.com</p>
            <p className="text-light mb-2">📧 contacto@bcp.com.pe</p>
          </div>
        </div>
        <hr className="my-4 border-secondary" />
        <div className="row">
          <div className="col-12 text-center">
            <p className="text-light mb-0">&copy; 2025 Banco de Crédito del Perú. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;