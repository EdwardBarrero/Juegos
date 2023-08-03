import { FC } from "react"
// import { Formik, Form, FormikProps } from "formik"
import { Collapse } from "react-bootstrap"

interface CollapseFilterProps {
  open: boolean
}

export const CollapseFilter : FC<CollapseFilterProps> = ({open}) => {


  return (
    <>
      <Collapse
        in={open}
      >
        <div>
          hola
        </div>
      </Collapse>
    </>
  )
}