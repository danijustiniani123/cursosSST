import * as React from 'react';
import styles from './TerceraPantalla.module.scss';
import TresCuadrantes from "../../../../components/ui/TresCuadrantes/TresCuadrantes";

interface TercerPantallaProps {
  onMostrarDesplegable: () => void;
  onOcultarDesplegable: () => void;
}

const TercerPantalla: React.FC<TercerPantallaProps> = ({
  onMostrarDesplegable,
  onOcultarDesplegable
}) => {
  // 🔄 función para pasar directamente al componente
  const setOverlayActivo = (activo: boolean) => {
    if (activo) {
      onMostrarDesplegable();
    } else {
      onOcultarDesplegable();
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>
        Describe el tema y los contenidos que vas a tratar en clase y no olvides recalcar por qué el tema es interesante
      </h2>

      {/* ✅ usamos el nombre que espera el componente */}
      <TresCuadrantes setOverlayActivo={setOverlayActivo} />
    </div>
  );
};

export default TercerPantalla;