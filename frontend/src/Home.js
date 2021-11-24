import React from 'react';
import ControlledCarousel from './components/ControlledCarousel';
import './cssFiles/home.css';

export default function Home(){
    return(
        <div className="wrap">
            <div>
                <h2>News of the day</h2>
                <ControlledCarousel />
                <h2>Hello wrorld</h2>
                <p>Stare at the celing now we here.</p>
            </div>
        </div>
    )
}
