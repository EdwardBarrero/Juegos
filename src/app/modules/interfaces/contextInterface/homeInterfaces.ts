import { IVideogamesResponse } from "../../../api/interfaces"

export interface IHomeContext {
  loading: boolean
  data: IVideogamesResponse[]
  nextPage: () => void
  prevPage: () => void
  page: number
  maxPage: number
}

export interface IHomeContextProps {
  children: React.ReactNode
}