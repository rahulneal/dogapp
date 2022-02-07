import React, { useEffect, useState } from 'react'
import './styles.css'
import SubBreedPopUp from './SubBreedPopUp'
const PopUp = ({isDisplaying,handleDisplay, dogBreed, isBreed,dogName}) => {

    const [category, setCategory] = useState('')
    const [numberOfResults, setNumberOfResults] = useState('')
    const [results, setResults] = useState([])
    const [image,setImage] = useState([])
    const [subBreedName, setSubBreedName] = useState('')


    const submitHandler = (e)=>{
        e.preventDefault()
        fetch(`https://dog.ceo/api/breed/${category}/images/random/${numberOfResults}`)
        .then(res=>res.json())
        .then(data=> setResults(data.message))
    }
        useEffect(function run(){
            setSubBreedName(dogBreed[dogName])
            subBreedName&&subBreedName.map(subname=>(
                fetch(`https://dog.ceo/api/breed/${dogName}/${subname}/images/random`)
                .then(res=>res.json())
                .then(data=>
                    setImage(prevData=> prevData.concat(data.message))
            ))
            )
        },[dogName,dogBreed,subBreedName])
        console.log(subBreedName)
        // console.log(image)
    
    return (
        <>
        {
         isDisplaying && <div className='popup--card-page'>
                <div className="popup--card">
                       {isBreed?<>
                        <div className="popup--title">
                            <h2 >{dogName}</h2>
                            <span onClick={handleDisplay}>x</span>
                        </div>
                        <div className="subBreed--section">
                            <h3 className='align--cntr'>Sub Breed</h3>
                            <SubBreedPopUp list={image} dogName={dogName} subBreedName={subBreedName}/>
                            {/* {image} */}
                            {/* {image.map(ele=>ele)} */}
                            {/* {image.length>0?image.map(ele=>ele):<p>no sub breed</p>} */}
                        </div>
                        
                        </>:
                        <>
                        <div className="popup--title">
                            <h2 >Custom Search</h2>
                            <span onClick={handleDisplay}>x</span>
                        </div>
                        <div className="set--grid">
                            <select id="" className='popUp--inpt'  onChange={(e)=>setCategory(e.target.value)}>
                                <option value="">Select a category</option>
                                {
                                Object.keys(dogBreed)
                                .map( (breedname,index) =>
                                <option value={breedname} key={index}>{breedname}</option>
                                    )
                                }
                            </select>
                            <input type="number" placeholder='number of images' className='popUp--inpt' onChange={(e)=>setNumberOfResults(e.target.value)} required/>
                            <button className='image--btn' onClick={submitHandler}>Get Images</button>
                        </div>
                            {results&&<div className='second--section'>
                                <h3 className='align--cntr'>search results</h3>
                                <div className=" result--cardList">
                                        { results? results.map((result,index)=>
                                        <div className="result--card">
                                            <img src={result} key={index} alt="results"/>
                                            </div>
                                        ):null}
                                </div>
                            </div>}
                        </>}
                        
                </div>
            </div>
        }
        </>
    )
}

export default PopUp