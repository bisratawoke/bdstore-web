import { IProduct } from "../domain/models";
import axios from "axios";
import Config from "../config/config";
export default class ProductGateway {
  constructor() {}

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
      console.log(
        "=============== in getNumberOfProductsThatMatchGateway =========="
      );
      console.log(filters);
      const response = await axios.get(
        `${Config.getBaseUrl()}/api/v1/item/match/${filters.location}/${
          filters.category
        }/${filters.max_price}/${filters.min_price}`
      );
      return response.data;
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  }

  public async createProduct(
    productInfo: Omit<IProduct, "id" | "picture_url">
  ) {
    try {
      const result = await axios.post(
        `${Config.getBaseUrl()}/api/v1/item/`,
        productInfo,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization:
              "Bearer " +
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJpc3JhdEBnbWFpbC5jb20iLCJpZCI6IjRjNjI3MGZlLWIzN2MtNGQwYS1hOTg2LTI1OWRmZTMxZjYwYSIsImlhdCI6MTY4OTQyMTMyMX0.4gmPd1Ig5Fie8IjgSFi3kkLCvbfYv6vYA2sDNn2YZio",
          },
        }
      );
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}
