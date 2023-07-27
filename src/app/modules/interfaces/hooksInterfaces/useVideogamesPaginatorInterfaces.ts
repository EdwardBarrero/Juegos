import { AxiosResponse } from "axios"
import { IServiceResponse } from "../../../api/interfaces"

export interface IUseVideogamesPaginatorProps {
  callback: (payload: string) => Promise<AxiosResponse<IServiceResponse<any>>>
}

export interface IUseVideogamesPaginatorValues {
  page: number
  maxPage: number
  loading: boolean
  data: any[]
  nextPage: () => void
  prevPage: () => void
}