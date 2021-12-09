import React from 'react';
import ControlledCarousel from './components/ControlledCarousel';
import TopRanking from './components/TopRanking'
import './cssFiles/home.css';
import Results from './components/Results';

export default function Home(){
    return(
        <>
        
        <div className="wrap">
                <h2 className="textTitle">Top leaders in statistics</h2>
                <ControlledCarousel />
        </div>

        <div>
            <h2 className="textTitle">Results of the day</h2>
            <Results />
            <br/>
        </div>

        <div>
            <p></p>
            <TopRanking/>
        </div>
        </>
    )
}
