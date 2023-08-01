import { createContext } from "react";

import { IHomeContext, IHomeContextProps } from "../../interfaces"; 

import { getVideogames } from "../../../api/services"; 
import { useVideogamesPaginator } from "../hooks/useVideogamesPaginator";

export const HomeContext = createContext<IHomeContext>({
  loading: false,
  data: [],
  page: 1,
  maxPage: 0,
  nextPage: () => {},
  prevPage: () => {},
})

export const HomeContextProvider = ({children}: IHomeContextProps) => {

  const { page, maxPage, nextPage, prevPage, loading, data } = useVideogamesPaginator({callback: getVideogames})

  const values : IHomeContext = {
    page: page,
    maxPage: maxPage,
    loading: loading,
    data: data,
    nextPage: nextPage,
    prevPage: prevPage
  }

  return (
    <HomeContext.Provider
      value={values}
    >
      {children}
    </HomeContext.Provider>
  )
}
