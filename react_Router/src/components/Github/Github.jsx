import React from 'react'
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
function Github() {
    const data = useLoaderData();

    // const [data, setData] = useState(0);

    // useEffect(() => {
    //     fetch("https://api.github.com/users/abhishekbhatia01")
    //       .then((res) => res.json())
    //       .then((res) => {
    //         setData(res);
    //         console.log(res);
    //       });

    //   }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 rounded-lg'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github

export const GithubApi = async () => {
    const res = await fetch("https://api.github.com/users/abhishekbhatia01 ");
    const data = await res.json();
    return data;
}
