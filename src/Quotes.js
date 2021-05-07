import React from 'react';
import {useParams} from "react-router-dom"

export default function Quotes(){
    
const {symbol} = useParams()
    return (
        <div>
            <h1>Quotes {symbol}</h1>
            
        </div>
    );
}