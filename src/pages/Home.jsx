import React from 'react'
import NavBar from '../widgets/NavBar'
import Banner from '../widgets/Banner'
import CatogarySlider from '../widgets/CatogarySlider'
import Movies from '../widgets/Movies'

function Home() {
  return (
    <div>
      
        <NavBar/>
        <Banner/>

        <CatogarySlider/>

        <Movies name = {"ARM"} title = {"Movies"} type={"MOVIE"}/>
        <Movies name = {"One Piece"} title={"Animes"} type={"MOVIE"}/>
        <Movies name = {""} title = {"Series" } type={"TV_EPISODE"}/>
    </div>
  )
}

export default Home