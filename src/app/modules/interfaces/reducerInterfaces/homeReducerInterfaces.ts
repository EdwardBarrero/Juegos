import { IVideogamesResponse } from "../../../api/interfaces"

export interface IHomeReducer {
  loading: boolean
  data: IVideogamesResponse[]
  page: number
  maxPage: number
}