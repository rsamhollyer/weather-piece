import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
import { useState, useEffect } from "react";

const SpeedGraph = (props) => {
	const { chartData } = props;
	const [chartAxis, setChartAxis] = useState([{ x: 0, y: 0 }]);
	let arr = [];
	/*
	Get chart data [{},{},{}....] 
	Loop thru and push the time and speed value out as it updates and pass them down to the graph data component
	*/
	return (
		<div className="speed-graph-component">
			<h2>Speed Graph</h2>

			<VictoryChart theme={VictoryTheme.material}>
				<VictoryLine
					style={{
						data: { stroke: "#c43a31" },
						parent: { border: "1px solid #ccc" },
					}}
					data={chartAxis}
					scale={{ x: "time", y: "linear" }}
				/>
			</VictoryChart>
		</div>
	);
};
export default SpeedGraph;
