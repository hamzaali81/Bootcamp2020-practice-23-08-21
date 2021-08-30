import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import numeral from 'numeral';

const options = {
    legend: {
        display: false
    },
    elemetnts: {
        points: {
            radius: 0,
        },
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: "index",
        intersect: false,
        callbacks: function(tooltipItem, data){
            return numeral(tooltipItem.value).format("+0,0")
        }
    }, 
 scales: {
     xAxes: [
         {
         type: "time",
         time: {
             format: "MM/DD/YY",
             tooltipFormat: "ll"
         },
        }
        ],
     yAxes: [
         {
             gridLines: {
                 display: false
             },
             ticks: {
                 // Include a dollar sign in the ticks
                 callback: function(value, index, values) {
                     return numeral(value).format("0a")
                 }
             }
         }
     ]
 }
}

const LineGraph = ({ casesType = 'cases' }) => {
    const [data, setData] = useState({});
    // https://disease.sh/v3/covid-19/all?lastdays=120

    const buildChartData = (data, casesType) => {
        const chartData = [];
        let lastDataPoint;

        for(let date in data.case) {
        // data[casesType].forEach((date)=> {
            if(lastDataPoint) {
                // ...
                const newDataPoint = {
                    x: date,
                    y: data[casesType][date] - lastDataPoint
                }
                chartData.push(newDataPoint);
            }
            lastDataPoint = data['cases'][date]
        }
        return chartData;
    };


    useEffect(() => {
       const fetchData = async ()=> {

           await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
          .then((response) => response.json())
          .then((data)=> {
              // clever stuff here ...
              
              let chartData = buildChartData(data, casesType);
              setData(chartData)
          })
       }
       fetchData();
    }, [casesType]);

    
    return (
        <div>
            <h1>I am a graph</h1>
            {/* Line data options */}
            {
                data?.length > 0 && (
                    
                    <Line 
                    options={options}
                    data={{
                        datasets: [{
                            backgroundColor: "rgba(204, 16, 52, 0.5)",
                            borderColor: "#CC1034"
                            ,data: data,
                        }],
                    }}
                    />
                )
            }
        </div>
    )
}

export default LineGraph;
