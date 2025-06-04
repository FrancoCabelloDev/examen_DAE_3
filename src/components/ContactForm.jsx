// src/components/ContactForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    // Aquí podrías enviar “data” a un backend real. Simulamos éxito:
    toast.success("Mensaje enviado correctamente");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto bg-gray-50 p-8 rounded-lg shadow"
    >
      {/* Nombre */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "El nombre es obligatorio" })}
          className={`w-full border ${
            errors.name ? "border-red-500" : "border-gray-300"
          } rounded px-3 py-2 focus:outline-none focus:ring ${
            errors.name ? "focus:ring-red-500" : "focus:ring-yapePurple"
          }`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Correo */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "El correo es obligatorio",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Formato de correo inválido"
            }
          })}
          className={`w-full border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded px-3 py-2 focus:outline-none focus:ring ${
            errors.email ? "focus:ring-red-500" : "focus:ring-yapePurple"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Mensaje */}
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Mensaje
        </label>
        <textarea
          id="message"
          rows="4"
          {...register("message", { required: "El mensaje es obligatorio" })}
          className={`w-full border ${
            errors.message ? "border-red-500" : "border-gray-300"
          } rounded px-3 py-2 focus:outline-none focus:ring ${
            errors.message ? "focus:ring-red-500" : "focus:ring-yapePurple"
          }`}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Botón Enviar */}
      <button
        type="submit"
        className="w-full bg-yapePurple text-white font-semibold py-2 rounded hover:bg-yapeYellow hover:text-yapeGray transition"
      >
        Enviar
      </button>
    </form>
  );
}
