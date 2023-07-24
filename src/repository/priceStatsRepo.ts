import type localStorageType from "../database/localStorage";
import localStorage from "../database/localStorage";
import { Region } from "../domain/models";
export default class priceStatsRepo {
  private database: localStorageType;
  constructor() {
    this.database = new localStorage();
  }
  public async getStats(filter?: string) {
    return null;
  }
}
