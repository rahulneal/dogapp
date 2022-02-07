import React, { useEffect, useState } from 'react'

const Card = ({name, subBreedhandler}) => {
    const [dogImage, setDogImage] = useState('')
    
    // fetching the data once as the breed props comes in
    useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${name}/images/random`)
        .then(res=>res.json())
        .then(data=>setDogImage(data))
    }, [name])

    return (
        <div className='card'>
            {dogImage&& <img src={dogImage.message} alt=""/>}
            <h3 className='click--navigate'onClick={subBreedhandler}>{name}</h3>
        </div>
    )
}

export default Card