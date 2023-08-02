import axios from "axios";
import Config from "../config/config";
import { Region } from "../domain/models";
export default class locationGateway {
  constructor() {}
  public async getLocation(): Promise<Region[]> {
    try {
      const response = await axios.get(`${Config.getBaseUrl()}/api/v1/region`);
      const result = await response.data.map((region: Region) => ({
        picture_url: `${Config.getBaseUrl()}/${region.picture_url}`,
        name: region.name,
      }));
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
