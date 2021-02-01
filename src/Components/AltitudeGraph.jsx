import { VictoryChart, VictoryLine, VictoryTheme } from "victory";

const AltitudeGraph = () => {
	return (
		<div className="alt-graph-comp">
			<h2>Alt. Graph</h2>
			<VictoryChart theme={VictoryTheme.material}>
				<VictoryLine
					style={{
						data: { stroke: "#c43a31" },
						parent: { border: "1px solid #ccc" },
					}}
					data={[
						{ x: 0, y: 0 },
						{ x: 2, y: 3 },
						{ x: 3, y: 5 },
						{ x: 4, y: 4 },
						{ x: 5, y: 7 },
					]}
				/>
			</VictoryChart>
		</div>
	);
};

export default AltitudeGraph;
