import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateUser = () => {

  const {id} = useParams();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [mail, setMail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  let Update = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:6001/updateUser/${id}`, {name, phone, mail, age})
    .then(res => {
      console.log(res)
      navigate('/')
    })
    .catch(err => console.error(err));
  }

  useEffect(()=>{
    axios.get('http://localhost:6001/getUser/'+id)
    .then(res=>{
      console.log(res)
      setName(res.data.name),
      setPhone(res.data.phone),
      setMail(res.data.mail),
      setAge(res.data.age)
    })
    .catch(err=>{console.log(err)});
}, [])

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h3 className="text-2xl font-semibold mb-6 text-center">Update User</h3>
        <form className="space-y-4" onSubmit={Update}>
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <input
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              placeholder="Enter Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setMail(e.target.value)}
              value={mail}
              placeholder="Enter Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-gray-700 font-medium mb-1">Age</label>
            <input
              type="text"
              id="age"
              onChange={(e) => setAge(e.target.value)}
              value={age}
              placeholder="Enter Age"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser