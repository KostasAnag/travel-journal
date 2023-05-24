import React from "react"
import location from "/public/location-icon.png" 

export default function Card(props) {


    return (
        <div className="card">

            <img src={`${props.item.imageUrl}`} className="card-image" />
            <div className="card-info">
                <img src={location}/>
                <span className="location small-font">{props.item.location}</span>
                <span><a href={`${props.item.googleMapsUrl}`} target="_blank" className="small-font">View on Google Maps</a></span>
                <p className="card-title">{props.item.title}</p>

                <span className="date small-font">{props.item.startDate} - {props.item.endDate}</span>
                <p className="description small-font"> {props.item.description} </p>
            </div>


        </div>
    )
}