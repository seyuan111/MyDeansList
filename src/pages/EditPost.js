"use client"
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link'
import 'tailwindcss/tailwind.css';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'

const EditPost = () => {
    const router = useRouter();
    const { id } = router.query;
  
    const [post, setPost] = useState({
      name: "",
      age: "",
      email: "",
      occupation: "",
      contact: ""
    })
  
    useEffect(() => {
      if (id) {
        axios.get(`http://localhost:5500/posts/${id}`)
          .then((res) => {
            setPost({...post, [e.target.name]: e.target.value})
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }, []);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      axios.put(`https://concerned-frog-culottes.cyclic.app/posts/${id}`)
      .then((res) => {
        router.push("/Home")
      })
      .catch((error) => {
        console.error(error);
      });
    };

  return (
    <div>
    <NavBar />
    <h1 className="text-xl font-bold mt-4">Edit Post</h1>
    <div className="mt-4">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input value={post.name} onChange={(e) => setPost(e.target.value)} className="border-2" type="text" name="name" placeholder="name" required/>

        <label>Age:</label>
        <input value={post.age} onChange={(e) => setPost(e.target.value)} className="border-2" type="text" name="age" placeholder="age" required/>
        
        <label>email:</label>
        <input value={post.email} onChange={(e) => setPost(e.target.value)} className="border-2" type="text" name="email" placeholder="email" required/>

        <label>Occupation:</label>
        <input value={post.occupation} onChange={(e) => setPost(e.target.value)} className="border-2" type="text" name="occupation" placeholder="occupation" required/>

        <label>Contact:</label>
        <input value={post.contact} onChange={(e) => setPost(e.target.value)} className="border-2" type="text" name="contact" placeholder="contact" required/>
      </form>
      <button className="rounded mt-4 mb-6 bg-blue-500 text-white px-4 py-2" type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
    <Footer />
  </div>
  )
}

export default EditPost