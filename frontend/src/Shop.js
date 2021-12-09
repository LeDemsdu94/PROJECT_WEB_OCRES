import React from 'react';
import Shopping from './components/Shopping';
import './cssFiles/Shop.css';


export default function Shop(){
    return(
        <div>
            <h2 className="title">Shop</h2>
                <Shopping className="shop"/>
        </div>
    )
}
