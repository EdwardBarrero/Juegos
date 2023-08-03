import { FC, useContext } from "react"

import { HomeContextProvider } from "../context/homeContext"
import { HomeContext } from "../context/homeContext"

import { ButtonsPagination } from "./components/ButtonsPagination"
import { Loading } from "../../global/components"
import { Navbar } from "../../global/components/Navbar" 
import { HomeHeader } from "./components/HomeHeader/HomeHeader"
import { HomeCards } from "./components/HomeCards/HomeCards"

export const Home : FC = () => {

  return (
    <>
      <HomeContextProvider>
        <div className="bg-dark vh-100">
          <Navbar />
          <HomeHeader />
          <HomeCards />
          <ButtonsPagination />
        </div>
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