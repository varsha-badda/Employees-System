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
  const [loggedInUser,setLoggedInUser] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(()=>{
    if(authData){
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        setUser(loggedInUser)
      }

    }
  },[authData]);
  
  const handleLogin = (email,password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      
    }
    else if(authData){
      const employee = authData.employees.find((e) => e.email === email && e.password === password)
      if(employee){
        setUser('employees')
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
      }
      
      
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
   {user == 'admin' ? <AdminDashboard/> : (user == 'employees' ? <EmployeeDashboard data={loggedInUser} />: null ) }
   </>
  )
}

export default App

