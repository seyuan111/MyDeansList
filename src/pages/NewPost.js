"use client"
import React, {useState} from 'react'
import axios from 'axios'
import Link from 'next/link'
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.css'

const NewPost = ({Container, Button, Form}) => {

  const [post, setPost] = useState({
    name: "",
    age: "",
    major: "",
    occupation: "",
    image: "",
    bio: ""
  })

  const router = useRouter();

  //listen to the user and update the state variable
  const handleChange = e => {
    setPost({...post, [e.target.name]: e.target.value}) //e.target.name = what they are typing while e.target.value is where they are typing
  }

  const handleSubmit = async e => {
    e.preventDefault() //send request html will refresh the page after you click submit and we dont want that to happen. We want to control how this form behaves.
    await axios.post('http://localhost:5500/posts', post) //I want to reach out to the backend server
    router.push("/")
  }

  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" name="name" placeholder="name" onChange={handleChange} required/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Age:</Form.Label>
          <Form.Control type="text" name="age" placeholder="age" onChange={handleChange} required/>
        </Form.Group>
          
        <Form.Group>
          <Form.Label>Major:</Form.Label>
          <Form.Control type="text" name="major" placeholder="major" onChange={handleChange} required/>
        </Form.Group>

        <Form.Group>
        <Form.Label>Occupation:</Form.Label>
        <Form.Control type="text" name="occupation" placeholder="occupation" onChange={handleChange} required/>
      </Form.Group>

        <Form.Group>
          <Form.Label>Image Url:</Form.Label>
          <Form.Control type="text" name="image" placeholder="image url" onChange={handleChange} required/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Bio:</Form.Label>
          <Form.Control type="textarea" rows={6} name="bio" placeholder="bio" onChange={handleChange} required/>
        </Form.Group>
        <Button className="bg-blue-500 text-white" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default NewPost