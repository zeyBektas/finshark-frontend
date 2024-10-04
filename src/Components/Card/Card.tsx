import React from 'react'
import "./Card.scss"

type Props = {}

const Card = (props: Props) => {
    return (
        <div className="card">
            <img src="https://images.unsplash.com/photo-1612428978260-2b9c7df20150?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="Image" />
            <div className="details">
                <h2>APPL</h2>
                <p>$110</p>
            </div>
            <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quibusdam corporis quia magnam iure tempora. Aut quia, saepe ipsum placeat nobis distinctio eum eius alias inventore vero sit explicabo voluptates.</p>
        </div>
    )
}

export default Card