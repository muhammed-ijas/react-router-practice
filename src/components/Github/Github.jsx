import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()


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

export const githubLoader = async ()=>{
    const res = await  fetch('https://api.github.com/users/muhammed-ijas')
    return res.json()
}