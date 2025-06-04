Cinéplanet – Mini SPA de Cartelera
¡Hola! Bienvenido a Cinéplanet, una pequeña SPA en React 19 con Vite que simula la cartelera de un cine. Aquí encontrarás pósters, títulos y sinopsis de películas, podrás marcar tus favoritas y filtrar los “Próximos estrenos”. Además, incluye un formulario de contacto con validación y notificaciones.

Tecnologías usadas

React 19 (solo componentes funcionales y hooks)

Vite (bundler ultrarrápido)

React Router v6 para las rutas /, /items y /contact

Tailwind CSS (vía CDN en index.html)

React Toastify para los toasts de favoritos y formulario

React Loading Skeleton para mostrar placeholders mientras cargan los datos

React Hook Form en el formulario de contacto

Google Fonts (Open Sans y Roboto, cargadas por CDN)

Instalación y arranque

Clona este repositorio y ve a la carpeta:
git clone https://github.com/tu_usuario/mis-proyectos.git
cd mis-proyectos
git checkout cineplanet

Instala las dependencias:
npm install

Levanta el servidor de desarrollo:
npm run dev

Abre tu navegador en http://localhost:5173

Cómo moverse por la aplicación

En la página de Inicio (/) verás el header con el logo “Cinéplanet” y los enlaces a “Inicio”, “Cartelera” y “Contacto”. Debajo hay un hero a pantalla completa con imagen, título y dos botones que llevan a Cartelera y Contacto. Más abajo, la sección “Cartelera Destacada” muestra seis tarjetas con póster, título, sinopsis breve y un botón “Ver más”.

En Cartelera (/items) primero se muestran unos segundos de skeleton (placeholders) para simular la carga. Después aparecen ocho películas con sus pósters, títulos y sinopsis. Arriba hay un toggle que alterna entre “Cartelera Completa” (todas las películas) y “Próximos Estrenos” (solo las que tienen upcoming: true en el arreglo). También hay un campo de búsqueda que filtra en tiempo real con un retraso de 300 ms (debounce). Cada tarjeta incluye una estrella que permite marcar o desmarcar favoritos: al hacer clic, el ID de la película se guarda en localStorage bajo la clave fav-items y aparece un toast: “★ "<título>" agregado a Favoritos” o “✕ "<título>" removido de Favoritos”.

En Contacto (/contact) encontrarás un formulario con tres campos obligatorios: Nombre, Correo electrónico (valida formato) y Mensaje. Si dejas algún campo vacío o el correo no es válido, aparece un mensaje de error en rojo justo debajo. Al enviar con todos los datos correctos, sale un toast que dice “Mensaje enviado correctamente” y el formulario se limpia.

El Footer aparece abajo en todas las páginas. Está dividido en tres columnas: la primera con el logo y una breve descripción (“La mejor experiencia de cine en tu ciudad…”), la segunda con enlaces rápidos (Inicio, Cartelera, Contacto) y la tercera con datos de contacto (soporte@cineplanet.com, teléfono, dirección en Lima). Al final hay una línea con © año actual y “Todos los derechos reservados”.

Estructura de carpetas
mi-mini-spa/
├── index.html (carga Tailwind por CDN y extiende colores)
├── package.json
├── vite.config.js
├── public/
│ └── favicon.ico
└── src/
├── main.jsx (entrada de React, importa CSS y Toastify)
├── App.jsx (rutas, Header, Footer y ToastContainer)
├── css/
│ └── index.css (Google Fonts y overrides globales)
├── data/
│ └── items.js (lista de películas con campo upcoming)
└── components/
├── Header.jsx
├── Footer.jsx
├── HomePage.jsx
├── HeroBanner.jsx
├── CardList.jsx
├── ItemsPage.jsx
├── ItemList.jsx
├── ItemSearch.jsx
├── ItemCard.jsx
├── LoadingSkeleton.jsx
├── ContactPage.jsx
└── ContactForm.jsx

Scripts disponibles

npm run dev: inicia el servidor de desarrollo con Vite.

npm run build: genera la versión optimizada para producción en la carpeta dist.

npm run preview: sirve la versión de producción localmente para pruebas.

Autor
Tu Nombre
tu.email@ejemplo.com
GitHub: https://github.com/tu_usuario

¡Gracias por revisar Cinéplanet! Espero que te guste y sea útil. 🎬🍿