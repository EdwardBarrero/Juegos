import { useEffect, useState } from "react"

import { IUseVideogamesPaginatorProps, IUseVideogamesPaginatorValues } from "../../interfaces"

export const useVideogamesPaginator = ({callback} : IUseVideogamesPaginatorProps ) : IUseVideogamesPaginatorValues => {

  const [page, setPage] = useState<number>(1)
  const [maxPage, setMaxPage] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<any[]>([])

  const getData = async (p: number) => {
    const payload = `&page=${p}`
    const { data } = await callback(payload)
    setData(data.results)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    if (!maxPage) {
      const pages = Math.floor(data.count / 20)
      setMaxPage(pages)
    }
  }

  useEffect(() => {
    setLoading(true)
    getData(1)
  }, [])


  const nextPage = () => {
    if (page < maxPage) {
      setLoading(true)
      getData(page + 1)
      setPage(prevPage => prevPage + 1)
    }
  }

  const prevPage = () => {
    if (page > 1) {
      setLoading(true)
      getData(page - 1)
      setPage(prevPage => prevPage - 1)
    }
  }

  return {
    page,
    maxPage,
    loading,
    data,
    nextPage,
    prevPage
  }

}