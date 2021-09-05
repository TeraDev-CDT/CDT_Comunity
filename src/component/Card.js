import React from 'react'
import './cards.css'


export default function Card({title,imageSource,desc,url}) {
    
    return (
        <div className="card text-center">
            <img className="img" src = {imageSource}></img>
            <div className="card-body text-center">
                
                <h4 className="card-title">{title}</h4>
                <p className = "card-text">{desc}</p>
                <a href={url} className ="btn btn-outline-secondary" target = "_blank"> Go to WebSite</a>

            </div>

            
        </div>
    )
}





