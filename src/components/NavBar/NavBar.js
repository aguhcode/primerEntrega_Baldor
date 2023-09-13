import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
      <nav>
        <h3>Santo Vicio GrowShop</h3>
        <div>
          <button>Productos</button>
          <button>Ubicacion</button>
          <button>Club</button>
        </div>
        <CartWidget/>
      </nav>

  );
};

export default NavBar
