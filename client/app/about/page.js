import React from 'react'

function page() {
  return (
    <div>
      {/* Navbar */}
    <div className='flex px-3 py-1 items-center justify-between bg-blue-800 text-white '>
        <h1 className='text-3xl bg-transparentfont-bold'>ARSHA</h1>
        <div className='flex items-center gap-4 py-4'>
            <button className='bg-sky-500 rounded-full hover:bg-opacity-65 transition transform ease-in-out duration-100 py-1 px-3 ' >Get Started</button>
            <h4 className='lg:hidden'>icon</h4>
        </div>
    </div>

    </div>
  )
}

export default page
