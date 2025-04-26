import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <header>
      <ul>
        <li>
          <h1>Tienda Online</h1>
        </li>

        <ul>
          <li>
            <Link  to="/productos">Comprar</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </ul>
    </header>
  );
};

export default HeaderComponent;
