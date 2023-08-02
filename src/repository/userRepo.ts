import localStorage from "../database/localStorage";
import type localStorageType from "../database/localStorage";
import type UserGatewayType from "../network/user.gateway";
import UserGateway from "../network/user.gateway";
interface authPayload {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}
export default class UserRepo {
  localStorage: localStorageType;
  userGateway: UserGatewayType;
  constructor() {
    this.localStorage = new localStorage();
    this.userGateway = new UserGateway();
  }

  isAuthenticated(): boolean {
    try {
      if (this.hasToken()) {
        return true;
      } else return false;
    } catch (error) {
      throw error;
    }
  }

  hasToken(): boolean {
    try {
      const token = this.localStorage.getUserToken();
      if (token && token.length > 0) {
        return true;
      } else return false;
    } catch (error) {
      throw error;
    }
  }

  getToken() {
    try {
      return this.localStorage.getUserToken();
    } catch (error) {}
  }

  async login(payload: authPayload) {
    try {
      const response = await this.userGateway.authenticateUser(payload);
      this.localStorage.storeItem("token", response.token);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async register(payload: authPayload) {
    try {
      await this.userGateway.createUser(payload);
    } catch (error) {
      throw error;
    }
  }
}
