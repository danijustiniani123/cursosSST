export const cursosDisponibles = {
  escalerafija: () => import('../cursos/escalerafija'),
cargamanual: () => import('../cursos/cargamanual'),
  // Agrega más cursos aquí
};

export type CursoID = keyof typeof cursosDisponibles;