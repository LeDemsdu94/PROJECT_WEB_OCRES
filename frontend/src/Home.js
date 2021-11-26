import React from 'react';
import ControlledCarousel from './components/ControlledCarousel';
import MatchResults from './components/MatchResults';
import './cssFiles/home.css';

export default function Home(){
    return(
        <>
        <div className="wrap">
                <h2 className="textNewsTitle">Top leaders in statistics</h2>
                <ControlledCarousel />
        </div>

        <div>
            <h2>Match and results</h2>
            <MatchResults />
            <p>Mettre le component des matchs et résultats ici</p>
        </div>

        <div>
            <p></p>
            <p>Mettre le component des rankings ici</p>
        </div>
        </>
    )
}
