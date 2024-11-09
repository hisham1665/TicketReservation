import React from 'react'

function CatogarySlider() {
  return (
    <div>
        <div className='flex m-10 justify-evenly'>
            <div className='h-52 w-52'>
                <div className='p-4 cursor-pointer'>
                    <div className='rounded-xl hover:scale-105 '>
                        <a href="#">
                            <img src='static/Movie.jpg' alt='Images Not Found'/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='h-52 w-52'>
                <div className='p-4 cursor-pointer'>
                    <div className='rounded-xl hover:scale-105 '>
                        <a href="#">
                            <img src='static/Concert.jpg' alt='Images Not Found' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='h-52 w-52'>
                <div className='p-4 cursor-pointer'>
                    <div className='rounded-xl hover:scale-105 '>
                        <a href="#">
                            <img src='static/Sports.jpg' alt='Images Not Found' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CatogarySlider