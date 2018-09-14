import React, { Component } from 'react';

import { Line } from "react-chartjs-2";
const LineGraph=(props)=>{


   let dataToPass= props.data.map(element => {
 return element.main[props.kind]
    });


    return(
        <Line data={  {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
        label: "Temperature",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: dataToPass,
        }]
    }
        }
        height={200}
        />
    )
}
export default LineGraph;