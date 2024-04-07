
import { useParams } from "react-router-dom";
import "./Secundary.css";
import Logo from "../assets/STRANGER-POPS-WORLD-23-3-2024.png";
import BotonVolver from "../assets/HomeImg.png";
import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export const Secundary = () => {
  const [articulo, setArticulo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/articulos/${id}`
        );
        setArticulo(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="Secundary">
      <header>
        <img src={Logo} alt="Logo" className="Logo" />
      </header>

      <div className="articulo">
        {articulo.imagen && (
          <img src={articulo.imagen} className="articuloImagen" />
        )}
        <div className="categoria">
          <p>{articulo.categoria}</p>
        </div>

        <div className="titulo">
          <h2>{articulo.titulo}</h2>
        </div>

        <div className="descripcion">
          <p>{articulo.descripcion}</p>
        </div>
      </div>

      <div className="botonVolver">
        <Link to="/Principal/*">
          <img src={BotonVolver} alt="Botón Volver" />
        </Link>
      </div>
    </div>
  );
};
