import React, { Component, useEffect, useState } from "react";
import {Line} from 'react-chartjs-2';

// export default class Chart extends Component {
//   render() {
//     var closePrice = this.props.data.map((data) => {
//       return data.close;
//     });
//     var date = this.props.data.map((data) => {
//       return data.date;
//     });
//    var dataSets={
//         labels: date,
//         datasets: [
//           {
//             label: "Closing Price",
//             data: closePrice,
//             backgroundColor: "rgba(0,255,0,0.75)",
//           },
//         ],
//       }
//   var options={
//     maintainAspectRatio: true,
//     scales:{
//       yAxes: [{
//         scaleLabel: {
//           display: true,
//           labelString: '($)'
//         }
//       }]
//     }
//   } 
//     return (
//       <div>
//         <Line
//           data={dataSets}
//           options={options}
//         />
//       </div>
//     );
//   }
// }

export default function Chart(props)
{
    const [closeprice, setcloseprice]= useState([]);
    const [date, setdate]= useState([]);

    var dataSets={
        labels: date,
        datasets: [
          {
            label: "Closing Price",
            data: closeprice,
            backgroundColor: "rgba(0,255,0,0.75)",
          },
        ],
      }
  var options={
    maintainAspectRatio: true,
    scales:{
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: '($)'
        }
      }]
    }
  } 

  useEffect(() => {
       props.data.map((data) => {
    setcloseprice(data.close)});
    },[closeprice])
  

  useEffect(() => {console.log(props.data);
    props.data.map((data) => {
 setdate(data.date)});
 },[date])

  
    return (
        <div>
          <Line
            data={dataSets}
            options={options}
          />
        </div>)
}
      
