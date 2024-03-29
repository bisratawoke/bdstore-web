enum mode {
  DEV,
  PROD,
}
export default class Config {
  private static readonly BASE_URL = "https://bdstoree.onrender.com";
  private static readonly mode: mode = mode.PROD;
  constructor() {}
  public static getBaseUrl(): string {
    return this.mode == mode.DEV ? "http://localhost:4000" : this.BASE_URL;
  }
}
