export default function MazeGenerator({ generateMaze_full, generateMaze_step, generateMaze_anim }) {
	return (
		<div className="mazeGenerator">
			<button onClick={generateMaze_full}>Create new Maze</button>
			<button onClick={generateMaze_step}>Next step</button>
			<button onClick={() => generateMaze_anim(50)}>Animation</button>
		</div>
	)
}