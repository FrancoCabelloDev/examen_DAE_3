// src/components/ContactPage.jsx
import React from "react";
import ContactForm from "./ContactForm.jsx";

export default function ContactPage() {
  return (
    <section className="min-h-[70vh] bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-yapeGray mb-6">
          Contáctanos
        </h2>
        <ContactForm />
      </div>
    </section>
  );
}
