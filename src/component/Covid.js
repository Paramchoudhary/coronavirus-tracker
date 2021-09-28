import React, { useEffect , useState} from 'react'
 import './Covid.css';
const Covid = () => {
    const [data, setdata] = useState([]);
 const getCovidData = async () => {
  const res = await fetch('https://data.covid19india.org/data.json');
 const newdata = await res.json();
 console.log(newdata.statewise[0]);

 setdata(newdata.statewise[0]);
 }

 useEffect(() => {
  getCovidData();
    
     
 }, [])

    return (
        <>
        <div className="heading">
          <div className="live-pulse-icon"></div>
          <h6 > LIVE</h6>  
          <h2 >COVID-19 CORONAVIRUS TRACKER</h2>
          </div>
          <div class="container">
  <div className="card">
    <div className="box">
      <div className="content">
      
        <h3>active</h3>
        <p>{data.active}</p>
        
      </div>
    </div>
  </div>

  <div className="card">
    <div className="box">
      <div className="content">
      
        <h3>confirmed</h3>
        <p>{data.confirmed}</p>
       
      </div>
    </div>
  </div>

  <div className="card">
    <div className="box">
      <div className="content">
       
        <h3>Deaths</h3>
        <p>{data.deaths}</p>
      
      </div>
    </div>
  </div>
  <div className="card">
    <div className="box">
      <div className="content">
       
        <h3>Recovered</h3>
        <p>{data.recoverd}</p>
      
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default Covid
