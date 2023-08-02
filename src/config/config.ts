enum mode {
  DEV,
  PROD,
}
export default class Config {
  private static readonly BASE_URL = "https://bdstore-bakend-v1.onrender.com";
  private static readonly mode: mode = mode.DEV;
  constructor() {}
  public static getBaseUrl(): string {
    return this.mode == mode.DEV ? "http://localhost:4000" : this.BASE_URL;
  }
}
