import React from 'react';
import {useParams} from "react-router-dom"
import  { useState, useEffect } from "react";

import Chart from './Chart';

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

export default function Quotes(){


    const [gridApi, setGridApi] = useState(null);
    
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const onFilterTextChange=(e)=>{
        gridApi.setQuickFilter(e.target.value)
      }

      function onGridReady(params) {

        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
      }


    const {symbol} = useParams()

    const [rowData, setRowData] = useState([]);

    

    const columns= [
        { headerName: "Date", field: "date"},
        { headerName: "Open", field: "open"},
        { headerName: "High", field: "high"},
        {headerName: "Low",field:"low"},
        {headerName: "Close",field:"close"},
        {headerName: "Volume",field:"volume"}

    ];
    useEffect(() => {
        fetch(`https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?apikey=1141fe65a0c3de8b9681b275bdd1b695`)
        .then (res=> res.json())
        .then (data=> data.historical)
        .then (historical =>
            historical.map(history => {
                return{
                    date: history.date,
                    open: history.open,
                    high: history.high,
                    low: history.low,
                    close: history.close,
                    volume: history.volume
                };
    })
        )
        
.then(histories => setRowData(histories));
    },[symbol]);


    return (
        <div className="ag-theme-balham"
        style={{
            height: "300px",
            width: "1050px"
            }} >
                <h1> Performance of stock {symbol} </h1>
                <input type="search"  placeholder="Search by date..." onChange={onFilterTextChange}/>

                <AgGridReact 
                
                onGridReady={onGridReady}
                columnDefs={columns} 
                
                rowData={rowData} />

                <Chart data= {rowData} ></Chart>
                    

            
            
        </div>
        
    );
}