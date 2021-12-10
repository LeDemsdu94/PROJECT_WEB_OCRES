import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import '../cssFiles/Graphs.css';

class GraphAssists extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          loading: false,
          items: null,
          bestAssistsState: JSON.parse(sessionStorage.getItem("bestAssists")),
        }
      }

    render () {
        var bestAssists = JSON.parse(sessionStorage.getItem("bestAssists"));
        /*this.setState({
            bestScorerState: [ ...this.state.bestScorerState, ...bestScorers]
            })*/
        //console.log(this.state.bestScorerState)
        //console.log(bestScorers)
        const data1 = [
            {
              name: "PPM",
              uv: bestAssists[0].average.points,
            },
            {
              name: "RPM",
              uv: bestAssists[0].average.rebounds,
            },
            {
              name: "APM",
              uv: bestAssists[0].average.assists,
            },
            {
              name: "FT",
              uv: bestAssists[0].average.free_throws_made,
            },
            {
              name: "3P",
              uv: bestAssists[0].average.three_points_made,
            },
          ];

          const data2 = [
            {
              name: "PPM",
              uv: bestAssists[1].average.points,
            },
            {
              name: "RPM",
              uv: bestAssists[1].average.rebounds,
            },
            {
              name: "APM",
              uv: bestAssists[1].average.assists,
            },
            {
              name: "FT",
              uv: bestAssists[1].average.free_throws_made,
            },
            {
              name: "3P",
              uv: bestAssists[1].average.three_points_made,
            },
          ];

          const data3 = [
            {
              name: "PPM",
              uv: bestAssists[2].average.points,
            },
            {
              name: "RPM",
              uv: bestAssists[2].average.rebounds,
            },
            {
              name: "APM",
              uv: bestAssists[2].average.assists,
            },
            {
              name: "FT",
              uv: bestAssists[2].average.free_throws_made,
            },
            {
              name: "3P",
              uv: bestAssists[2].average.three_points_made,
            },
          ];

          const data4 = [
            {
              name: "PPM",
              uv: bestAssists[3].average.points,
            },
            {
              name: "RPM",
              uv: bestAssists[3].average.rebounds,
            },
            {
              name: "APM",
              uv: bestAssists[3].average.assists,
            },
            {
              name: "FT",
              uv: bestAssists[3].average.free_throws_made,
            },
            {
              name: "3P",
              uv: bestAssists[3].average.three_points_made,
            },
          ];

          const data5 = [
            {
              name: "PPM",
              uv: bestAssists[4].average.points,
            },
            {
              name: "RPM",
              uv: bestAssists[4].average.rebounds,
            },
            {
              name: "APM",
              uv: bestAssists[4].average.assists,
            },
            {
              name: "FT",
              uv: bestAssists[4].average.free_throws_made,
            },
            {
              name: "3P",
              uv: bestAssists[4].average.three_points_made,
            },
          ];

    
  return (
    <div>
      <div className="joueur">
     <h3> {this.state.bestAssistsState[0].player.full_name} </h3>
     <h5> {"Team : "+this.state.bestAssistsState[0].teams[0].name} </h5>
    <BarChart className="graph"
      width={500}
      height={300}
      data={data1}
      
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="uv" fill="#d38741" />
    </BarChart>
    </div>

    <div className="joueur">
    <h3> {this.state.bestAssistsState[1].player.full_name} </h3>
    <h5> {"Team : "+this.state.bestAssistsState[1].teams[0].name} </h5>
      <BarChart className="graph"
      width={500}
      height={300}
      data={data2}
      
      >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="uv" fill="#d38741" />
      </BarChart>
    </div>

    <div className="joueur">
    <h3> {this.state.bestAssistsState[2].player.full_name} </h3>
    <h5> {"Team : "+this.state.bestAssistsState[2].teams[0].name} </h5>
      <BarChart className="graph"
      width={500}
      height={300}
      data={data3}

      >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="uv" fill="#d38741" />
      </BarChart>
</div>

<div className="joueur">
        <h3> {this.state.bestAssistsState[3].player.full_name} </h3>
        <h5> {"Team : "+this.state.bestAssistsState[3].teams[0].name} </h5>
          <BarChart className="graph"
          width={500}
          height={300}
          data={data4}
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="uv" fill="#d38741" />
        </BarChart>
    </div>

    <div className="joueur">
      <h3> {this.state.bestAssistsState[4].player.full_name} </h3>
      <h5> {"Team : "+this.state.bestAssistsState[4].teams[0].name} </h5>
        <BarChart className="graph"
        width={500}
        height={300}
        data={data5}
        
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="uv" fill="#d38741" />
        </BarChart>
    </div>
    </div>
    

    
  );
}
}

export default GraphAssists