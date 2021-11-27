import React from 'react';
import ControlledCarousel from './components/ControlledCarousel';
import MatchResults from './components/MatchResults';
import TopRanking from './components/TopRanking'
import './cssFiles/home.css';

export default function Home(){
    return(
        <>
        <div className="wrap">
                <h2 className="textNewsTitle">Top leaders in statistics</h2>
                <ControlledCarousel />
        </div>

        <div>
            <h2 className="matchResults">Match and results</h2>
            <MatchResults />
            <p>Mettre le component des matchs et résultats ici</p>
        </div>

        <div>
            <p></p>
            <p>Mettre le component des rankings ici</p>
            <TopRanking/>
        </div>
        </>
    )
}
