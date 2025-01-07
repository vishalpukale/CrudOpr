import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:6001')
        .then(res=>{setUsers(res.data)})
        .catch(err=>{console.log(err)});
    }, [])


    const handleDelete = (id) => {
        axios.delete(`http://localhost:6001/deleteUser/${id}`)
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)});

        location.reload();
    }

  return (
    <div className='flex justify-center items-center min-h-screen bg-primary'>
        <div className=''>
            <Link className='flex justify-center m-3' to="/create"> 
                <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">Add User</button>
            </Link>
            <table>
                <thead>
                    <tr className='gap-4'>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Phone_Number</th>
                        <th className="border px-4 py-2">Email</th>
                        <th className="border px-4 py-2">Age</th>
                        <th className="border px-4 py-2">Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {       
                    users.map((user) => {
                            return <tr>
                                <td className="border px-4 py-2">{user.name}</td>
                                <td className="border px-4 py-2">{user.phone}</td>
                                <td className="border px-4 py-2">{user.mail}</td>
                                <td className="border px-4 py-2">{user.age}</td>
                                <td className="border px-4 py-2">
                                <div className='flex d-block'>
                                    <Link className='flex justify-center m-3' to={`/update/${user._id}`}> 
                                        <button>
                                            <svg class="h-8 w-8 text-red-500"  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>
                                        </button> 
                                    </Link>
                                        <button onClick={(e)=>handleDelete(user._id)}>
                                            <svg class="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />  <line x1="18" y1="9" x2="12" y2="15" />  <line x1="12" y1="9" x2="18" y2="15" /></svg>
                                        </button>
                                </div>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Users