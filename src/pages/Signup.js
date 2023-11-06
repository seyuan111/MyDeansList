"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import { BiArrowBack } from 'react-icons/bi';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';
import Footer from '../components/Footer';

const Signup = () => {
    const router = useRouter();

    const goBack = () => {
        router.back();
      };
    
  return (
    <div>
    <NavBar />
    <div className="w-full h-full top-[90px] bg-zinc-900/70">

      <div className="flex justify-center items-center h-full">
        <form className="max-w-[400px] w-full mx-auto bg-gray-400 rounded my-10 p-8">
          <BiArrowBack onClick={goBack} className="text-white cursor-pointer text-[20px]" />
          <h2 className="text-4xl font-bold text-center py-8 text-white">Deans List Sign Up</h2>
          <div className="flex flex-col mb-4">
            <label className="text-white mb-2">Email:</label>
            <input className="border rounded bg-gray-100 p-2" type="text" placeholder="email"></input>
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-white mb-2">Username:</label>
            <input className="border rounded bg-gray-100 p-2" type="text" placeholder="username"></input>
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-2">Password:</label>
            <input className="border rounded bg-gray-100 p-2" type="password" placeholder="password"></input>
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-2">Confirm Password:</label>
            <input className="border rounded bg-gray-100 p-2" type="password" placeholder="confirm password"></input>
          </div>
          <button className="w-full py-3 mt-8 hover:bg-blue-900 bg-blue-500 rounded duration-300 text-white cursor-pointer">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Signup