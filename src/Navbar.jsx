import React from 'react'
import earth from  "/public/earth-icon.png"

export default function Navbar(){
    return (
        <div className="nav">
            <img src={earth} className="nav-icon"/> 
            <p>my travel journal</p>
        </div>
    )
}
        