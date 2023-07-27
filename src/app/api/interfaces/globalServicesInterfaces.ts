export interface IServiceResponse<T> {
  count: number
  next: string
  previous: string
  results: T[]
}