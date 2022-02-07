import React, { useEffect, useState } from 'react'
import './styles.css'

export default function SubBreedPopUp({dogName,subBreedName}){
    const [moreImages,setMoreImages] = useState([])
    const [image,setImage] = useState([])


    
    useEffect(()=>{
        fetch(`https://dog.ceo/api/breed/${dogName}/images/random/3`)
        .then(res=>res.json())
        .then(data=>setMoreImages(data.message))
    },[dogName])
    useEffect(()=>{
        subBreedName&&subBreedName.map(subname=>(
            fetch(`https://dog.ceo/api/breed/${dogName}/${subname}/images/random`)
            .then(res=>res.json())
            .then(data=>
                setImage(prevData=> prevData.concat(data.message))
        ))
        )
    },[subBreedName,dogName])
    console.log(subBreedName)
    // console.log(moreImages)
    // console.log(list)
    // console.log(subBreedName)
    return(
        <>
            <div className="result--cardlist1">
                            {image?image.map((ele,index)=>
                            <div className="result--card">
                                <img src={ele} key={index} alt="" /><h2>{subBreedName[index]}</h2>
                            </div>
                            ):<p>Nothing FOund</p>}
                            
            </div>
            <div className="more--images">
            <h3 className="align--cntr">More Images</h3>
            { moreImages.map((ele,index)=>
            <div className="result--card"key={index} >
                <img src={ele}  alt="" />
            </div>
            )}
            </div>
        </>
        
    )
}