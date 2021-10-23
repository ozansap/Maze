export default function MazeGenerator({ generateMaze_full, generateMaze_step }) {
	return (
		<div className="mazeGenerator">
			<button onClick={generateMaze_full}>Create new Maze</button>
			<button onClick={generateMaze_step}>Next step</button>
		</div>
	)
}