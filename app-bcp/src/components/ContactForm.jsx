// components/ContactForm.jsx
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El formato del correo electrónico es inválido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      toast.success('¡Mensaje enviado exitosamente! Te contactaremos pronto.');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="container mx-auto px-2 px-sm-3 px-md-4 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Contáctanos
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Información de Contacto</h2>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-blue-600 mr-4" />
              <div>
                <h3 className="font-semibold">Teléfono</h3>
                <p className="text-gray-600">(01) 311-989898989898</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-blue-600 mr-4" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">contacto@bcp_tecsupe.com.pe</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-blue-600 mr-4" />
              <div>
                <h3 className="font-semibold">Dirección</h3>
                <p className="text-gray-600">Av. TECSUPE CERDA DE BULLON </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Horarios de Atención</h3>
            <p className="text-gray-600">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Sábados: 9:00 AM - 1:00 PM</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-4 p-sm-6 p-md-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Correo Electrónico *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mensaje *
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-100 w-sm-100 w-md-100 bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;