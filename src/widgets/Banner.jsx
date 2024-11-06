import React from 'react';

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center bg-gradient-to-b from-red-600 via-red-400 to-red-200 w-full p-6 lg:p-12">
      <div className="flex justify-center lg:justify-start mt-6 lg:mt-0 lg:ml-20">
        <img 
          src="static/header.png" 
          alt="sample logo"  
          className="h-auto max-w-full lg:w-2/4" // Adjusted width for large screens
        />
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left mt-6 lg:mt-0 p-4 lg:p-0 lg:mr-24">
        <div className='w-max' >
            <h1 className="text-3xl lg:text-4xl  font-semibold">Book Your Shows At</h1>
            <h1 className="p-1 text-4xl lg:text-6xl font-bold">Hisham's Ticket</h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;