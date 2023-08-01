import { IHomeReducer } from "../../../interfaces";
import { TYPES_HOME_REDUCER } from "./types"; 

export const initialStateHomeReducer : IHomeReducer = {
  loading: false,
  data: [],
  page: 1,
  maxPage: 1
}

export const homeReducer = (state = initialStateHomeReducer, action: any) => {
  switch (action.type) {
    case TYPES_HOME_REDUCER.SET_DATA:
      return {
        ...state,
        data: action.payload.data,
        maxPage: action.payload.maxPage,
        loading: false
      }
    case TYPES_HOME_REDUCER.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case TYPES_HOME_REDUCER.SET_PAGE:
      return {
        ...state,
        page: action.payload
      }
    default:
      return state
  }
}