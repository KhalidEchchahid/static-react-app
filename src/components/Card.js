import React from "react";
import '../style.css'
import CardItems from "./CardItems";
import Data from "./Data"


export default function Card() {

    const Elements = Data.map(prodact => <CardItems id={prodact.id}
         prodact={prodact}
          />)
    return (
        <div className="all-cards">
            {Elements}
        </div>
    )
}