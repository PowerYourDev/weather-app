import React, { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [result, setresult] = useState("");
  const changeHandler = (e) => {
    setCity(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`
    )
      .then((res) => res.json())
      .then((data) => {
        const kelvin = data.main.temp;
        const cel = kelvin - 273.35;
        setresult("Temperature at " + city + "\n" + Math.round(cel) + "°C");
        setCity("");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <center>
        <div id="card">
          <div id="card-body">
            <h2 id="card-title">Weather App</h2>
            <form onClick={submitHandler}>
              <input
                type="text"
                name="city"
                value={city}
                onChange={changeHandler}
              />
              <br />
              <br />
              <input type="submit" value="Get Temperature" />
            </form>
          </div>
          <h1> {result}</h1>
        </div>
      </center>
    </>
  );
}
export default Weather;
