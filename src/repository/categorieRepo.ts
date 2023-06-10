import { ICategorie } from "../domain/models";
import type localStorageType from "../database/localStorage";
import localStorage from "../database/localStorage";

export default class categorieRepo {
  database: localStorageType;
  constructor() {
    this.database = new localStorage();
  }

  public async getCategoriesFromDb(filter?: string): Promise<ICategorie[]> {
    const result = await this.database.getCategories(filter);
    return result;
  }

  public async storeChosenCategory(categoryName: string) {
    try {
      return await this.database.storeItem("category", categoryName);
    } catch (error) {
      console.log(error);
    }
  }
}
