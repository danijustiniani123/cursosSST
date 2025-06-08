import React, { createContext, useState, useContext, ReactNode } from 'react';
import { fondos } from '../_config/fondos.config';

interface FondoContextProps {
  fondoActivo: string | null;               // Solo el id del fondo
  setFondoActivo: (id: string) => void;
}

const FondoContext = createContext<FondoContextProps>({
  fondoActivo: null,
  setFondoActivo: () => {},
});

export const FondoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [fondoActivo, setFondoActivoState] = useState<string | null>(null);

  const setFondoActivo = (id: string) => {
     console.log("🎯 setFondoActivo fue llamado con:", id); // 👈 AÑADE ESTO
    if (fondos[id]) {
      setFondoActivoState(id);   // Solo guardamos el id
    } else {
         console.warn("⚠️ Fondo no encontrado:", id); // 👈 OPCIONAL
      setFondoActivoState(null);
    }
  };

  return (
    <FondoContext.Provider value={{ fondoActivo, setFondoActivo }}>
      {children}
    </FondoContext.Provider>
  );
};

export const useFondo = () => useContext(FondoContext);