import type localStorageType from "../database/localStorage";
import localStorage from "../database/localStorage";
import { Region } from "../domain/models";
export default class LocationRepo {
  private database: localStorageType;
  constructor() {
    this.database = new localStorage();
  }
  public async getRegions(filter?: string): Promise<Region[]> {
    return await this.database.getRegions(filter);
  }
}
