import React from 'react'
import data from './data.js'
import Navbar from './Navbar.jsx'
import Card from './Card.jsx'
import "./style.css"

export default function App(props) {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })



    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>

    )
}