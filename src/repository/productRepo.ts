import type localStorageType from "../database/localStorage";
import localStorage from "../database/localStorage";
import { IProduct } from "../domain/models";

export default class productRepo {
  private database: localStorageType;
  constructor() {
    this.database = new localStorage();
  }

  public async getProductsFromDb(filters?: any): Promise<IProduct[]> {
    const result = await this.database.getProducts(filters);
    return result;
  }
  public async getProducts(filters?: any): Promise<IProduct[]> {
    const result = await this.database.getProducts(filters);
    return result;
  }

  public async setMinimumPrice(minimumPrice: string): Promise<void> {
    await this.database.storeItem("min_price", minimumPrice);
  }
  public async setMaximumPrice(maximumPrice: string): Promise<void> {
    await this.database.storeItem("max_price", maximumPrice);
  }
}
