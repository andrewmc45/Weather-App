import React, { useState, useEffect, Component } from 'react'
import axios from 'axios'



function App() {
 useEffect(() => {
   console.log('use effect ran')
 });

  const [data, setData] = useState({})
  //useState hook instead of a constructor
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=b2e45bafabcf2953081d1d40b1c00602`
  //https://api.openweathermap.org/data/2.5/weather?q=Halifax&units=metric&appid=b2e45bafabcf2953081d1d40b1c00602
//https://openweathermap.org/current
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
      //sets the search to an empty string
    }
  }
// props for value, onChange, onKeyPress, placeholder
  return (
    <div className="app">
      <div className='search'>
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
          
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp}°C</h1> : null}
            <div className='description'>
              {data.weather ? <p>{data.weather[0].main}</p> : null}
             
              
            </div>
          </div>
        </div>

        {data.name != undefined &&
          <div className='bottom'>
            <div className='feels'>
              <p >Feels Like</p>
              {data.main ? <p className='bold'>{data.main.feels_like}°C</p> : null}
              <div className='humidity'>
                <p>Humidity</p>
                {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              </div>
              <div className='wind'>
              <p>Wind Speed</p>
                {data.wind ? <p className='bold'>{data.wind.speed} km/h</p> : null}
              </div>
            </div>
            </div>
}      
      </div>
    </div>
  );
}

// class Count extends React.Component {
//   constructor()
//   {
//     super();
//     this.state={
//       data:1
//     }
//   }
//   updateData()
//   {
//     this.setState({data:this.state.data+1})
//   }
//   render()
//   {
//     return (
//       <div className="Count">
//         <h1>{this.state.data}</h1>
//         <button onClick={()=>this.updateData()} >Update Counter</button>
//       </div>
//     );
//   }
// }

// class Count extends React.Component {
//   render() {
//     this.state = [
//       {weather: "Cloudy", temp: "5°C"},
//       {weather: "Snow", temp: "-11°C"},
//       {weather: "Sunny", temp: "12°C"},
//     ];
//     return (
//       <div>
//         {this.state.map((weatherInfo) => {
//           return (
//             <div>
//               <h1>{weatherInfo.weather}</h1>
//               <h2>{weatherInfo.temp}</h2>
//               </div>
//           );
//         })}
//       </div>
//     );
//   }
// }
 export  default App;
// export default Count;
