import React from 'react';
import Loader from './Loader.js';

export default function Result(props) {
  const { weatherData: data } = props;

  function kelvintoCelcius(k) {
    return (k - 273.15).toFixed(2) + 'c';
  }
  console.log(props);

  function getTheDate(stamp) {
    const date = new Date(stamp * 1000)
    return date.tolocalTimeString();
  }

  let showOnPage; 
  if (data == null) {
    if(props.isSearched === true)
    showOnPage = <Loader />; 
    else
    showOnPage = (
        <div className='container'>
          <h1 className='text-center mt-2'>please search a city</h1>
        </div>
      ) 
  }
  else {
    showOnPage = <div className='row'>
      <div className='col'>
        <div className='card border-primary'>
          <div className='card-body'>
            <h4 className='card-title'>
              <img src={'https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'} alt='icon' />
              {data.name} ({kelvintoCelcius(data.main.temp)}) <span className='pl-2'>{data.weather[0].description} </span>
            </h4>
            <div className='row'>
              <div className='col'>
                <div className='row'>
                  <table className='table'>
                    <tbody>
                      <tr>
                        <th>feels like</th>
                        <td>{kelvintoCelcius(data.main.feels_like)} </td>
                      </tr>
                      <tr>
                        <th>min temp</th>
                        <td>{kelvintoCelcius(data.main.temp_min)}</td>
                      </tr>
                      <tr>
                        <th>max temp</th>
                        <td>{kelvintoCelcius(data.main.temp_max)}</td>
                      </tr>
                      <tr>
                        <th>sunrise </th>
                        <td>{getTheDate(data.sys.sunrise)}</td>
                      </tr>
                      <tr>
                        <th>sunset </th>
                        <td>{getTheDate(data.sys.sunset)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* <p className='card-text'>country</p> */}
          </div>
        </div>
      </div>
    </div>

  }

  return (
    <> 
      { showOnPage } 
    </>
  )
}
