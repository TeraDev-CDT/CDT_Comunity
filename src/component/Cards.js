import React from 'react'
import Card from './Card'

import image1 from '../Asset/image1.jpg'
import image2 from '../Asset/image2.jpg'
import image3 from '../Asset/image3.jpg'

const cards = [
    {
        id: 1,
        title: 'Final Fantasy XV',
        image: image1,
        desc: 'Square Enix - 2017',
        url: 'https://store.steampowered.com/app/637650/FINAL_FANTASY_XV_WINDOWS_EDITION'

    },
    {
        id: 2,
        title: 'NieR:Automata',
        image: image2,
        desc: 'Square Enix - 2015'

    },
    {
        id: 3,
        title: 'Kingdom Heart',
        image: image3,
        desc: 'Square Enix - 2016'
    

    }
  
]


export default function Cards() {
    return (
        
        <div className = "container d-flex justify-content-center align-items-center  ">
            
            <div className="row">
                
                {
                    cards.map(cards =>(
                        <div className="col-sm-4">
                            <Card title ={cards.title} imageSource = {cards.image} desc = {cards.desc} url ={cards.url}/>
                        </div>
                    ) )
                }

                </div>  
            
            
        </div>
    )
}
