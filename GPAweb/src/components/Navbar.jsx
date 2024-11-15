import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-500 p-4 text-white">
    <ul className="flex justify-around">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
    </ul>
  </nav>
);

export default Navbar;