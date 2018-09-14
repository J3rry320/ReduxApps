import React, { Component } from 'react';

import { Line } from "react-chartjs-2";
const randomColorGenerator=()=>{
    let color=[]
    for(let i=0;i<=3;i++){
       color.push( Math.round(Math.random()*255));

    }
  return `rgb(${color[0]},${color[1]},${color[2]})`

}
const LineGraph=(props)=>{


   let dataToPass= props.data.map(element => {
 return element.main[props.kind]
    });
    let labelToPass=props.kind;


    return(
        <Line data={  {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
        label: labelToPass,

        borderColor: randomColorGenerator(),
        data: dataToPass,
        }]
    }
        }
        height={200}
        />
    )
}
export default LineGraph;