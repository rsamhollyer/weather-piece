import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
import { useState, useEffect } from "react";

const SpeedGraph = (props) => {
	const { chartData } = props;

	return (
		<div className="speed-graph-component">
			<h2>Speed Graph</h2>

			<VictoryChart theme={VictoryTheme.material}>
				<VictoryLine
					style={{
						data: { stroke: "#c43a31" },
						parent: { border: "1px solid #ccc" },
					}}
					data={chartData}
					scale={{ x: "time", y: "linear" }}
				/>
			</VictoryChart>
		</div>
	);
};
export default SpeedGraph;
