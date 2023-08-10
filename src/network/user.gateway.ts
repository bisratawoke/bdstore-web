import Config from "../config/config";
import axios from "axios";
interface authPayload {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}
export default class UserGateway {
  constructor() {}
  public async authenticateUser(payload: {
    username: string;
    password: string;
  }) {
    try {
      const result = await axios.post(
        `${Config.getBaseUrl()}/api/v1/user/login`,
        payload
      );
      console.log(result.status);
      return result.data;
    } catch (error) {
      throw error;
    }
  }

  public async createUser(payload: authPayload) {
    try {
      const result = await axios.post(
        `${Config.getBaseUrl()}/api/v1/user`,
        payload
      );
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}
