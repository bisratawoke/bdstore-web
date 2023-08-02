import { IProduct } from "../domain/models";
import axios from "axios";
import Config from "../config/config";
export default class ProductGateway {
  constructor() {}

  public async getProduct(id: string) {
    try {
      const response = await axios.get(
        `${Config.getBaseUrl()}/api/v1/item-description/${id}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  public async getProducts(filters: any): Promise<IProduct[]> {
    try {
      const response = await axios.get(
        `${Config.getBaseUrl()}/api/v1/item/${filters.location}/${
          filters.category
        }/${filters.max_price}/${filters.min_price}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  public async getNumberOfProductsThatMatch(filters: any): Promise<number> {
    try {
      const response = await axios.get(
        `${Config.getBaseUrl()}/api/v1/item/match/${filters.location}/${
          filters.category
        }/${filters.max_price}/${filters.min_price}`
      );
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  public async createProduct(
    productInfo: Omit<IProduct, "id" | "picture_url">,
    token: string
  ) {
    try {
      const result = await axios.post(
        `${Config.getBaseUrl()}/api/v1/item/`,
        productInfo,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token,
          },
        }
      );
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}
