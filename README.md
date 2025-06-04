# 🎨 Canva Mini SPA

Una aplicación web de una sola página (SPA) que replica las funcionalidades principales de Canva, desarrollada con React 19 y Bootstrap 5.

## 📋 Características

- **🏠 Página de Inicio** con hero banner interactivo y carrusel automático
- **🔍 Sistema de Búsqueda** con debounce para filtrar plantillas en tiempo real
- **❤️ Sistema de Favoritos** con persistencia en localStorage
- **📱 Diseño Responsivo** compatible con dispositivos móviles y desktop
- **🎯 Navegación SPA** con React Router DOM
- **🔔 Notificaciones** con react-toastify para feedback del usuario
- **⚡ Carga Skeleton** para mejor UX durante la carga de contenido

## 🛠️ Tecnologías Utilizadas

- **React 19.1.0** - Framework principal
- **React Router DOM** - Navegación entre páginas
- **Bootstrap 5.3.6** - Framework CSS y componentes UI
- **Bootstrap Icons** - Iconografía
- **React Toastify** - Sistema de notificaciones
- **React Loading Skeleton** - Animaciones de carga
- **Lucide React** - Iconos adicionales
- **Vite** - Bundler y servidor de desarrollo
- **Fontsource** - Tipografías (Open Sans y Roboto)

## 🚀 Instalación y Configuración

### Prerequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd canva-mini-spa
```

2. **Instalar dependencias**
```bash
npm install --legacy-peer-deps
```

> **Nota:** El flag `--legacy-peer-deps` es necesario debido a incompatibilidades menores entre React 19 y algunas librerías que aún no han actualizado completamente su soporte.

3. **Ejecutar el proyecto en modo desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:5173
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React reutilizables
│   ├── Header.jsx      # Navegación principal
│   ├── HeroBanner.jsx  # Banner principal con carrusel
│   ├── CardList.jsx    # Lista de categorías de plantillas
│   ├── ItemCard.jsx    # Tarjeta individual de plantilla
│   ├── ItemSearch.jsx  # Componente de búsqueda
│   └── ContactForm.jsx # Formulario de contacto
├── pages/              # Páginas principales
│   ├── Home.jsx        # Página de inicio
│   ├── Items.jsx       # Página de plantillas
│   └── Contact.jsx     # Página de contacto
├── data/               # Datos estáticos
│   └── items.js        # Categorías y plantillas
├── hooks/              # Custom hooks
│   └── useDebounce.js  # Hook para debounce en búsqueda
├── utils/              # Utilidades
│   └── notifyFavorite.js # Sistema de notificaciones
├── css/                # Estilos
│   └── index.css       # Estilos principales
├── App.jsx             # Componente principal
└── main.jsx            # Punto de entrada
```

## 🎯 Funcionalidades Implementadas

### 1. **Página de Inicio**
- Hero banner con carrusel automático de 5 slides
- Lista de categorías de plantillas (Social Media, Business Cards, Logos, etc.)
- Navegación fluida entre secciones

### 2. **Sistema de Plantillas**
- Catálogo de 8 plantillas organizadas por categorías
- Filtros por categoría en tiempo real
- Buscador con debounce (300ms de delay)
- Etiquetas de "Free" y "Pro" para cada plantilla

### 3. **Sistema de Favoritos**
- Agregar/quitar plantillas de favoritos con un click
- Persistencia en localStorage del navegador
- Notificaciones toast al agregar/remover favoritos
- Indicador visual del estado de favorito

### 4. **Formulario de Contacto**
- Validación en tiempo real de campos requeridos
- Campos: Nombre completo, Email y Mensaje
- Información de contacto con iconos
- Notificación de éxito al enviar

### 5. **Navegación y UX**
- Header responsivo con menú hamburguesa en móviles
- Navegación SPA sin recarga de página
- Indicador de página activa en el menú
- Loading skeletons durante la carga

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye la aplicación para producción
npm run preview      # Previsualiza la build de producción

# Linting
npm run lint         # Ejecuta ESLint para revisar código
```

## 🌐 Páginas y Rutas

- `/` - Página de inicio
- `/items` - Catálogo de plantillas
- `/contact` - Formulario de contacto

## 💾 Datos Persistentes

El proyecto utiliza `localStorage` para mantener:
- **Favoritos**: Lista de IDs de plantillas marcadas como favoritas
- **Persistencia**: Los favoritos se mantienen entre sesiones del navegador

## 🔍 Características Técnicas

### Custom Hooks
- **useDebounce**: Implementa delay en búsquedas para optimizar rendimiento

### Optimizaciones
- Debounce en búsqueda para evitar llamadas excesivas
- Lazy loading de imágenes
- Skeleton loading para mejor percepción de velocidad

### Responsive Design
- Breakpoints de Bootstrap para todas las pantallas
- Menú hamburguesa en dispositivos móviles
- Grid adaptativo para las plantillas

## 🚨 Notas Importantes

1. **React 19 Compatibility**: Algunas librerías muestran warnings de compatibilidad, pero funcionan correctamente.

2. **Legacy Peer Deps**: Es necesario usar el flag `--legacy-peer-deps` durante la instalación.

3. **Imágenes**: Se utilizan URLs de Unsplash para las imágenes de ejemplo.

4. **Bootstrap Icons**: Se cargan desde CDN para los iconos del formulario de contacto.

## 🐛 Solución de Problemas

### Error de dependencias
```bash
# Si hay problemas con las dependencias
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Error de iconos
Si no se ven los iconos, verificar que esté incluido en `index.html`:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
```

### Imágenes que no cargan
Las imágenes de Unsplash pueden fallar ocasionalmente. En `src/data/items.js` se pueden cambiar las URLs por alternativas.

## 📝 Licencia

Este proyecto es con fines educativos y de práctica.

## 👨‍💻 Autor

Desarrollado como proyecto de evaluación para el curso de Desarrollo de Aplicaciones Empresariales (DAE).

---

¡Disfruta explorando el proyecto! 🎨✨