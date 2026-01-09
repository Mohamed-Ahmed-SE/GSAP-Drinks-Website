import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full md:p-9 p-3 flex justify-between items-center pointer-events-none">
      <Link to="/" className="pointer-events-auto">
        <img
          src="/images/nav-logo.svg"
          alt="nav-logo"
          className="md:w-24 w-20"
        />
      </Link>

      <div className="flex gap-8 pointer-events-auto bg-[#222123cc] backdrop-blur-md px-8 py-3 rounded-full border border-[#faeade33] shadow-lg">
        <Link
          to="/"
          className="text-milk font-bold uppercase tracking-wider hover:text-light-brown transition-colors"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-milk font-bold uppercase tracking-wider hover:text-light-brown transition-colors"
        >
          About
        </Link>
        <Link
          to="/product"
          className="text-milk font-bold uppercase tracking-wider hover:text-light-brown transition-colors"
        >
          Product
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
