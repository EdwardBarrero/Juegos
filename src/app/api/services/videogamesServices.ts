import { httpClient } from "../../../setup";

import { IServiceResponse, IVideogamesResponse } from "../interfaces";

const API_KEY = `?key=${process.env.REACT_APP_API_KEY}`

export function getVideogames (payload: any) {
  return httpClient.get<IServiceResponse<IVideogamesResponse>>(`games${API_KEY}${payload}`)
}