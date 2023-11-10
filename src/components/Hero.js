'use client'
import React, {useState} from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="w-full h-screen top-[90px] bg-zinc-900/60">
    
    <div className="w-full h-[90%] text-center flex flex-col items-center justify-center px-4 text-white">
        <h1 className="font-bold text-2xl underline">The Deans List</h1>
        <h1 className="text-[25px] mt-8 text-white">Where you can add your members for deans list, business cards, teams, etc.</h1>
        <p className="mb-5 font-bold">Add business cards now</p>
        <div className="text-white flex flex-col sm:flex-row">
            <button className="bg-blue-500 text-white hover:bg-blue-900 rounded px-6 py-2 duration-300"><Link href="/NewPost">Add Members</Link></button>
            <button className="px-6 py-2 mt-4 bg-red-500 hover:bg-red-900 rounded text-white duration-300 ml-6"><Link href="/Home">View Members</Link></button>
        </div>
    </div>

</div>
  )
}

export default Hero