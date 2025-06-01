import * as React from 'react';
import { PreguntaOpcionMultiple } from '../../../models/Pregunta';

interface Props {
  pregunta: PreguntaOpcionMultiple;
  onRespuesta: (correcta: boolean) => void;
}

const OpcionMultiple: React.FC<Props> = ({ pregunta, onRespuesta }) => {
  const [seleccion, setSeleccion] = React.useState<number | null>(null);

  const manejarClick = (index: number) => {
    setSeleccion(index);
    onRespuesta(index === pregunta.respuestaCorrecta);
  };

  return (
    <div>
      <h3>{pregunta.texto}</h3>
      <ul>
        {pregunta.opciones.map((opcion, idx) => (
          <li key={idx}>
            <button onClick={() => manejarClick(idx)} disabled={seleccion !== null}>
              {opcion}
            </button>
          </li>
        ))}
      </ul>
      {seleccion !== null && (
        <div>
          {seleccion === pregunta.respuestaCorrecta ? 'Correcto ✅' : 'Incorrecto ❌'}
        </div>
      )}
    </div>
  );
};

export default OpcionMultiple;