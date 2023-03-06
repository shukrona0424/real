import React, { useEffect } from "react";
import { instance } from "../../Components/Utils/axiosInstance.jsx";
import {Link} from "react-router-dom"
import { useState } from "react";
import sass from "../../Pages/Users/index.module.scss"
import { useDataFetch } from "../../Components/Hooks/getId.jsx";
import {useQuery} from "@tanstack/react-query"

export default function Users() {

  const users = useDataFetch (["users"], "users?page=2");
  console.log(users);
  return(
   <div className={sass.users}>
    <h1>Users</h1>
  <ul>
  { users?.data?.data?.map(e => ( 
 <Link to="/login">
     <li key= {e.id}>
      <h5>{e.email}</h5>
      <h4>{e.first_name}</h4>
     <img src={e.avatar} alt="" />
    </li></Link>
  ))}
  <Link to="/join">  <button >Join Us</button></Link>
  </ul>
  </div>
  )
}
