import { useState } from 'react';
import { Send, User, Mail, MessageCircle } from 'lucide-react';
import { notifyFormSuccess } from '../utils/notifyFavorite.js';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Por favor ingresa un correo válido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simular envío del formulario
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mostrar notificación de éxito
      notifyFormSuccess();
      
      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setErrors({});
    } catch (error) {
      console.error('Error al enviar formulario:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-vh-100 bg-light py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-dark mb-3">
            Contáctanos
          </h1>
          <p className="fs-5 text-muted">
            ¿Tienes una pregunta o necesitas ayuda? Nos encantaría escucharte
          </p>
        </div>

        <div className="row g-5">
          {/* Contact Info */}
          <div className="col-lg-6">
            <div className="gradient-bg rounded-4 p-5 text-white h-100">
              <h2 className="h3 fw-bold mb-4">Ponte en contacto</h2>
              <div className="mb-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-white bg-opacity-20 rounded p-3 me-3">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-1">Email</h5>
                    <p className="mb-0 opacity-75">hola@canva.com</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="bg-white bg-opacity-20 rounded p-3 me-3">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-1">Chat en vivo</h5>
                    <p className="mb-0 opacity-75">Disponible 24/7</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-5">
                <h5 className="fw-semibold mb-3">¿Por qué elegirnos?</h5>
                <ul className="list-unstyled opacity-75">
                  <li className="mb-2">• Miles de plantillas profesionales</li>
                  <li className="mb-2">• Herramientas de diseño intuitivas</li>
                  <li className="mb-2">• Soporte al cliente excepcional</li>
                  <li className="mb-2">• Actualizaciones constantes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="bg-white rounded-4 shadow-sm p-5 h-100">
              <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="mb-4">
                  <label htmlFor="name" className="form-label fw-medium">
                    Nombre completo *
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                      <User className="text-muted" size={20} />
                    </span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`form-control border-start-0 ${
                        errors.name ? 'is-invalid' : ''
                      }`}
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  {errors.name && (
                    <div className="invalid-feedback d-block">
                      {errors.name}
                    </div>
                  )}
                </div>

                {/* Email Field */}
                <div className="mb-4">
                  <label htmlFor="email" className="form-label fw-medium">
                    Correo electrónico *
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                      <Mail className="text-muted" size={20} />
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`form-control border-start-0 ${
                        errors.email ? 'is-invalid' : ''
                      }`}
                      placeholder="tu@email.com"
                    />
                  </div>
                  {errors.email && (
                    <div className="invalid-feedback d-block">
                      {errors.email}
                    </div>
                  )}
                </div>

                {/* Message Field */}
                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-medium">
                    Mensaje *
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0 align-items-start pt-3">
                      <MessageCircle className="text-muted" size={20} />
                    </span>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className={`form-control border-start-0 resize-none ${
                        errors.message ? 'is-invalid' : ''
                      }`}
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                      style={{ resize: 'none' }}
                    />
                  </div>
                  {errors.message && (
                    <div className="invalid-feedback d-block">
                      {errors.message}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn w-100 d-flex align-items-center justify-content-center gap-2 ${
                    isSubmitting
                      ? 'btn-secondary'
                      : 'btn-canva-primary'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner-border spinner-border-sm text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}