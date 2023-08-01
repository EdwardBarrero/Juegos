import { FC, useContext } from "react"

import { HomeContext } from "../../context/homeContext" 

export const ButtonsPagination : FC = () => {

  const { page, maxPage, nextPage, prevPage } = useContext(HomeContext)

  const setButtons = () => {
    if (maxPage) {
      const buttons = []
      let bntOne = page !== 1 ? page - 1 : 1
      let btnTwo = page !== 1 ? page : page < maxPage ? page + 1 : null
      let btnThree = page !== 1 ? page + 1 : page < maxPage ? page + 2 : null
      buttons.push(bntOne)
      if (btnTwo) {
        buttons.push(btnTwo)
      }
      if (btnThree) {
        buttons.push(btnThree)
      }
      return buttons
    }
    return null
  }

  

  return (
    <div>
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
        {setButtons() && setButtons()?.map((btn, index) => (
          <li
            className={`page-item ${btn === page ? 'active' : ''}`}
            key={index}
          >
            <span
              className="page-link"
            >
              {btn}
            </span>
          </li>
        ))}
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