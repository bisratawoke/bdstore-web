import { IProduct } from "../domain/models";
import axios from "axios";
import Config from "../config/config";
export default class ProductGateway {
  constructor() {}

  public async getCategories(filters: any): Promise<IProduct[]> {
    try {
      console.log("============= in get products =================");
      console.log(filters);
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

  public async getItemCategories() {
    try {
      const response = await axios.get(
        `${Config.getBaseUrl()}/api/v1/item-type`
      );
      return response.data;
    } catch (error) {
      console.log(" ============ in get item categories =================");
      console.log(error);
    }
  }
}
