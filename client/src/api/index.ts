import type { AxiosInstance } from "axios";
import axios from "axios";
import { constants } from "@/constants/api.constants";

class Api {
  private httpClient: AxiosInstance;

  constructor(private readonly baseUrl: string = constants.url) {
    this.httpClient = this.initializeHttpClient();
  }

  private initializeHttpClient() {
    return axios.create({
      timeout: 10000,
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }

  api = () => ({
  });
}

export const api = new Api("");