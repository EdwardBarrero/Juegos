import { FC } from "react"

import { getVideogames } from "../../../api/services"
import { useVideogamesPaginator } from "../hooks/useVideogamesPaginator"

export const Home : FC = () => {

  const { page, maxPage, loading, data, nextPage, prevPage } = useVideogamesPaginator({callback: getVideogames})

  console.log(data)

  return (
    <div>
      LOADING: {loading.toString()}
      <div>
        MAX_PAGE: {maxPage}
      </div>
      <ul className="pagination">
        <li
          className="page-item"
          onClick={prevPage}
          >
            <span
              className="page-link"
            >
              Anterior
            </span>
        </li>
        <li
          className="page-item active"
        >
          <span
            className="page-link"
          >
            {page}
          </span>
          
        </li>
        <li
          className="page-item"
          onClick={nextPage}
        >
          <span
            className="page-link"
          >
            Siguiente
          </span>
        </li>

      </ul>
    </div>
  )
}