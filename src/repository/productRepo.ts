import type localStorageType from "../database/localStorage";
import localStorage from "../database/localStorage";
import { IProduct } from "../domain/models";
import type ProductGatewayType from "../network/product.gateway";
import ProductGateway from "../network/product.gateway";
import UserRepo from "./userRepo";
export default class productRepo {
  private database: localStorageType;
  private productGateway: ProductGatewayType;
  private userRepo: UserRepo;
  constructor() {
    this.database = new localStorage();
    this.productGateway = new ProductGateway();
    this.userRepo = new UserRepo();
  }

  public async getProductsFromDb(filters?: any): Promise<IProduct[]> {
    const result = await this.database.getProducts(filters);
    return result;
  }
  public async getProducts(filters?: any): Promise<IProduct[]> {
    const result = await this.productGateway.getProducts(filters);
    return result;
  }

  public async setMinimumPrice(minimumPrice: string): Promise<void> {
    await this.database.storeItem("min_price", minimumPrice);
  }
  public async setMaximumPrice(maximumPrice: string): Promise<void> {
    await this.database.storeItem("max_price", maximumPrice);
  }
  public getMinimumPrice(minimumPrice: string): string | null {
    return this.database.getItem(minimumPrice);
  }
  public getMaximumPrice(maximumPrice: string): string | null {
    return this.database.getItem(maximumPrice);
  }

  public async getNumberOfProductsThatMatch(filters: any): Promise<number> {
    try {
      const result = await this.productGateway.getNumberOfProductsThatMatch(
        filters
      );
      return result;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async getProduct(id: string) {
    try {
      const result = await this.productGateway.getProduct(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
  public async createProduct(productInfo: any) {
    try {
      const token = this.userRepo.getToken();
      if (token) {
        const result = await this.productGateway.createProduct(
          productInfo,
          token
        );
        return result;
      }
    } catch (error) {
      throw error;
    }
  }
}
