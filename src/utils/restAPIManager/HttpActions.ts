import axios, { AxiosInstance, AxiosResponse, RawAxiosRequestConfig } from 'axios';
import IRestApi from './IRestApi';
import { config } from 'process';

export default class HttpActions implements IRestApi<RawAxiosRequestConfig, Promise<AxiosResponse>>{
    protected axiosInstance: AxiosInstance;


    constructor() {
      this.axiosInstance = axios.create({
      });
  
    }
  /**
   * Realiza una petición GET
   * @param url URL del endpoint a consultar
   * @param config Configuración opcional del request
   * @returns
   */
  public async get(
    url: string,
    config?: RawAxiosRequestConfig
  ): Promise<AxiosResponse> {
    return await this.axiosInstance.get( url, config );
  }

  public async post(
    url:string,
    data:any,
    config?:RawAxiosRequestConfig
  ):Promise<AxiosResponse>{
    return await this.axiosInstance.post(url, data, config);
  }


}