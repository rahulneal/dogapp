import React, { useEffect, useState } from 'react'
import './styles.css'
import NavBar from './components/NavBar/NavBar'
import PopUp from './components/Popup/PopUp'
import SearchBox from './components/Search/SearchBox'
import Main from './components/Main/Main'

const App = () => {
    const [dogBreed, setDogBreed] = useState([])
    const [searchName, setSearchName] = useState('')
    const [dogName, setDogName] = useState('')
    const [isDisplaying, setIsDisplaying] = useState(false)
    const [isBreed, setIsBreed] = useState(false)

    const nameCard = Object.keys(dogBreed).map(breed=>breed)
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
        .then(res=>res.json())
        .then(data=>setDogBreed(data.message))
    }, [])

    // console.log(dogBreed)

    const filteredNames = nameCard.filter(name=>name.includes(searchName))

    const inputHandler = (e)=>{
        setSearchName(e.target.value)
    }

    const subBreedhandler = async(e)=>{
        setDogName(e.target.innerText)
        setIsDisplaying(prev=>!prev)
        setIsBreed(true)
        // await setSubBreedName(dogBreed[dogName])
    }
    // console.log(dogBreed)
    

    function handleDisplay(){
        setIsDisplaying(prev=>!prev)
        setIsBreed(false)
    }
    return (
        <>
        <NavBar handleDisplay={handleDisplay}/>
        <SearchBox inputHandler={inputHandler}/>
        <Main nameCard={filteredNames} subBreedhandler={subBreedhandler}/>
        <PopUp isDisplaying={isDisplaying} isBreed={isBreed} dogName={dogName} dogBreed={dogBreed} handleDisplay={handleDisplay}/>
        </>
    )
}

export default App