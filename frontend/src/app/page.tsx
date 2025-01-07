"use client"; 

import './globals.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./componant/Users"
import CreateUser from "./componant/CreateUser"
import UpdateUser from "./componant/UpdateUser"


export default function Home() {
  const isBrowser = typeof window !== 'undefined';
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 ">
    {isBrowser && (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users/>}/>
          <Route path="/create" element={ <CreateUser/>}/>
          <Route path="/update/:id" element={<UpdateUser/>}/>
        </Routes>
      </BrowserRouter>
       )}
    </div>
  );
}
