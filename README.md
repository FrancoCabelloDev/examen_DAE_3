Spotify Mini‐App – SPA de Playlists

¡Hola! Bienvenido a Spotify Mini‐App, una pequeña SPA desarrollada con React 19 y Vite que imita la experiencia de explorar playlists y álbumes. En la pantalla de Inicio encontrarás un slider que cambia automáticamente las carátulas de diferentes playlists cada cinco segundos; cada slide muestra el nombre de la playlist, una breve descripción y un botón “Escuchar ahora” para ilustrar la navegación. En la sección Playlists (/playlists), primero verás aproximadamente un segundo y medio de tarjetas skeleton mientras carga la información, y luego aparece un grid de ocho playlists con portadas en alta resolución (extraídas de Unsplash), su título y descripción; justo arriba hay un campo de búsqueda que filtra por nombre en tiempo real con un retraso de 300 ms, y si no hay coincidencias aparece el mensaje “No se encontró ninguna playlist”. Cada tarjeta incluye un botón “Escuchar ahora” que ejemplifica cómo se vería el interfaz sin reproducir realmente audio. En Contacto (/contact) encontrarás un formulario con tres campos obligatorios (Nombre, Correo electrónico y Mensaje) validados con React Hook Form: si dejas un campo vacío o el correo no cumple el formato, verás un mensaje de error justo debajo; al enviar correctamente aparece una notificación toast diciendo “Mensaje enviado correctamente” y el formulario se limpia. El Header, presente en todas las páginas, muestra el logo “Spotify” y enlaces a “Inicio”, “Playlists” y “Contacto”, resaltando en verde la ruta activa. El Footer siempre está al pie y consta de tres columnas: en la primera el logo y una breve descripción (“Explora playlists y álbumes con tus canciones favoritas. ¡Dale play!”), en la segunda los mismos enlaces rápidos y en la tercera datos de contacto ficticios (correo, teléfono y ciudad). Al final se muestra “© 2025 Spotify Clone. Todos los derechos reservados.”

Tecnologías usadas

React 19 con componentes funcionales y hooks

Vite como bundler ultrarrápido

React Router v6 para las rutas «/», «/playlists» y «/contact»

Tailwind CSS cargado por CDN en el archivo index.html

React Toastify para las notificaciones de éxito al enviar el formulario

React Loading Skeleton para mostrar placeholders mientras carga la información

React Hook Form en el formulario de contacto para validación de campos

React Icons para los iconos en los controles de navegación

Unsplash Source para obtener imágenes online confiables en alta resolución

Instalación y arranque

Clona el repositorio (por ejemplo: git clone https://github.com/tu_usuario/mis-proyectos.git) y cámbiate a la carpeta clonada, luego haz checkout de la rama “spotify”. A continuación instala las dependencias ejecutando npm install y finalmente levanta el servidor de desarrollo con npm run dev. Abre el navegador en http://localhost:5173 para interactuar con la aplicación.

Cómo moverse por la aplicación

• En Inicio («/») verás el slider de carátulas que rota automáticamente y muestra nombre, descripción y botón “Escuchar ahora”.
• En Playlists («/playlists»), al cargar aparece un loader de skeleton durante ~1,5 s, luego el grid de ocho tarjetas con portadas HD, título y descripción. Justo arriba hay un campo de búsqueda con debounce de 300 ms que filtra por nombre de playlist y muestra “No se encontró ninguna playlist” si no hay resultados. Cada tarjeta incluye un botón “Escuchar ahora” para ilustrar el diseño.
• En Contacto («/contact»), hay un formulario con tres campos obligatorios: Nombre, Correo electrónico y Mensaje. Si algún campo queda vacío o el correo no es válido, se muestra un mensaje de error debajo. Al completar todos los campos y hacer clic en “Enviar”, un toast de React Toastify anuncia “Mensaje enviado correctamente” y el formulario se limpia.
• El Header siempre muestra el logo “Spotify” y enlaces a Inicio, Playlists y Contacto. La ruta activa aparece en verde.
• El Footer está fijo al pie con tres columnas: logo y breve descripción, enlaces rápidos y datos de contacto ficticios. Debajo aparece “© 2025 Spotify Clone. Todos los derechos reservados.”

Estructura de carpetas

spotify-mini-app/
├ index.html (carga Tailwind por CDN y extiende colores)
├ package.json
├ vite.config.js
├ public/
│ └ favicon.ico
└ src/
├ main.jsx (punto de entrada, importa CSS global y Toastify)
├ App.jsx (rutas, Header, Footer y ToastContainer)
├ css/
│ └ index.css (Google Fonts y overrides globales)
├ data/
│ └ playlists.js (lista de playlists con URLs de Unsplash)
└ components/
├ Header.jsx
├ Footer.jsx
├ HomePage.jsx
├ HeroSlider.jsx
├ FeaturedGrid.jsx (opcional: muestra 4 playlists destacadas)
├ PlaylistCard.jsx
├ PlaylistsPage.jsx
├ PlaylistList.jsx
├ Search.jsx
├ LoadingSkeleton.jsx
├ ContactPage.jsx
└ ContactForm.jsx

Scripts disponibles

npm run dev: inicia el servidor de desarrollo con Vite.

npm run build: genera la versión optimizada de producción en la carpeta dist.

npm run preview: sirve la build de producción localmente para pruebas.

Autor

Tu Nombre
Correo: tu.email@ejemplo.com
GitHub: https://github.com/tu_usuario

¡Gracias por probar Spotify Mini‐App! Espero que te guste y te ayude en tus proyectos. 🎵🚀