import React from 'react'

function MovieCard(props) {
  return (
    <div className=''>
        <div className='h-52 w-52 object-fill'>
            <div className='rounded-xl p-4'>
                <img src={props.Poster_Link} alt={props.Series_Title} className='rounded-xl' />
                <h1>{props.Series_Title}</h1>
            </div>
        </div>
    </div>
  )
}

export default MovieCard