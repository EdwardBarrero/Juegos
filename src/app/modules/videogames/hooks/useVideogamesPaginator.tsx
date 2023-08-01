import { useEffect, useReducer } from "react"

import { IUseVideogamesPaginatorProps, IUseVideogamesPaginatorValues } from "../../interfaces"
import { homeReducer, initialStateHomeReducer } from "./reducer/homeReducer"
import { TYPES_HOME_REDUCER } from "./reducer/types"


export const useVideogamesPaginator = ({callback} : IUseVideogamesPaginatorProps ) : IUseVideogamesPaginatorValues => {

  const [state, dispatch] = useReducer(homeReducer, initialStateHomeReducer)

  const getData = async (p: number) => {
    const payload = `&page=${p}`
    const { data } = await callback(payload)
    dispatch({type: TYPES_HOME_REDUCER.SET_DATA, payload: {data: data.results, maxPage: Math.floor(data.count / 20)}})
    // setData(data.results)
    // setTimeout(() => {
    //   setLoading(false)
    // }, 1000)
    // if (!maxPage) {
    //   const pages = Math.floor(data.count / 20)
    //   setMaxPage(pages)
    // }
  }

  useEffect(() => {
    dispatch({type: TYPES_HOME_REDUCER.SET_LOADING, payload: true})
    // setLoading(true)
    getData(1)
  }, [])


  const nextPage = () => {
    if ( state.page < state.maxPage) {
      dispatch({type: TYPES_HOME_REDUCER.SET_LOADING, payload: true})
      getData(state.page + 1)
      dispatch({type: TYPES_HOME_REDUCER.SET_PAGE, payload: state.page + 1})
    }
    // if (page < maxPage) {
    //   setLoading(true)
    //   getData(page + 1)
    //   setPage(prevPage => prevPage + 1)
    // }
  }

  const prevPage = () => {
    if (state.page > 1) {
      dispatch({type: TYPES_HOME_REDUCER.SET_LOADING, payload: true})
      getData(state.page - 1)
      dispatch({type: TYPES_HOME_REDUCER.SET_PAGE, payload: state.page - 1})
    }
    // if (page > 1) {
    //   setLoading(true)
    //   getData(page - 1)
    //   setPage(prevPage => prevPage - 1)
    // }
  }

  return {
    // page,
    // maxPage,
    // loading,
    // data,
    ...state,
    nextPage,
    prevPage
  }

}