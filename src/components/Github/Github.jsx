import React, { useEffect, useState } from 'react'

function Github() {

    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/muhammed-ijas')
        .then ((res)=> res.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    },[])

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <div>Github Followers: {data.followers}</div>
      <div className="flex justify-center items-center mt-4">
        <img src={data.avatar_url} alt="Profile" width={300} className="rounded-full" />
      </div>
    </div>
  )
}

export default Github;