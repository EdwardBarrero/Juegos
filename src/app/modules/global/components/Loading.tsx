import { FC } from "react";
import { Spinner } from "react-bootstrap";

interface ILoadingProps {
  loading: boolean
}

export const Loading : FC<ILoadingProps> = ({loading}) => {
  return (
    <>
      {loading && (
        <div className="position-absolute vw-100 vh-100 d-flex align-items-center justify-content-center bg-light top-0 left-0 z-3 opacity-75">
          <Spinner>
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </>
  )
}