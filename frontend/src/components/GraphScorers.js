
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

class GraphScorers extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          loading: false,
          items: null,
          bestScorerState: JSON.parse(sessionStorage.getItem("bestScorers")),
        }
      }

    render () {
        var bestScorers = JSON.parse(sessionStorage.getItem("bestScorers"));
        /*this.setState({
            bestScorerState: [ ...this.state.bestScorerState, ...bestScorers]
            })*/
        console.log(this.state.bestScorerState)
        //console.log(bestScorers)
        const data1 = [
            {
              name: "PPM",
              uv: bestScorers[0].average.points,
            },
            {
              name: "RPM",
              uv: bestScorers[0].average.rebounds,
            },
            {
              name: "APM",
              uv: bestScorers[0].average.assists,
            },
            {
              name: "FT",
              uv: bestScorers[0].average.free_throws_made,
            },
            {
              name: "3P",
              uv: bestScorers[0].average.three_points_made,
            },
          ];

          const data2 = [
            {
              name: "PPM",
              uv: bestScorers[1].average.points,
            },
            {
              name: "RPM",
              uv: bestScorers[1].average.rebounds,
            },
            {
              name: "APM",
              uv: bestScorers[1].average.assists,
            },
            {
              name: "FT",
              uv: bestScorers[1].average.free_throws_made,
            },
            {
              name: "3P",
              uv: bestScorers[1].average.three_points_made,
            },
          ];

          const data3 = [
            {
              name: "PPM",
              uv: bestScorers[2].average.points,
            },
            {
              name: "RPM",
              uv: bestScorers[2].average.rebounds,
            },
            {
              name: "APM",
              uv: bestScorers[2].average.assists,
            },
            {
              name: "FT",
              uv: bestScorers[2].average.free_throws_made,
            },
            {
              name: "3P",
              uv: bestScorers[2].average.three_points_made,
            },
          ];

          const data4 = [
            {
              name: "PPM",
              uv: bestScorers[3].average.points,
            },
            {
              name: "RPM",
              uv: bestScorers[3].average.rebounds,
            },
            {
              name: "APM",
              uv: bestScorers[3].average.assists,
            },
            {
              name: "FT",
              uv: bestScorers[3].average.free_throws_made,
            },
            {
              name: "3P",
              uv: bestScorers[3].average.three_points_made,
            },
          ];

          const data5 = [
            {
              name: "PPM",
              uv: bestScorers[4].average.points,
            },
            {
              name: "RPM",
              uv: bestScorers[4].average.rebounds,
            },
            {
              name: "APM",
              uv: bestScorers[4].average.assists,
            },
            {
              name: "FT",
              uv: bestScorers[4].average.free_throws_made,
            },
            {
              name: "3P",
              uv: bestScorers[4].average.three_points_made,
            },
          ];

    
  return (
    <div>
     <h3> {this.state.bestScorerState[0].player.full_name} </h3>
     <h5> {this.state.bestScorerState[0].teams[0].name} </h5>
    <BarChart
      width={500}
      height={300}
      data={data1}
      
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
    
    <h3> {this.state.bestScorerState[1].player.full_name} </h3>
    <h5> {this.state.bestScorerState[1].teams[0].name} </h5>
    <BarChart
    width={500}
    height={300}
    data={data2}
    
    >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>

    <h3> {this.state.bestScorerState[2].player.full_name} </h3>
    <h5> {this.state.bestScorerState[2].teams[0].name} </h5>
<BarChart
width={500}
height={300}
data={data3}

>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Bar dataKey="uv" fill="#82ca9d" />
</BarChart>

<h3> {this.state.bestScorerState[3].player.full_name} </h3>
<h5> {this.state.bestScorerState[3].teams[0].name} </h5>
<BarChart
      width={500}
      height={300}
      data={data4}
      
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>

    <h3> {this.state.bestScorerState[4].player.full_name} </h3>
    <h5> {this.state.bestScorerState[4].teams[0].name} </h5>
    <BarChart
    width={500}
    height={300}
    data={data5}
    
    >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
    </div>
    

    
  );
}
}

export default GraphScorers
