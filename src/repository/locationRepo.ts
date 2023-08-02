// import type localStorageType from "../database/localStorage";
// import localStorage from "../database/localStorage";
import { Region } from "../domain/models";
import locationGateway from "../network/location.gateway";
export default class LocationRepo {
  // private database: localStorageType;
  private locationGateway: locationGateway;
  constructor() {
    // this.database = new localStorage();
    this.locationGateway = new locationGateway();
  }
  // public async getRegions(filter?: string): Promise<Region[]> {
  //   return await this.database.getRegions(filter);
  // }
  public async getRegions(filter?: string): Promise<Region[]> {
    try {
      const result = await this.locationGateway.getLocation();
      if (filter && filter?.length > 0) {
        return result.filter(
          (region: Region) => !region.name.toLowerCase().indexOf(filter)
        );
      }
      return result;
    } catch (error) {
      throw error;
    }
  }
}
