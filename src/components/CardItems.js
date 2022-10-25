import React from "react";
import '../style.css'
export default function CardItems(props) {
    return (
        <div className="container1">
            <div className="card">
            {props.prodact.soldOut === 0 && <div className="sold--out">SOLD OUT</div>}
                <img src={props.prodact.img} title="photo" className="card-img" />
                <div className="card-e">
                    <img src='./images/icon.png' title="" className="icon" />
                    <p>{props.prodact.how}<span> {props.prodact.country}</span></p>
                </div>
                <p>{props.prodact.text}</p>
                <p className="price"><span>{props.prodact.price}$</span> / person</p>

            </div>
        </div>
    )
}