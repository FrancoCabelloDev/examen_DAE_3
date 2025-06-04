export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="d-flex align-items-center mb-3">
              <div className="gradient-bg rounded d-flex align-items-center justify-content-center me-2" 
                   style={{width: '32px', height: '32px'}}>
                <span className="text-white fw-bold fs-5">C</span>
              </div>
              <span className="fs-4 fw-bold text-white">Canva</span>
            </div>
            <p className="text-light opacity-75 mb-4">
              Herramientas de diseño intuitivas para crear contenido visual increíble. 
              Desde redes sociales hasta presentaciones profesionales.
            </p>
          </div>
          
          <div className="col-md-6 col-lg-3">
            <h5 className="fw-semibold mb-3">Productos</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none">Plantillas</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none">Editor</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none">Canva Pro</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none">Equipos</a>
              </li>
            </ul>
          </div>
          
          <div className="col-md-6 col-lg-3">
            <h5 className="fw-semibold mb-3">Soporte</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none">Centro de ayuda</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none">Contacto</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none">Comunidad</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light opacity-75 text-decoration-none">Blog</a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-4 opacity-25" />
        
        <div className="text-center text-light opacity-75">
          <p className="mb-0">&copy; 2024 Canva Mini SPA. Proyecto educativo de React.</p>
        </div>
      </div>
    </footer>
  );
}