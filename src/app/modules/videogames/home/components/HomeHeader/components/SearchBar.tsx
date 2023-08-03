import { FC } from "react"
import { Formik, Form, FormikProps } from "formik"

import { InputCustom, Button } from "../../../../../global/components"

import { searchInitialValues } from "../../../../../global/helpers/navbarHelpers"
import { ISearchBarInitialValues } from "../../../../../interfaces/componentsInterfaces/navbarInterfaces"

export const SearchBar : FC = () => {
  return (
    <Formik
    initialValues={searchInitialValues}
    onSubmit={(values, {resetForm}) => {
      console.log(values)
      resetForm({values: searchInitialValues})
    }}
  >
    {(props: FormikProps<ISearchBarInitialValues>) => (
      <Form
        className="d-flex"
      >
        <InputCustom
          type="text"
          className="form-control me-2"
          placeholder="Buscar"
          name="search"
          value={props.values.search}
          onChange={props.handleChange}
        />
        <Button
          type="submit"
          className="btn-outline-success"
          text="Buscar"
        />
      </Form>
    )}
  </Formik>
  )
}