import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          AirbnbClone
        </Link>
        <nav className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/items"
            className={({ isActive }) =>
              isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
            }
          >
            Listado de Ítems
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
            }
          >
            Contacto
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
