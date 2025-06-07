import { SPFI } from '@pnp/sp';

export interface ICursosSstProps {
  description: string;          // Obligatorio (si no lo es, usa `description?: string`)
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  sp: SPFI;                    // Asegura que `sp` esté definido
}