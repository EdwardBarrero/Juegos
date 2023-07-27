import { httpClient } from "../../../setup";

import { IServiceResponse, IVideogamesResponse } from "../interfaces";

const API_KEY = `?key=${process.env.REACT_APP_API_KEY}`

export function getVideogames () {
  return httpClient.get<IServiceResponse<IVideogamesResponse>>(`games${API_KEY}`)
}