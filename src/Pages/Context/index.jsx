import React, { useState } from 'react'
import { createContext } from 'react'
export const context = createContext()
function Context({children}) {
    const [login, setlogin] = useState([])
    const [user, setuser] = useState({auth: false})

    const getData =(data)=>{
        setlogin(data)
    }

    const getUser =(user) =>{
        setuser(user)
    }
  return (
    <div>
         <context.Provider value={{login, user, setlogin, setuser, getUser, getData}}>
            {children}
         </context.Provider>
    </div>
  )
}

export default Context