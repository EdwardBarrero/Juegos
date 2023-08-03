import { FC } from "react";
import { IVideogamesResponse } from "../../../../../../api/interfaces";

interface CardProps {
  videogame: IVideogamesResponse
}

export const Card : FC<CardProps> = ({videogame}) => {

  const cardStyle : any = {
    height: "100%",
    objectFit: "cover"
  }

  return (
    <div className="card h-100">
      <img src={videogame.background_image} className="card-img-top" style={cardStyle} alt="" />
      <h5 className="text-truncate text-center my-2 px-1">{videogame.name}</h5>
    </div>
  )
}