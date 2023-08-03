import { FC, useContext } from "react";

import { HomeContext } from "../../../context/homeContext"; 

import { Card } from "./components/Card";

import  "./homeCard.scss"

export const HomeCards : FC = () => {

  const { data: videogames } = useContext(HomeContext)


  const styles = {
    height: window.innerHeight * 0.8,
  }

  return (
    // <div className="row w-100 px-5 m-0">
    //   {videogames.map((videogame) => (
    //     <div
    //       className="col-xl-2 col-lg-3 col-md-4 my-3"
    //       key={videogame.id}
    //     >
    //       <Card
    //         videogame={videogame}
    //       />
    //     </div>
    //   ))}
    // </div>
    <div className="px-5 mb-1">
      <div className="w-100 d-flex px-5">
        {videogames.map((videogame) => (
          <div
            className="card-styles"
            style={styles}
            key={videogame.id}
          >
            <Card
              videogame={videogame}
            />
          </div>
        ))}
      </div>
    </div>
  )
}