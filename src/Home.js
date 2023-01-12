import React, { useState, useEffect } from "react";
import img from "./weatherApp.png";
function Home() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const Api = async (e) => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8934dccf5b920937c91e0a6bce13bf7a`;
      const response = await fetch(url);
      const resJson = await response.json();
      setData(resJson.main);
    };
    Api();
  }, [search]);

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  });

  return (
    <>
    {/* main div */}
       <div className="w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 text-orange-700 font-bold">
       <div className="md:flex">
       <div className="flex-none">
       <h1 className="text-3xl text-center text-red-500 p-3">Weather Application</h1>
       <img src={img} alt="" srcSet="" className="w-60 h-60 p-10 m-auto" />
       </div>

      {/* input div */}
       <div className="w-screen h-40 lg:h-20 grid place-content-center place-items-center md:pb-20 md:mx-auto lg:pb-12 lg:mt-80 lg:ml-96 font-bold">
       <input
        value={search}
        type="search"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        className="w-80 h-20 text-center text-black shadow-gray-300 shadow-lg border-2 border-black rounded-[3rem] text-3xl"
      />
       </div>
         {/* date time local */}
  <div className="w-screen text-2xl font-bold md:pt-40 md:text-3xl text-center mb-16">
       <h2 className="mx-5 lg:mx-0">Date:{date.toLocaleDateString()}</h2>
       <h2 className="md:mx-5 lg:mx-0">Time:{date.toLocaleTimeString()}</h2>
       </div>
      </div>
      {!data ? (
        <>
        {/* No DATA FOUND */}
          <h1 className="text-center text-4xl font-serif font-500 font-bold">No Data Found</h1>
        </>
      ) : (
        <>
        {/* data temp */}
          <div className="text-4xl font-serif text-center my-4 lg:my-4">
            <h1>{data.temp} cel</h1>
          </div>
          {/* search */}
          <div className="text-5xl font-serif text-center my-8">
            <h1>{search.toUpperCase()}</h1>
          </div>
 
  {/* max min temperature */}
          <div className="sm:flex sm:flex-cols sm:items-center sm:justify-content-center flex md:justify-center text-3xl font-600 my-6">
            <div className="mx-4">Max Temp : {data.temp_max}</div>
            <div className="mx-4">Min Temp : {data.temp_min}</div>
          </div>
        </>
      )}
       </div>
    </>
  );
}

export default Home;
