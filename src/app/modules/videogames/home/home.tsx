import { FC, useContext } from "react"

import { HomeContextProvider } from "../context/homeContext"
import { HomeContext } from "../context/homeContext"

import { ButtonsPagination } from "./components/ButtonsPagination"
import { Loading } from "../../global/components"
import { Navbar } from "../../global/components/Navbar" 

export const Home : FC = () => {

  return (
    <>
      <HomeContextProvider>
        <Navbar />
        <ButtonsPagination />
        <HomeLoading />
      </HomeContextProvider>
    </>
  )
}

export const HomeLoading = () => {
  const { loading } = useContext(HomeContext)
  return (
    <Loading loading={loading} />
  )
}