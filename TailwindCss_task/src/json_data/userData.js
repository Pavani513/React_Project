import axios from 'axios'
import React, { useEffect, useState } from 'react'

function userData() {
    const [data,setData]=useState([])
useEffect(()=>{
axios.post('http://localhost:5000/users')
.then(res=>setData(res.data))
.catch(err=>console.log(err))
},[])

  return (
    <div>


    </div>
  )
}

export default userData