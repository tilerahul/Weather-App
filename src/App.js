import './App.css';
import React, { useEffect, useState } from "react";


function App() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Pune");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=af33f812f5cf691bc74a03293d40a7c5`
      const response = await fetch(url);
      // console.log(response);
      const resJson = await response.json();
      // console.log(resJson);
      setCity(resJson.main);
    }


    fetchApi();
  }, [search])

  return (
    <>
      <div className="main container d-flex justify-content-center align-items-center flex-column">
        <h1 className='text-center my-4'>Weather Application</h1>
        <div className="main-div">
          <form className="form">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value)
              }}
            />
          </form>
          <div className="space text-center"><i className="fa-solid fa-cloud-sun fa-2xl fa-beat"></i></div>
          {
            !city ? (
              <div className="text-center text-light mt-3">
                <h4>No Data Found</h4>
              </div>
            ) : (
              <div>
                <div className="text-center text-light">
                  <h2><i className="fa-solid fa-flip fa-location-dot mx-2"></i>{search}</h2>
                </div>
                <div className="text-center text-light mt-3">
                  <h4>{city.temp} °Cel</h4>
                </div>
                <div className="text-center text-light my-4">
                  <h5><span className='text-dark'>Min : </span>{city.temp_min} |<span className='text-dark'> Max : </span>{city.temp_max}</h5>
                </div>
              </div>
            )
          }


        </div>
      </div>
        <footer className='text-center my-4'><p>All Rights Reserved 2023 | RAHUL TILE</p></footer>

    </>
  );
}

export default App;
