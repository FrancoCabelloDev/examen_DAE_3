// src/components/ReservationForm.jsx

import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function ReservationForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = 'El nombre es obligatorio.';
    if (!form.phone.trim()) {
      err.phone = 'El teléfono es obligatorio.';
    } else if (!/^\d{7,15}$/.test(form.phone.trim())) {
      err.phone = 'Ingresa un número válido (7-15 dígitos).';
    }
    if (!form.date) err.date = 'La fecha es obligatoria.';
    if (!form.time) err.time = 'La hora es obligatoria.';
    if (!form.guests || form.guests < 1) err.guests = 'Indica al menos 1 persona.';
    return err;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    // Mostrar toast de éxito
    toast.success(
      `Reserva confirmada para ${form.name} el ${form.date} a las ${form.time} (${form.guests} personas)`
    );
    // Limpiar formulario
    setForm({ name: '', phone: '', date: '', time: '', guests: 1 });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Reservar Mesa
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nombre */}
        <div>
          <label className="block text-gray-700">Nombre</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`mt-1 block w-full border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:ring-red-500 focus:border-red-500`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Teléfono */}
        <div>
          <label className="block text-gray-700">Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className={`mt-1 block w-full border ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:ring-red-500 focus:border-red-500`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Fecha */}
        <div>
          <label className="block text-gray-700">Fecha</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className={`mt-1 block w-full border ${
              errors.date ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:ring-red-500 focus:border-red-500`}
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date}</p>
          )}
        </div>

        {/* Hora */}
        <div>
          <label className="block text-gray-700">Hora</label>
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className={`mt-1 block w-full border ${
              errors.time ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:ring-red-500 focus:border-red-500`}
          />
          {errors.time && (
            <p className="text-red-500 text-sm mt-1">{errors.time}</p>
          )}
        </div>

        {/* Huéspedes */}
        <div>
          <label className="block text-gray-700">Personas</label>
          <input
            type="number"
            name="guests"
            min="1"
            value={form.guests}
            onChange={handleChange}
            className={`mt-1 block w-full border ${
              errors.guests ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:ring-red-500 focus:border-red-500`}
          />
          {errors.guests && (
            <p className="text-red-500 text-sm mt-1">{errors.guests}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
        >
          Confirmar Reserva
        </button>
      </form>
    </div>
  );
}
