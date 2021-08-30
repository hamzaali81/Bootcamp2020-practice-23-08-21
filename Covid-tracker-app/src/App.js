import React, {useState, useEffect} from "react";
import {
  FormControl,
  MenuItem,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import './App.css';
import InfoBox from './Component/InfoBox/InfoBox';
import Map from './Component/Map/Map';
import Table from './Component/Table/Table';
import { sortData } from './util/util';
import LineGraph from './Component/LineGraph/LineGraph';

const App = () => {
  const [countries, setCountries] = useState([ ]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([])
  // STATE = How to write a variable in REACT
   // USEEFFECT
  //  https://disease.sh/v3/covid-19/countries
  
  useEffect(() => {
    // https://disease.sh/v3/covid-19/all
     fetch('https://disease.sh/v3/covid-19/all')
     .then((response) => response.json())
     .then((data)=> {
       setCountryInfo(data)
     });
  }, []);
   

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
      .then((response)=> response.json())
      .then((data) => {
        console.log(data);
        const countries = data.map((country)=> (
          {
            name: country.country, // United
            value: country.countryInfo.iso2 // UK,US
          }));
          const sortedData = sortData(data);
          setTableData(data)
          setCountries(countries);
      })
    }

    getCountriesData()
  }, []);

  const onChangeCountry = async (e)=> {
    const countryCode = e.target.value;
    // console.log('Y00000 >>>>>', countryCode);
    setCountry(countryCode);

    //https://disease.sh/v3/covid-19/all
    //https://disease.sh/v3/covid-19/countries{countryCode}
    
    const url = countryCode === 'worldwide' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${countryCode}`
    await fetch(url) 
    .then((response)=> response.json())
    .then((data)=> {
      setCountry(countryCode);

      // All of the data....
      // from the country response 
      setCountryInfo(data)
      
    })
  };

  console.log("COUNTRY INFO >>>",countryInfo);
  return (
    <div className="app">
      <div className="app__left">
      <div className="app_header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app_dropdown">
          <Select variant="outlined" onChange={onChangeCountry} value={country}>
            <MenuItem value='worldwide'>worldwide</MenuItem>
            {
              // Loop through all the countries and show a drop down list of the options

              countries.map((country)=> (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))
            }
            
          </Select>
        </FormControl>
      </div>

    
      <div className="app__stats">
        <InfoBox title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases}/>
        <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
        <InfoBox title="Death" cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
      

      </div>

    

      {/* Map */}
      <Map />
      </div>
         <Card className="app__right">
           <CardContent>
             <h3>Live Cases by Country</h3>
            {/* Table */}
            <Table countries={tableData} />
            <h3>Worldwide new cases</h3>
            <LineGraph />
            {/* Graph */}
           </CardContent>
         </Card>
    </div>
  );
};

export default App;
