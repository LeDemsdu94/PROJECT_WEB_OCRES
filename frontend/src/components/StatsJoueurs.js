import React from 'react';
import BestScorer from './BestScorer';
import BestAssists from './BestAssists';
import BestRebounder from './BestRebounder';
import '../cssFiles/home.css';

class StatsJoueurs extends React.Component{
    render() {
        return(
            <>
            <div>
                    <h2 className="matchResults">Top 5 Scorers</h2>
                    <BestScorer />
            </div>
            <div>
                    <h2 className="matchResults">Top 5 Assists</h2>
                    <BestAssists />
            </div>
            <div>
                    <h2 className="matchResults">Top 5 Rebounders</h2>
                    <BestRebounder />
            </div>
            </>
        )
    }
}
export default StatsJoueurs
