import { FC } from "react";
import { Link } from "react-router-dom";

export const Navbar : FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 py-3" >
      <div>
        <Link className="text-decoration-none" to={"/"}>
          <span className="text-white me-5 fs-5">Video juegos</span>
        </Link>
        <span className="text-white me-5 fs-5">Añadir video juego</span>
        <span className="text-white fs-5">Juegos favoritos</span>
      </div>
    </nav>
  )
}