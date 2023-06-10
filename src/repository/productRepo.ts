import type localStorageType from "../database/localStorage";
import localStorage from "../database/localStorage";
import { IProduct } from "../domain/models";

export default class productRepo {
  private database: localStorageType;
  constructor() {
    this.database = new localStorage();
  }

  public async getProductsFromDb(filters?: any): Promise<IProduct[]> {
    console.log("=========== in get products from db===========");
    console.log(filters);
    const result = await this.database.getProducts(filters);
    return result;
  }
  public async getProducts(filters?: any): Promise<IProduct[]> {
    const result = await this.database.getProducts(filters);
    return result;
  }

  public async setMinimumPrice(minimumPrice: string): Promise<void> {
    const result = await this.database.storeItem("min_price", minimumPrice);
  }
  public async setMaximumPrice(maximumPrice: string): Promise<void> {
    const result = await this.database.storeItem("max_price", maximumPrice);
  }
}
