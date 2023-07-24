import { ICategorie } from "../domain/models";
import type localStorageType from "../database/localStorage";
import localStorage from "../database/localStorage";
import categoryGateway from "../network/category.gateway";
import type categoryGatewayType from "../network/category.gateway";
export default class categorieRepo {
  database: localStorageType;
  categorieGateway: categoryGatewayType;
  constructor() {
    this.database = new localStorage();
    this.categorieGateway = new categoryGateway();
  }

  public async getCategoriesFromDb(filter?: string): Promise<ICategorie[]> {
    const result = await this.database.getCategories(filter);
    return result;
  }
  public async getCategories(filter?: string): Promise<ICategorie[]> {
    const result = await this.database.getCategories(filter);
    return result;
  }

  public async getCategoriesFromApi() {
    const result = await this.categorieGateway.getItemCategories();
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
