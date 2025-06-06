import React, { useState } from "react";
import "./TresCuadrantes.scss";

interface Cuadrante {
  titulo: string;
  texto: string;
  descripcion: string;
  imagen: string;
}

interface Props {
  setOverlayActivo: (activo: boolean) => void;
}

const cuadrantesData: Cuadrante[] = [
  {
    titulo: "Título 1",
    texto: "Aquí va el texto del primer cuadrante.",
    descripcion: "Esta es la descripción desplegable del primer cuadrante.",
    imagen: "https://via.placeholder.com/300x180?text=Imagen+1",
  },
  {
    titulo: "Título 2",
    texto: "Aquí va el texto del segundo cuadrante.",
    descripcion: "Descripción desplegable del segundo cuadrante.",
    imagen: "https://via.placeholder.com/300x180?text=Imagen+2",
  },
  {
    titulo: "Título 3",
    texto: "Aquí va el texto del tercer cuadrante.",
    descripcion: "Descripción desplegable del tercer cuadrante.",
    imagen: "https://via.placeholder.com/300x180?text=Imagen+3",
  },
];

const TresCuadrantes: React.FC<Props> = ({ setOverlayActivo }) => {
  const [abierto, setAbierto] = useState<number | null>(null);

  const toggleDesplegable = (index: number) => {
    const nuevoEstado = abierto === index ? null : index;
    setAbierto(nuevoEstado);
    setOverlayActivo(nuevoEstado !== null); // 👉 activa o desactiva el overlay
  };

  return (
    <div className="tres-cuadrantes-container">
      <div className="tres-cuadrantes">
        {cuadrantesData.map((item, idx) => (
          <div className="cuadrante" key={idx}>
            <h3 className="titulo">{item.titulo}</h3>
            <p className="texto">{item.texto}</p>

            <button className="boton-toggle" onClick={() => toggleDesplegable(idx)}>
              {abierto === idx ? "×" : "+"}
            </button>

            {abierto === idx && (
              <div className="desplegable">
                <button className="boton-cerrar" onClick={() => toggleDesplegable(idx)}>
                  ×
                </button>
                <img src={item.imagen} alt={`Imagen de ${item.titulo}`} />
                <p>{item.descripcion}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TresCuadrantes;