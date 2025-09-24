// @ts-nocheck
import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'
 

const App = () => {
 /* useEffect(()=>{
    //setLocalStorage()
    getLocalStorage()
  },)*/
  const[user,setUser] = useState(null)
  const authData = useContext(AuthContext)

  
  const handleLogin = (email,password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      
    }
    else if(authData && authData.employees.find((e)=>e.email && e.password == password)){
      setUser('employee')
      
    }
    else{
      alert("Invalid Credentials")
    }
  }
  const data = useContext(AuthContext)
  console.log(data)

  return (
   <>
   {!user ? <Login handleLogin={handleLogin} />: ' '}
   {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
   
   </>
  )
}

export default App

