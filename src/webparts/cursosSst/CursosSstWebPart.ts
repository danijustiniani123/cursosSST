import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { spfi, SPFx } from '@pnp/sp';
import CursosSst from './components/CursosSst';


export interface ICursosSstWebPartProps {
  description: string;
}

export default class CursosSstWebPart extends BaseClientSideWebPart<ICursosSstWebPartProps> {
  private _sp: any; // Usamos 'any' temporalmente para evitar conflictos

  protected async onInit(): Promise<void> {
    await super.onInit();
    
    // Solución simplificada para inicializar PnP SP
    try {
      this._sp = spfi().using(SPFx(this.context as any)); // Cast temporal
    } catch (error) {
      console.error('Error inicializando PnP SP:', error);
      this._sp = {}; // Objeto vacío como fallback
    }
    
    return Promise.resolve();
  }

  public render(): void {
    // Solución definitiva para isDarkTheme
    const isDarkTheme = this.context.sdks?.microsoftTeams?.context?.theme === 'dark' || false;
    
    const element = React.createElement(
      CursosSst,
      {
        description: this.properties.description,
        isDarkTheme: isDarkTheme,
        environmentMessage: this._getEnvironmentMessage(),
        hasTeamsContext: !!this.context.sdks?.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName,
        sp: this._sp
      }
    );

    ReactDom.render(element, this.domElement);
  }

  private _getEnvironmentMessage(): string {
    return this.context.isServedFromLocalhost 
      ? 'Entorno local' 
      : 'Entorno SharePoint';
  }
}