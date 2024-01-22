import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState({});
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Bluesheep-jay")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       setData(res);
  //     });
  // }, []);

  const data = useLoaderData()
  return (
    <>
      <div className="flex gap-4  bg-orange-600">
        <div className="p-4 flex flex-col items-center">
          <img src={data.avatar_url} className="bg-white p-1 rounded-md h-32 w-auto" alt="" />
          <h1 className=" text-white pt-1 text-center text-2xl">
            {data.login}
          </h1>
        </div>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, ipsum?
        </span>
      </div>
    </>
  );
}

export default Github;
export const githubInfoLoader = async () => {
  const res = await fetch('https://api.github.com/users/Bluesheep-jay')
  return res.json()
}