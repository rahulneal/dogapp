import React from 'react'
import Card from './Card'
import './styles.css'
const Main = ({nameCard,subBreedhandler}) => {
    const card = nameCard.map(name=><Card key={name} name={name} subBreedhandler={subBreedhandler}/>)

    return (
        <div className='card--list'>
            {card}
        </div>
    )
}

export default Main