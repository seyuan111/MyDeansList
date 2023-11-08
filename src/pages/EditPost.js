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
  
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [occupation, setOccupation] = useState('');
    const [contact, setContact] = useState('');
  
    useEffect(() => {
      if (id) {
        axios
          .get(`http://localhost:5500/posts/${id}`)
          .then((res) => {
            const postData = res.data;
            setName(postData.name);
            setAge(postData.age);
            setEmail(postData.email);
            setOccupation(postData.occupation);
            setContact(postData.contact);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }, []);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const updatedPost = {
        name,
        age,
        email,
        occupation,
        contact,
      };
  
      try {
        await axios.put(`http://localhost:5500/posts/${id}`, updatedPost);
        router.push('/Home');
      } catch (error) {
        console.error('Update failed:', error);
      }
    };

  return (
    <div>
    <NavBar />
    <h1 className="text-xl font-bold mt-4">Edit Post</h1>
    <div className="mt-4">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} className="border-2" type="text" name="name" placeholder="name" required/>

        <label>Age:</label>
        <input value={age} onChange={(e) => setAge(e.target.value)} className="border-2" type="text" name="age" placeholder="age" required/>
        
        <label>email:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="border-2" type="text" name="email" placeholder="email" required/>

        <label>Occupation:</label>
        <input value={occupation} onChange={(e) => setOccupation(e.target.value)} className="border-2" type="text" name="occupation" placeholder="occupation" required/>

        <label>Contact:</label>
        <input value={contact} onChange={(e) => setContact(e.target.value)} className="border-2" type="text" name="contact" placeholder="contact" required/>
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