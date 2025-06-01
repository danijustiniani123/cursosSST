export type TipoPregunta = 'opcionMultiple' | 'dragDrop' | 'verdaderoFalso' | 'completarTexto';

export interface PreguntaBase {
  id: number;
  tipo: TipoPregunta;
  texto: string;
}

export interface PreguntaOpcionMultiple extends PreguntaBase {
  tipo: 'opcionMultiple';
  opciones: string[];
  respuestaCorrecta: number; // índice de la opción correcta
}
