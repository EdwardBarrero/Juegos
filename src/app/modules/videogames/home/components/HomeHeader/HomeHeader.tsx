import { FC, useState } from "react"

import { SearchBar, CollapseFilter } from "./components"
import { Button } from "../../../../global/components"

export const HomeHeader : FC = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className="card bg-light mx-5 mb-2 pt-2">
      <div className="card-body d-flex justify-content-end">
        <div className="me-5">
          <Button
            type="button"
            className="btn-outline-success"
            text="Filtrar"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
      <CollapseFilter 
        open={open}
      />
    </div>
  )
}