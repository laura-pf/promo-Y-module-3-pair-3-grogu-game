import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ul className="nav-list">
          <li className="footer__menu-item">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "navlink"
              }
            >
              {" "}
              A jugar{" "}
            </NavLink>
          </li>
          <li className="footer__menu-item">
            <NavLink
              to="/instructions"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "navlink"
              }
            >
              {" "}
              ¿Cómo se juega?{" "}
            </NavLink>
          </li>
          <li className="footer__menu-item">
            <NavLink
              to="/options"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "navlink"
              }
            >
              {" "}
              Más opciones{" "}
            </NavLink>
          </li>
        </ul>
      </nav>
      <small className="footer__copy">© Adalab</small>
    </footer>
  );
}
export default Footer;
