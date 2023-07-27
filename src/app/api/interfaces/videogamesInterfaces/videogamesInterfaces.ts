export interface IVideogamesResponse {
  id: number
  slug: string
  name: string
  released: string
  background_image: string
  rating: number
  rating_top: number
  ratings: IRatings[]
  parent_platforms: IParentPlatforms[]
  genres: IGenres[]
}

export interface IRatings{
  id: number
  title: string
  count: number
  percent: number
}

export interface IParentPlatforms {
  platform: IPlatforms
}

export interface IPlatforms {
  id: number
  name: string
  slug: string
}

export interface IGenres {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
}