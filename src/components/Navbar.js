import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/Categories">Cartegories</NavLink>
  </nav>
);

export default Navbar;
