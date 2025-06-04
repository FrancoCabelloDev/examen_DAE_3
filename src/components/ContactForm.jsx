// src/components/ContactForm.jsx
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = (data) => {
    toast.success('Mensaje enviado correctamente')
    reset()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold text-cineDark mb-6">
        Contáctanos
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        {/* Nombre */}
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium text-gray-700 mb-1">
            Nombre<span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'El nombre es obligatorio' })}
            className={`w-full border rounded-md px-4 py-2 focus:outline-none ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Correo */}
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium text-gray-700 mb-1">
            Correo electrónico<span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'El correo es obligatorio',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Formato de correo inválido'
              }
            })}
            className={`w-full border rounded-md px-4 py-2 focus:outline-none ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Mensaje */}
        <div className="mb-4">
          <label htmlFor="message" className="block font-medium text-gray-700 mb-1">
            Mensaje<span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows="4"
            {...register('message', {
              required: 'El mensaje es obligatorio'
            })}
            className={`w-full border rounded-md px-4 py-2 focus:outline-none ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Botón Enviar */}
        <button
          type="submit"
          className="bg-cineYellow text-cineDark font-semibold px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}
