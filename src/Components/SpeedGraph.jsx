import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
import { useState } from "react";

const SpeedGraph = (props) => {
	const { chartData } = props;
	const [chartAxis, setChartAxis] = useState([{ x: 0, y: 0 }]);

	console.log(`CHARTDATA ${chartData}`);
	console.log(`CHARTAXIS ${chartAxis}`);

	if (chartData.length > 1) {
		setChartAxis([...chartAxis, { x: chartData.speed, y: chartData.time }]);
	}

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
