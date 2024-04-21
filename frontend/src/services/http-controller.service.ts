import { buildEnvVars } from "@/constants/envVariables";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export interface HttpRequestOptions extends Pick<AxiosRequestConfig, "data"> {
  abortSignal?: AbortSignal;
  queryParams?: Partial<{ [key: string]: string | number }>;
}

export class HttpClient {
  private axios: AxiosInstance;
  private apiBasePath: string;
  private requestTimeout: number;
  private token?: string;

  constructor(
    axios: AxiosInstance,
    apiBasePath: string,
    requestTimeout?: number,
    token?: string
  ) {
    this.axios = axios;
    this.apiBasePath = apiBasePath;
    this.requestTimeout = requestTimeout || 5000;
    this.token = token;
  }

  private createRequestConfig(options?: HttpRequestOptions) {
    const requestConfig: AxiosRequestConfig = {
      baseURL: this.apiBasePath,
      signal: options?.abortSignal,
      params: options?.queryParams,
      timeout: this.requestTimeout,
      data: options?.data,
      headers: {
        Authorization: this.token,
      },
    };
    return requestConfig;
  }

  private transformResponse<R>(response: AxiosResponse<R>) {
    // Here you can put default transformation for every request response if it is needed
    return response?.data;
  }

  public async get<R>(path: string, options?: HttpRequestOptions) {
    const response = await this.axios
      .get<R>(path, this.createRequestConfig(options))
    return this.transformResponse<R>(response);
  }

  public async getWithHeaders<R>(path: string, options?: HttpRequestOptions) {
    const response = await this.axios.get<R>(
      path,
      this.createRequestConfig(options)
    );
    return {
      data: this.transformResponse<R>(response),
      headers: response.headers,
    };
  }

  public async post<D, R>(path: string, data: D, options?: HttpRequestOptions) {
    const response = await this.axios
      .post<R>(path, data, this.createRequestConfig(options))
    return this.transformResponse<R>(response);
  }

  public async put<D, R>(path: string, data: D, options?: HttpRequestOptions) {
    const response = await this.axios.put<R>(
      path,
      data,
      this.createRequestConfig(options)
    );
    return this.transformResponse<R>(response);
  }

  public async patch<D, R>(
    path: string,
    data: D,
    options?: HttpRequestOptions
  ) {
    const response = await this.axios.patch<R>(
      path,
      data,
      this.createRequestConfig(options)
    );
    return this.transformResponse<R>(response);
  }

  public async delete<R = void>(path: string, options?: HttpRequestOptions) {
    const response = await this.axios.delete<R>(
      path,
      this.createRequestConfig(options)
    );
    return this.transformResponse<R>(response);
  }
}
