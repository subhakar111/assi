import React from 'react';
import {useEffect, useState} from 'react';import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { Link } from 'react-router-dom';




    export default function Stocks() {

        const [rowData, setRowData] = useState([]);
    
        const [gridApi, setGridApi] = useState(null);
    
        const [gridColumnApi, setGridColumnApi] = useState(null);
    
        const onFilterTextChange=(e)=>{
            gridApi.setQuickFilter(e.target.value)
          }
    
          function onGridReady(params) {
    
            setGridApi(params.api);
            setGridColumnApi(params.columnApi);
          }
    
         // const actionButton=(params)=>{
           // console.log(params);
          //  alert(` ${params.data.symbol}`)
          //}
    
        const columns= [
            { headerName: "Symbol", field: "symbol",cellRendererFramework:(params)=><div><Link to={'/Quotes/ ${params.data.symbol}'}>{params.data.symbol}</Link></div>},
            { headerName: "Name", field: "name"},
            { headerName: "Industry", field: "industry"},
            {headerName: "Stock performance",field:"symbol",
        cellRendererFramework:(params)=><div>
          <Link to={'/Quotes/{params.data.symbol}'}>Insights of {params.data.symbol}</Link>
        </div>}
            ];
    
        /*const table= {
    
         columns: [
            { headerName: "Symbol", field: "symbol"},
            { headerName: "Name", field: "name"},
            { headerName: "Industry", field: "industry"}
            ],
    
            rowData: [
                {symbol: "bha", name: "bhauu", industry: "technology"},
                {symbol: "bha", name: "bhauu", industry: "technology"},
                {symbol: "bha", name: "bhauu", industry: "technology"}
                
            ]
        };*/
    
            useEffect(() => {
                fetch("https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=92ff719e13cab86c0e1258563a738669")
                .then(res =>res.json())
                .then( data=>
                     data.map(stock=> {
                         return {
                             symbol: stock.symbol,
                             name: stock.name,
                             industry: stock.sector
                         };
                     }) )
    
                     .then(stocks => setRowData(stocks) );
                    }, []);
    
                    
                
    
                    return (
    
                        <div className="ag-theme-balham"
                     style={{
                     height: "300px",
                     width: "700px"
                     }}
                     >
    
    <h1> Stocks</h1>
    <input type="search"  placeholder="Search by symbol or industry..." onChange={onFilterTextChange}/>
    
     <AgGridReact
     onGridReady={onGridReady}
     columnDefs={columns} rowData={rowData}
     defaultColDef={{flex: 1}}
     pagination={true}>
        
    
     </AgGridReact>
    
     </div>
    
    
     
        );   }
    


    