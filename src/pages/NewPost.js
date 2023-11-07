"use client"
import React, {useState} from 'react'
import axios from 'axios'
import Link from 'next/link'
import 'tailwindcss/tailwind.css';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'

const NewPost = () => {

  const [post, setPost] = useState({
    name: "",
    age: "",
    email: "",
    occupation: "",
    contact: ""
  })

  const router = useRouter();

  //listen to the user and update the state variable
  const handleChange = e => {
    setPost({...post, [e.target.name]: e.target.value}) //e.target.name = what they are typing while e.target.value is where they are typing
  }

  const handleSubmit = async e => {
    e.preventDefault() //send request html will refresh the page after you click submit and we dont want that to happen. We want to control how this form behaves.
    await axios.post('http://localhost:5500/posts', post) //I want to reach out to the backend server
    router.push("/Home")
  }

  return (
    <div>
      <NavBar />
      <div className="mt-4">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label>Name:</label>
          <input className="border-2" type="text" name="name" placeholder="name" onChange={handleChange} required/>

          <label>Age:</label>
          <input className="border-2" type="text" name="age" placeholder="age" onChange={handleChange} required/>
          
          <label>email:</label>
          <input className="border-2" type="text" name="email" placeholder="email" onChange={handleChange} required/>

          <label>Occupation:</label>
          <input className="border-2" type="text" name="occupation" placeholder="occupation" onChange={handleChange} required/>

          <label>Contact:</label>
          <input className="border-2" type="text" name="contact" placeholder="contact" onChange={handleChange} required/>
        </form>
        <button className="rounded mt-4 mb-6 bg-blue-500 text-white px-4 py-2" type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default NewPost