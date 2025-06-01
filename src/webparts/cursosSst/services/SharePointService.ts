import { SPFI } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

export default class SharePointService {
  private _sp: SPFI;

  constructor(sp: SPFI) {
    this._sp = sp;
  }

  public async getItemsFromList(listName: string): Promise<any[]> {
    try {
      const items = await this._sp.web.lists.getByTitle(listName).items();
      return items;
    } catch (error) {
      console.error(`Error al obtener ítems de la lista ${listName}:`, error);
      return [];
    }
  }

  public async addItemToList(listName: string, item: any): Promise<void> {
    try {
      await this._sp.web.lists.getByTitle(listName).items.add(item);
    } catch (error) {
      console.error(`Error al agregar ítem a la lista ${listName}:`, error);
    }
  }
}